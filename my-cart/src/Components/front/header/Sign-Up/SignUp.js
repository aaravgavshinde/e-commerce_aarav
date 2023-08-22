import React, { useState } from 'react'
import './SignUp.css'

export default function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const collectData = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let result = await fetch('http://localhost:8080/signup', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    result = await result.json();
    console.log(result)
  }

  return (
    <>
      <div className='signup'>
        <div>
          <form className='signup-form'>
            <label className='signup-label'>Email:</label>
            <input className='signup-input' type='email' size={40} onChange={(e) => setEmail(e.target.value)}/>
            <label className='signup-label'>Password</label>
            <input className='signup-input' type='password' size={40} onChange={(e) => setPassword(e.target.value)}/>
          </form>
          <button onClick={collectData} className='signup-btn'>Sign Up</button>
        </div>
      </div>
    </>
  )
}
