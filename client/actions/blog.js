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