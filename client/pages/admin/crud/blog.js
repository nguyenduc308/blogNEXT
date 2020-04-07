import Layout from '../../../components/layout'
import Admin from '../../../components/auth/Admin'
import BlogCreate from '../../../components/crud/BlogCreate'
import Link from 'next/link'

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid mt-5">
                        <h2> Add new Post</h2>
                        <BlogCreate />
                </div>
            </Admin>
        </Layout>
    )
}

export default Blog
