import React from 'react';
import { useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom";
import CategoryCreate from '../Categories/CategoryCreate';
function Home() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetchCategories()
    },[])

    const fetchCategories = async () => {
        const tmpCategories = await axios.get('/api/categories')
        setCategories(tmpCategories.data)
    }

    const addCategory = (inputCategory) => {
        setCategories([{id: categories.length + 1, title: inputCategory}, ...categories])
    }

    const deleteCategory = async (e) => {
        // const categoryId = e.target.getAttribute("id")
        const categoryId = e.target.textContent()
        console.log(categoryId)
        const compSign = await axios.delete('/api/categories/' + id)

        let categories2 = categories
        categories2.shift()
        console.log(categories2)
        setCategories(categories2)
        if (compSign === "complete") {
        }

    }

    const CategoryItems = categories.map((category) => {
        return (
            <div key={category.id}>
                <span>{category.title}</span>
                <button id={category.id} onClick={deleteCategory}>☓</button>
            </div>
        )
    })


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Recipehouse</div>

                        {/* <Link to={'/page'} className="btn btn-primary">Pageへ遷移</Link> */}
                    </div>
                    <CategoryCreate addCategory={addCategory}></CategoryCreate>

                    <ul>{CategoryItems}</ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
