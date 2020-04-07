import Layout from '../components/layout'
import Link from 'next/link'
import SignUpComponent from '../components/auth/signup'
const SignUp = () => {
    return (
        <Layout>
            <h2 className='text-center mt-4'>Đăng ký</h2>
            <div className="row justify-content-center">
                <div className="col-10 col-md-6">
                    <SignUpComponent />
                </div>
            </div>
        </Layout>
    )
}

export default SignUp
