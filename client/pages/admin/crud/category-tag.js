import Layout from '../../../components/layout'
import Admin from '../../../components/auth/Admin'
import Link from 'next/link'
import Category from '../../../components/crud/Category'
import Tag from '../../../components/crud/Tag'
const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
                <div className="admin-page">
                    <div className="grid wide">
                        <h2 className="admin-page-title"> Manage Categories and tag</h2>
                        <div className="row">
                        <div className="col s-12 m-6 l-6">
                            <Category />
                        </div>
                        <div className="col s-12 m-6 l-6">
                            <Tag />
                        </div>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default CategoryTag
