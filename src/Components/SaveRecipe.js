import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SavedRecipe() {
  const [savedRecipe,setSavedRecipe] = useState([])
  const userId = localStorage.getItem("id")

  useEffect(()=>{
    axios.get(`https://recipe-app-server-fl4d.onrender.com/recipe/savedRecipe/${userId}`).then(res=>{
      setSavedRecipe(res.data)
    }).catch(err=>console.log(err))
  },[userId])
  return (
    <div>
      <h1 className='mb-4 mt-1 text-center'>Saved Recipe</h1>
      {
        savedRecipe.map(items=>{
          return (
            <div key={items._id} className='d-flex flex-column align-items-center mt-4'>
                <div className="w-50">
                  <Link to={`/recipe/${items._id}`} className='text-decoration-none text-dark'>
                    <h2 style={{cursor:'pointer'}}>{items.name}</h2>
                  </Link>
                </div>
              <img style={{width:'50%'}} alt='dish' src={items.imgUrl} className='img-fluid'/>
            </div>
          )
        })
      }
    </div>
  )
}

export default SavedRecipe