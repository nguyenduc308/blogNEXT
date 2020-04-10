import Layout from '../../components/layout'
import Admin from '../../components/auth/Admin'
import Link from 'next/link'

const AdminDashBoard = () => {
    return (
        <Layout>
            <Admin>
                <div className="admin-page">
                <div className="grid wide">
                    <h2 className="admin-page-title"> Admin DashBoard</h2>
                    <div className="row">
                        <div className="col s-12 l-4 m-4">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link href="admin/crud/category-tag">
                                <a>Manage Category</a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="admin/crud/category-tag">
                                <a>Manage Tag</a>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <a  href="admin/crud/blog">Add new post</a>
                            </li>
                            <li className="list-group-item">
                                <Link href="admin/crud/blogs">
                                <a>Update/Delete</a>
                                </Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col s-12 l-8 m-8">
                            <div className="admin-infomation">
                                Chart here
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminDashBoard
