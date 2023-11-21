import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [recipe,setRecipe] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/recipe').then(res=>{
      setRecipe(res.data)
    }).catch(err=>console.log(err))
  },[])
  return (
    <div>
      <h1 className='mb-4 mt-1 text-center'>Recipes</h1>
      {
        recipe.map(items=>{
          return (
            <div key={items._id} className='d-flex flex-column align-items-center mt-4'>
                <div className="w-50">
                  <Link to={`recipe/${items._id}`} className='text-decoration-none text-dark'>
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

export default Home