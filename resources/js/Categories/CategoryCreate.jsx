import React from 'react'
import { useState } from 'react'


const CategoryCreate = ( {addCategory }) => {

    const [inputCategory, setInputCategory] = useState("")

    const handleChange = (e) => {
        setInputCategory(e.currentTarget.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await submitNewCategory()
        addCategory(inputCategory)
        setInputCategory("")
    }

    const submitNewCategory = () => {
        return new Promise((resolve) => {
            axios.post('/api/categories/store', {
                title: inputCategory
            }).then(response => {
                resolve(response)
            })
        })
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputCategory} type="text" />
            <button>Submit</button>
        </form>
    )
}
export default CategoryCreate
