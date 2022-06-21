import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './User.css'
import { useState } from 'react';

const User = () => {
  let Navigate = useNavigate();

  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

  const getUsers = () => {
    axios.get("http://localhost:3001/User").then((response) => {
      console.log(response)
    })
  }


  return (
    <div>
      <h1>Customer Login</h1>
      <div className='grid_user'>
        <div className='grid_input_user'>
          <label className='label_user'>Email</label>
          <input className='input_user'></input>
        </div>
      <div className='register_link'>
        <h3>Register now for purchase!</h3>
        <p>If you don't have an account enter the link below</p>
        <button className='button_regiter' onClick={() => {Navigate ('./register')}}>Register</button>
      </div>
        <div className='grid_input_user'>
          <label className='label_user'>Password</label>
          <input className='input_user'></input>
        </div>
        <button onClick={getUsers()}>Login</button>
      </div>
    </div>
  )
}

export default User