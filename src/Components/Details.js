import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const [recipe,setResipe] = useState({})
    const {id} = useParams()
    const userId = localStorage.getItem("id")
    const [savedRecipe,setSavedResipe] = useState([])

    useEffect(()=>{
        const getRecipes = () => {
            axios.get(`https://recipe-app-server-fl4d.onrender.com/recipe/${id}`).then(res=>{
            setResipe(res.data)
        }).catch(err=>console.log(err.message))
    }
        const fetchSavedResipes = () => {
            axios.get(`https://recipe-app-server-fl4d.onrender.com/recipe/saved/${userId}`).then(res=>{
                setSavedResipe(res.data.savedRecipe)
            }).catch(err=>console.log(err.message))
        }
        fetchSavedResipes()
        getRecipes()
    },[id,userId])

    const saveRecipes = (userId,recipeId) => {
        axios.put(`https://recipe-app-server-fl4d.onrender.com/recipe`,{
            userId,
            recipeId
        }).then(res=>console.log(res.data)).catch((err)=>console.log(err.message))
    }

    const savedAlredy = (id) => savedRecipe.includes(id)

  return (
        <div className='d-flex justify-content-center mt-4 gap-4'>
            <div >
                <img className='img-thumbnail' src={recipe.imgUrl} alt="img" />
            </div>
            <div >
                <h1>{recipe.name}</h1>
                <h3>Discription</h3>
                <p>{recipe.discription}</p>
                <button onClick={()=>saveRecipes(userId,recipe._id)} disabled={savedAlredy(recipe._id)} className='btn btn-warning'>
                    {
                        savedAlredy(recipe._id) ? "Saved" : "Save"
                    }</button>
                <h3>Ingredients</h3>
                <p>{recipe.ingredients}</p> 
            </div>
        </div>
  )
}

export default Details