import { useState, useEffect } from 'react'
import Head from 'next/head'
import Sidebar from '../../components/sidebar'
import { withRouter } from 'next/router'
import Layout from '../../components/layout'
import { getAll } from '../../actions/blog'
import { DOMAIN, APP_NAME, FP_APP_ID} from '../../config'
import Card from '../../components/blog/Card'
const Blogs = ({blogs,size, categories, tags, blogsLimit, blogsPage, router}) => {
    const head = () => {
        return(
            <Head>
                <title>Digital Marketing Blog | {APP_NAME}</title>
                <meta name="description" content="Kiến thức về digital marketing, đầu tư, kinh tế và review sách"/>
                <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
                <meta property="og:title" content={`Kiến thức mới nhất về Digital Marketing || ${APP_NAME}`} />
                <meta property="og:description" content="Digital Marketing Đầu tư Đọc sách" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
                <meta property="og:site_name" content={`${APP_NAME}`} />

                <meta property="og:image" content={`${DOMAIN}/static/images/digitalmarketing.jpg`} />
                <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/digitalmarketing.jpg`} />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="fb:app_id" content={FP_APP_ID} />
            </Head>
        )
    }
    let [page, setPage] = useState(blogsPage)
    let [loadedBlogs, setLoadedBlog] = useState(blogs)
    const loadmore = () => {
        setPage(page+1)
    }
    useEffect(()=> {
        getAll(2, page)
            .then(data => setLoadedBlog(data))
    }, [page])
    const showAllBlog = ()=> {
        return blogs.map((blog,i)=> {
            return(
                <article key={i}>
                    <Card blog={blog} key={i} />
                </article>
            )
        })
    }
    return(
        <>
            {head()}
            <Layout>
                <main className="blog-items">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col s-12 m-9 l-9">
                                <div className="blog-items__controls">
                                    <ul className="controls-list">
                                        <li className="controls-item controls-active">
                                            <a href="/blogs" className="controls-link">
                                                Mới nhất
                                            </a>
                                        </li>
                                        <li className="controls-item">
                                            <a href="/blogs" className="controls-link">
                                                Xem nhiều nhất
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {showAllBlog()}
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

Blogs.getInitialProps = () => {
    let page=1
    let limit=10
    return getAll(limit, page).then(data=> {
        if(data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                size: data.size,
                blogsLimit: limit,
                blogsPage: page
            }
        }
    })
}

export default withRouter(Blogs)