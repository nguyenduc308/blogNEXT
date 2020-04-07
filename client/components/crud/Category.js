import { useState, useEffect } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import { isAuth, getCookie } from '../../actions/auth';
import { create, getCategories, deleteCategory } from '../../actions/category'
const Category = () => {
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        categories: [],
        removed: false,
        reload: false
    })
    const { name, error, success, categories, removed, reload } = values;
    const token = getCookie('token');
    useEffect(()=> {
        loadCategories()
    },[reload])
    const loadCategories = () => {
        getCategories()
            .then(categories => setValues({...values, categories}))
            .catch(err => console.log(err))
    }
    const showCategories = () => {
        return categories.map((c,i)=> {
                return <button 
                onDoubleClick={()=> handleDelete(c.slug)}
                title="Double click to delete" 
                key={i} 
                className="btn btn-outline-primary mr-1 ml-1, mt-3, mb-1">
                    {c.name} 
                </button>
        })
    }
    const handleDelete = slug => {
        let isConfirm = window.confirm('Are you sure to delete it');
        if(isConfirm) {
            deleteCategory(slug, token)
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
    const newCategoryForm = () => {
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
                    placeholder="Category name"
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
                Category is created
            </p>
        }
    }
    const showRemoved = () => {
        if(removed) {
            return <p className="text-danger">
                Category is removed
            </p>
        }
    }
    const showError = () => {
        if(error) {
            return <p className="text-danger">
                Category already exist !
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
            {newCategoryForm()}
            {showCategories()}
            </div>
            {showSuccess()}
            {showError()}
            {showRemoved()}
        </>
    )
}
export default Category;