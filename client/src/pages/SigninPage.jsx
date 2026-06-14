import React from 'react'

const SigninPage = () => {
  const handletemp   = (e) => {
    try{
      fetch('http://localhost:5000/api/temp')
      .then(res => res.text())
      .then(data => alert(data))
    }
    catch(err){
      console.error(err);
    }// Handle sign in logic here
  }
  return (
    <div className='registerPage'>
        <form>
            <h2>Sign In</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handletemp} type="submit">Sign In</button>
        </form>

    </div>
  )
}

export default SigninPage