import fetch from 'isomorphic-fetch';
import {API} from '../config';
import cookie from 'js-cookie'
export const signup = (user) => {
    return fetch(`${API}/auth/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}

export const signin = (user) => {
    return fetch(`${API}/auth/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const signout = next => {
    removeCookie('token')
    removeLocalStorage('user')
    next()
    return fetch(`${API}/auth/signout`, {
        method: 'GET'
    })
    .then(res => console.log("Logout success"))
    .catch(err => console.error(err))
}
export const setCookie = (key, value) => {
    if(process.browser) {
        cookie.set(key, value, {
            expires: 1
        })
    }
}

export const removeCookie = (key, value) => {
    if(process.browser) {
        cookie.remove(key, value, {
            expires: 1
        })
    }
}
export const getCookie = (key, value) => {
    if(process.browser) {
        return cookie.get(key)
    }
}

export const setLocalStorage = (key, value) => {
    if(process.browser) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}
export const removeLocalStorage = (key, value) => {
    if(process.browser) {
        localStorage.removeItem(key)
    }
}

export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    next()
}

export const isAuth = () => {
    if(process.browser) {
        const cookieChecked = getCookie('token');
        if(cookieChecked) {
            if(localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false;
            }
        }

    }
}