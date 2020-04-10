import Layout from '../components/layout'
import Link from 'next/link'
import SignUpComponent from '../components/auth/signup'
const SignUp = () => {
    return (
        <Layout>
           <div className="grid wide">
                <div className="user-actions-page">
                    <div className="user-actions-box">
                        <h2 className='box__title'>Đăng ký</h2>
                        <SignUpComponent />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SignUp
