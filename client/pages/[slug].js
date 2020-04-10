import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import { getBlog, getRelated } from '../actions/blog'
import { API, DOMAIN, APP_NAME, FP_APP_ID} from '../config'
import renderHTML from 'react-render-html'
import moment from 'moment'

const Blog = ({blog}) => {
    const [related, setRelated] = useState([])
    const loadRelated = () => {
        getRelated({blog}).then(data=> {
            if(data.error) {
                console.log(data.error);
            } else {
                setRelated(data)
            }
        })
    }
    useEffect(() => {
        loadRelated()
    }, [])
    const head = () => {
        return(
            <Head>
                <title>{blog.title} | {APP_NAME}</title>
                <meta name="description" content={blog.metaDesc}/>
                <link rel="canonical" href={`${DOMAIN}/blogs/${blog.slug}`} />
                <meta property="og:title" content={`${blog.title} || ${APP_NAME}`} />
                <meta property="og:description" content={blog.metaDesc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${DOMAIN}/blogs/${blog.slug}`} />
                <meta property="og:site_name" content={`${APP_NAME}`} />

                <meta property="og:image" content={`${API}/posts/photo/${blog.slug}`} />
                <meta property="og:image:secure_url" content={`${API}/posts/photo/${blog.slug}`} />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="fb:app_id" content={FP_APP_ID} />
            </Head>
        )
    }
    const showBlogCategories = () => {
        return blog.categories && blog.categories.map((c,i) => {
            return(
                <Link key={i} href={`/categories/${c.slug}`}>
                    <a className="mr-1 ml-1 mt-3 mb-3">{c.name}</a>
                </Link>
            )
        })
    }
    const showBlogTags = () => {
        return blog.tags && blog.tags.map((t,i)=> {
            return(
                <Link key={i} href={`/categories/${t.slug}`}>
                    <a className="mr-1 ml-1 mt-3 mb-3">{c.name}</a>
                </Link>
            )
        })
    }
    const showRelatedBlogs = () => related && related.map((blog,i)=> <div className="col s-12 m-4 l-4" key={i}>
        <a href="#" class="related-item">
            <div class="related-item__header">
                <div class="related-item__image-frame">
                    <img class="related-item__image-img" src={`${API}/posts/photo/${blog.slug}`} alt="" />
                </div>
            </div>
            <div class="related-item__body">
                <h3 class="related-item__title">{blog.title}</h3>
            </div>
            {/* <div class="related-item__footer">
                <p class="related-item__desc">
                    Before we go into all the elements of the marketing mix, and to avoid confusion between the 4p's, 7p's and even the 4c's 
                </p>
            </div> */}
        </a>
    </div>)

    return(
        <>
            {head()}
            <Layout>
                <main className="blog-items">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col s-12 m-9 l-9">
                                <article className="post">
                                        <header>
                                            <div className="featured-image">
                                                <img src={`${API}/posts/photo/${blog.slug}`} alt={blog.title}/>
                                            </div>
                                            <h1 className="post__title">
                                                {blog.title}
                                            </h1>
                                        </header>
                                        <section>
                                            <p className="post__info">
                                                Posted by {blog.author.name} | Published{" "}
                                                {moment(blog.updateAt).fromNow()} | {showBlogCategories()}
                                            </p>
                                        </section>
                                        <div className="post__content">
                                            {renderHTML(blog.body)}
                                        </div>
                                        <footer className="post__footer">
                                            <p className="post__cate">Chuyên mục: {showBlogCategories()} | {showBlogTags()}</p>
                                            <div className="post__related">
                                                <h5 className="post__related-title">Cùng chuyên mục</h5>
                                                <div className="row">
                                                {showRelatedBlogs()}
                                                </div>
                                            </div>
                                        </footer>
                                </article>
                            </div>
                            <div className="col s-0 m-3 l-3">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}
Blog.getInitialProps =({ query }) => {
    return getBlog(query.slug)
                .then(data=> {
                    if(data.error) {
                        console.log(data.error);
                    } else {
                        return {
                            blog: data
                        }
                    }

                })
}
export default Blog