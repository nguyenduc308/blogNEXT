import fetch from 'isomorphic-fetch';
import {API} from '../config';

export const create = (category, token) => {
    return fetch(`${API}/categories`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET',
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const getCategory = (slug) => {
    return fetch(`${API}/categories/${slug}`, {
        method: 'GET',
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const deleteCategory = (slug, token) => {
    return fetch(`${API}/categories/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}

