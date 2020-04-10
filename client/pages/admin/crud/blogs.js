import Layout from '../../../components/layout'
import Admin from '../../../components/auth/Admin'
import BlogList from '../../../components/crud/BlogList'
import Link from 'next/link'

const Blogs = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid mt-5">
                        <h2>Blog Manager</h2>
                        <BlogList />
                </div>
            </Admin>
        </Layout>
    )
}

export default Blogs
