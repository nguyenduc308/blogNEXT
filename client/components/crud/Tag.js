import { useState, useEffect } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import { getCookie } from '../../actions/auth';
import { create, getTags, deleteTag } from '../../actions/tag'
const Tag = () => {
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        tags: [],
        removed: false,
        reload: false
    })
    const { name, error, success, tags, removed, reload } = values;
    const token = getCookie('token');
    useEffect(()=> {
        loadTags()
    },[reload])
    const loadTags = () => {
        getTags()
            .then(tags => setValues({...values, tags}))
            .catch(err => console.log(err))
    }
    const showTags = () => {
        return tags.map((t,i)=> {
                return <button 
                onDoubleClick={()=> handleDelete(t.slug)}
                title="Double click to delete" 
                key={i} 
                className="btn btn-outline-success mr-1 ml-1, mt-3, mb-1">
                    {t.name} 
                </button>
        })
    }
    const handleDelete = slug => {
        let isConfirm = window.confirm('Are you sure to delete it');
        if(isConfirm) {
            deleteTag(slug, token)
                .then(res => {
                    setValues({
                        ...values,
                        error: false,
                        name: '',
                        success: false,
                        removed: !removed,
                        reload: !reload
                    })
                })
                .catch(err => console.log(err))
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        create({name}, token)
            .then(res => {
                setValues({
                    ...values,
                    error: false,
                    success: true,
                    name: '',
                    reload: !reload,
                })
            })
            .catch(err => {
                setValues({
                    ...values,
                    error:err,
                    success: false
                })
            })
    }
    const handleChange = e => {
        setValues({
            ...values,
            name: e.target.value
        })
    }
    const newTagForm = () => {
        return(
            <form onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="name" className="text-muted">Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={name}
                    name="name"
                    onChange={handleChange}
                    required
                    placeholder="Tag name"
                    />
                    <button type="submit" className="btn btn-primary mt-2 right">
                        Submit
                    </button>
                </div>
            </form>
        )
    }
    const showSuccess = () => {
        if(success) {
            return <p className="text-success">
                Tag is created
            </p>
        }
    }
    const showRemoved = () => {
        if(removed) {
            return <p className="text-danger">
                Tag is removed
            </p>
        }
    }
    const showError = () => {
        if(error) {
            return <p className="text-danger">
                Tag already exist !
            </p>
        }
    }
    const handleMouseMove = (e) => {
        setValues({
            ...values,
            error: false,
            success: false,
            removed: null
        })
    }
    return(
        <>
            <div onMouseMove={handleMouseMove}>
            {newTagForm()}
            {showTags()}
            </div>
            {showSuccess()}
            {showError()}
            {showRemoved()}
        </>
    )
}
export default Tag;