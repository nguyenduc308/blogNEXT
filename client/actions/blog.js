import fetch from 'isomorphic-fetch';
import {API} from '../config';

export const create = (blog, token) => {
    return fetch(`${API}/posts`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: blog
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const getAll = (limit, page) => {
    const data = {
        limit, page
    }
    return fetch(`${API}/posts/all`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const getBlog = slug => {
    return fetch(`${API}/posts/${slug}`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .catch(err => console.log(err))
}
export const getRelated = (blog,limit) => {
    return fetch(`${API}/posts/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const getBlogsForAd = () => {
    return fetch(`${API}/posts`, {
        method: 'GET'
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const deleteBlog = (slug, token) => {
    return fetch(`${API}/posts/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const updateBlog = (blog, token, slug) => {
    return fetch(`${API}/posts/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: blog
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
