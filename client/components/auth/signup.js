import { useState, useEffect } from 'react'
import { signup, isAuth } from '../../actions/auth'
import Link from 'next/link'
import Router from 'next/router'
const style = {
    padding: '40px'
}
const SignUpComponent = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: null,
        loading: false,
        message: null,
        showForm: true
    })
    const {name, email, password, error, loading, message, showForm } = values;
    useEffect(()=> {
        isAuth() && Router.push('/')
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            loading: true,
            error: false
        })
        const user = {email, name, password}
        signup(user)
            .then(data=> {
                if(data.error) {
                    setValues({
                        ...values, 
                        error: data.error,
                        loading: false
                    })
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: null,
                        message: data.msg,
                        showForm: false
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
    const showError = () => (error ? <div style={style}><p className="alert alert-danger">{error}</p></div> : '')
    const showMessage = () => (message ? <div style={style}><p className="alert alert-success">{message}</p></div> : '')
    return (
        <>
        {showError()}
        {showMessage()}
        {showForm && <form onSubmit={handleSubmit} style={style}>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                name="name"
                value={name}
                placeholder="Enter name"
                onChange={handleChange('name')}
                />
            </div>
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
                value="Sign Up"
                />
            </div>
            <p className="text-center">
                Bạn đã có tài khoản ? <Link href='/signin'><a>Đăng nhập</a></Link>
            </p>
        </form> }
    </>
    )
}

export default SignUpComponent;