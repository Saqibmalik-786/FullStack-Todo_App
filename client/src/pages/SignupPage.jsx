import React from 'react'
import {useState} from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    id: Date.now(), // Generate a unique ID based on the current timestamp
    name: '',
    email: '',
    password: ''
  });

  const handleSignup=(e)=>{
    e.preventDefault();
    try{
      fetch('http://localhost:5000/api/users',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  return (
    <div className='registerPage'>
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input 
          type="text" 
          placeholder="Name" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignupPage
