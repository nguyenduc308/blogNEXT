import Layout from '../../components/layout'
import Private from '../../components/auth/Private'
import Link from 'next/link'

const UserDashBoard = () => {
    return (
        <Layout>
            <Private>
                <h2>User DashBoard</h2>
            </Private>
        </Layout>
    )
}

export default UserDashBoard
