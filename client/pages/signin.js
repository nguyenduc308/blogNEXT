import Layout from '../components/layout'
import SignInComponent from '../components/auth/signin'
const SignIn = () => {
    return (
        <Layout>
                <div className="grid wide">
                    <div className="user-actions-page">
                        <div className="user-actions-box">
                            <h2 className='admin-page-title'>Đăng nhập</h2>
                            <SignInComponent />
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

export default SignIn
