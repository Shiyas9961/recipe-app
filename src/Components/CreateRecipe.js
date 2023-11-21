import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateRecipe() {
    const [name,setName] = useState('')
    const [discription,setDiscription] = useState('')
    const [ingredients,setIngredients] = useState('')
    const [imgUrl,setImgUrl] = useState('')
    const userId = localStorage.getItem("id")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://recipe-app-server-fl4d.onrender.com/recipe/create',{
            name,
            discription,
            ingredients,
            imgUrl,
            userId
        }).then(res=>{
            navigate('/')
            setName('')
            setDiscription('')
            setIngredients('')
            setImgUrl('')
            console.log(res.data)
        }).catch(err=>console.log(err.message))
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <form onSubmit={handleSubmit}  className='d-flex flex-column justify-content-center align-items-center gap-2 border border-secondary-subtle p-4 rounded '>
            <h1>Create Recipe</h1>
            <div className='form-group'>
                <label htmlFor="recipe-name">Recipe Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} className='border-secondary form-control' id='recipe-name' type="text" placeholder='Recipe name'/>
            </div>
            <div className='form-group'>
                <label htmlFor="discription">Discription</label>
                <input value={discription} onChange={(e)=>setDiscription(e.target.value)} className='border-secondary form-control' id='discription' type="text" placeholder='Description'/>
            </div>
            <div className='form-group'>
                <label htmlFor="ingredients">Ingredients</label>
                <input value={ingredients} onChange={(e)=>setIngredients(e.target.value)} className='form-control border-secondary' id='ingredients' type="text" placeholder='Ingredients' />
            </div>
            <div className='form-group'>
                <label htmlFor="imgUrl">Image Url</label>
                <input value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)} className='form-control border-secondary' id='imgUrl' type="text" placeholder='Past your img url here' />
            </div>
            <button type='submit' className='btn btn-success'>Submit</button>
        </form>
    </div>
  )
}

export default CreateRecipe