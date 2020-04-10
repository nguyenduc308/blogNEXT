import { useState, useEffect } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { getCookie} from '../../actions/auth'
import { getCategories } from '../../actions/category'
import { getTags } from '../../actions/tag'
import { getBlogsForAd, deleteBlog } from '../../actions/blog'
const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    const [msg, setMsg] = useState('')
    const token = getCookie('token')
    const [reload, setReload] = useState(false)
    const loadBlogs = () => {
        getBlogsForAd()
            .then(data => {
                if(data.error) {
                    setMsg(data.error)
                } else {
                    setBlogs(data)
                }
            })
    }
    useEffect(()=> {
        loadBlogs()
    },[reload])
    const confirmDelete = (slug) => {
        const isConfirm = window.confirm('Are you sure ?')
        if(isConfirm) {
            deleteBlog(slug, token)
                .then(data=> {
                    if(data.error) {
                        console.log(data.error);
                    } else {
                        setReload(!reload)
                        setMsg(data.msg)
                    }
                })

        }
    }
    const showBlogs = () => (
        blogs && blogs.map((blog,i) => {
            return <li className="mt-2 mb-2 pb-2" key={i} style={{borderBottom: '1px solid #ccc'}}>
                <Link href={`/admin/crud/${blog.slug}`}>
                <a className="btn btn-warning mr-1 ml-1">Edit</a>
                </Link>
                <button 
                className="btn btn-danger mr-3"
                onClick={()=> confirmDelete(blog.slug)}
                >
                    Delete
                </button>
                <Link href={`/${blog.slug}`}>
                    <a>{blog.title}</a>
                </Link>
                <span className='ml-2' style={{color:'#ccc'}}>Lastest update: {blog.updatedAt}</span>
            </li>
        })
    )
    const showMsg = () => {
        if(msg) return <p className="alert alert-warning">{msg}</p>
    }
    return(<>
        {showMsg()}
        <ol>
            {showBlogs()}
        </ol>
    </>)
}

export default BlogList