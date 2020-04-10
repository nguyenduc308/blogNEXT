import Layout from '../../../components/layout'
import Admin from '../../../components/auth/Admin'
import BlogCreate from '../../../components/crud/BlogCreate'
import Link from 'next/link'

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="admin-page">
                        <div className="grid wide">
                            <h2 className="admin-page-title"> Add new Post</h2>
                            <BlogCreate />
                        </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default Blog
