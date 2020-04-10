import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { getBlog, updateBlog } from "../../actions/blog";
import "../../node_modules/react-quill/dist/quill.snow.css";
import { quillformats, quillmodules } from "../../helpers/reactQuill";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const BlogUpdate = ({ router }) => {
    const [blog, setBlog] = useState({});
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [checked, setChecked] = useState([]);
    const [checkedTag, setCheckedTag] = useState([]);
    const [values, setValues] = useState({
        error: "",
        sizeError: "",
        success: "",
        formData: "",
        title: "",
    });
    const [body, setBody] = useState("");
    const { error, success, formData, title } = values;
    const token = getCookie("token");
    const loadBlog = () => {
        getBlog(router.query.slug).then((data) => {
            if (data) {
                if (data.error) {
                    setValues({
                        ...values,
                        error: data.error,
                    });
                } else {
                    setBlog(data);
                    setValues({
                        ...values,
                        error: "",
                        title: data.title,
                    });
                    setBody(data.body);
                    data.categories && setCategoriesArr(data.categories)
                    data.tags && setTagsArr(data.tags)
                }
            }
        });
    };
    const setCategoriesArr = (categories) => {
        let ca = [];
        categories && categories.map((c,i)=> {
            ca.push(c._id)
        })
        setChecked(ca)
    }
    const setTagsArr = (tags) => {
        let ta = [];
        tags && tags.map((t,i)=> {
            ta.push(t._id)
        })
        setChecked(ta)
    }

    const initCategories = () => {
        getCategories()
            .then((data) => setCategories(data))
            .catch((err) => setValues({ ...values, error: err }));
    };
    const initTags = () => {
        getTags()
            .then((data) => setTags(data))
            .catch((err) => setValues({ ...values, error: err }));
    };
    const getBlogLocalStorage = () => {
        if (typeof window !== "undefined") {
            if (localStorage && localStorage.getItem("blog")) {
                setBody(JSON.parse(localStorage.getItem("blog")));
            } else {
                return false;
            }
        }
    };
    useEffect(() => {
        setValues({
            ...values,
            formData: new FormData(),
        });
        getBlogLocalStorage();
        initTags();
        initCategories();
        loadBlog();
    }, [router]);
    const handleSubmit = (e) => {
        e.preventDefault();
        updateBlog(formData, token, router.query.slug)
            .then(data => {
                if(data.error) {
                    setValues({...values, error: data.error})
                } else {
                    setValues({...values, error: '', success: "OK"})
                }
            })
    };
    const handleChange = (name) => (e) => {
        const value = name === "photo" ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({
            ...values,
            [name]: value,
            formData,
            error: "",
        });
    };
    const handleBody = (e) => {
        setBody(e);
        formData.set("body", e);
        if (localStorage) {
            localStorage.setItem("blog", JSON.stringify(e));
        }
    };
    const updateBlogForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Enter title"
                        className="form-control"
                        onChange={handleChange("title")}
                    />
                </div>
                <div className="form-group">
                    <ReactQuill
                        modules={quillmodules}
                        formats={quillformats}
                        value={body}
                        placeholder="Type songthing"
                        onChange={handleBody}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
            </form>
        );
    };
    const handleToggle = (c) => () => {
        const clickedCategory = checked.indexOf(c);
        let all = [...checked];
        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        setChecked(all);
        formData.set("categories", all);
    };
    const handleTagToggle = (t) => () => {
        setValues({
            ...values,
            error: "",
        });
        const clickedTag = checkedTag.indexOf(t);
        let all = [...checkedTag];
        if (clickedTag === -1) {
            all.push(t);
        } else {
            all.splice(clickedTag, 1);
        }
        setCheckedTag(all);
        formData.set("tags", all);
    };
    const checkedCategoryOut = (id) => {
        const re = checked.indexOf(id)
        if(re !==  -1) {
            return true
        } else {
            return false
        }
    }
    const checkedTagOut = (id) => {
        const re = checkedTag.indexOf(id)
        if(re !==  -1) {
            return true
        } else {
            return false
        }
    }
    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => {
                return (
                    <li key={i} className="list-unstyled">
                        <input
                            checked={checkedCategoryOut(c._id)}
                            onChange={handleToggle(c._id)}
                            type="checkbox"
                            className="mr-2"
                        />
                        <label htmlFor="" className="form-check-label">
                            {c.name}
                        </label>
                    </li>
                );
            })
        );
    };
    const showTags = () => {
        return (
            tags &&
            tags.map((t, i) => {
                return (
                    <li key={i} className="list-unstyled">
                        <input
                            checked={checkedTagOut(t._id)}
                            onChange={handleTagToggle(t._id)}
                            type="checkbox"
                            className="mr-2"
                        />
                        <label htmlFor="" className="form-check-label">
                            {t.name}
                        </label>
                    </li>
                );
            })
        );
    };
    const showError = () => {
        return <div className="alert alert-danger">{error}</div>;
    };
    const showSuccess = () => {
        return <div className="alert alert-success">{success}</div>;
    };
    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    {updateBlogForm()}
                    {error && showError()}
                    {success && showSuccess()}
                </div>
                <div className="col-md-4">
                    <div className="form-group pb-2">
                        <h5>Featured image</h5>
                        <hr />
                        <label htmlFor="photo" className="btn btn-outline-info">
                            Upload image
                        </label>
                        <input
                            type="file"
                            accept="images/*"
                            id="photo"
                            name="photo"
                            onChange={handleChange("photo")}
                            hidden
                        />
                    </div>
                    <div className="categories-list">
                        <h5>Categories</h5>
                        <hr />
                        <ul
                            style={{
                                maxHeight: "400px",
                                overflowY: "scroll",
                            }}
                        >
                            {showCategories()}
                        </ul>
                    </div>
                    <div className="tag-list">
                        <h5>Tags</h5>
                        <hr />
                        <ul
                            style={{
                                maxHeight: "400px",
                                overflowY: "scroll",
                            }}
                        >
                            {showTags()}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default withRouter(BlogUpdate);
