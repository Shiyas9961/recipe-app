import React, { useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()


    axios.defaults.withCredentials = true
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/auth/login',{
            username,
            password
        }).then((res)=>{
            navigate('/')
            localStorage.setItem("id",res.data.id)
            console.log("User logged in")
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <form onSubmit={handleSubmit}  className='d-flex flex-column justify-content-center align-items-center gap-2 border border-secondary-subtle p-4 rounded'>
            <h1>Login</h1>
            <div className='form-group'>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} className='border-secondary form-control' id='username' type="text" placeholder='Username'/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control border-secondary' id='password' type="password" placeholder='Password' />
            </div>
            <button type='submit' className='btn btn-success'>Login</button>
            <div className='w-100'>
                <span>don't have an account ? </span>
            </div>
            <div className="w-100">
                <Link to='/register'><button className='btn border-secondary-subtle w-100'>Register</button></Link>
            </div>
        </form>
    </div>
  )
}

export default Login