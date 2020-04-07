import Layout from '../components/layout'
import SignInComponent from '../components/auth/signin'
const SignIn = () => {
    return (
        <Layout>
            <h2 className='text-center mt-4'>Đăng nhập</h2>
            <div className="row justify-content-center">
                <div className="col-10 col-md-6">
                    <SignInComponent />
                </div>
            </div>
        </Layout>
    )
}

export default SignIn
