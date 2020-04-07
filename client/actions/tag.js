import fetch from 'isomorphic-fetch';
import {API} from '../config';

export const create = (tag, token) => {
    return fetch(`${API}/tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(tag)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const getTags = () => {
    return fetch(`${API}/tags`, {
        method: 'GET',
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const getTag = (slug) => {
    return fetch(`${API}/tags/${slug}`, {
        method: 'GET',
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}
export const deleteTag = (slug, token) => {
    return fetch(`${API}/tags/${slug}`, {
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

