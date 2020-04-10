import Layout from '../../../components/layout'
import BlogUpdate from '../../../components/crud/BlogUpdate'
const UpdateBlog = () => {
    return(
        <Layout>
            <div className="container-fluid">
                <h3>Blog Update</h3>
                <BlogUpdate />
            </div>
        </Layout>
    )
}

export default UpdateBlog;