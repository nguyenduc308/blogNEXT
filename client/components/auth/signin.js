import { useState, useEffect } from 'react'
import { signin, isAuth, authenticate } from '../../actions/auth'
import Link from 'next/link'
import Router from 'next/router'
const SignInComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: null,
        loading: false,
        message: null,
        showForm: true
    })
    const { email, password, error, loading, message, showForm } = values;
    useEffect(()=> {
        if(isAuth() && isAuth().role === 1) {
            Router.push('/admin')
        }
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            loading: true,
            error: false
        })
        const user = {email, password}
        signin(user)
            .then(data=> {
                if(data.error) {
                    setValues({
                        ...values, 
                        error: data.error,
                        loading: false
                    })
                } else {
                        authenticate(data, ()=> {
                            Router.push('/')
                        })
                }
            })
    }
    const handleChange = name => e => {
        setValues({
            ...values,
            error: false,
            [name]: e.target.value
        })
    }
    const showError = () => (error ?<p className="alert alert-danger">{error}</p> : '')
    const showMessage = () => (message ? <p className="alert alert-success">{message}</p> : '')
    return (
        <>
        {showError()}
        {showMessage()}
        {showForm && <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleChange('email')}
                />
            </div>
            <div className="form-group">
                <input 
                type="password" 
                className="form-control"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={handleChange('password')}
                />
            </div>
            <div className="form-group">
                <input 
                disabled={loading ? true : false}
                type="submit" 
                className="form-control bg-primary"
                style={{color: '#fff'}}
                value="Sign In"
                />
            </div>
            <p className="text-center">
                Bạn chưa có tài khoản ? <Link href='/signup'><a>Đăng ký</a></Link>
            </p>
        </form> }
    </>
    )
}

export default SignInComponent;