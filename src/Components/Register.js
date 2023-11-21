import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://recipe-app-server-fl4d.onrender.com/auth/register',{
            username,
            email,
            password
        }).then(()=>{
            navigate('/login')
            console.log("User signed")
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <form onSubmit={handleSubmit}  className='d-flex flex-column justify-content-center align-items-center gap-2 border border-secondary-subtle p-4 rounded '>
            <h1>Register</h1>
            <div className='form-group'>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} className='border-secondary form-control' id='username' type="text" placeholder='Username'/>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border-secondary form-control' id='email' type="email" placeholder='Email'/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control border-secondary' id='password' type="password" placeholder='Password' />
            </div>
            <button type='submit' className='btn btn-success'>Submit</button>
            <div className='w-100'>
                <span>have an account ? </span>
            </div>
            <div className="w-100">
                <Link to='/login'><button className='btn border border-secondary-subtle w-100'>Login</button></Link>
            </div>
        </form>
    </div>
  )
}

export default Register