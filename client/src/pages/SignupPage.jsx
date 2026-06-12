import React from 'react'

const SignupPage = () => {
  return (
    <div className='registerPage'>
      <form>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignupPage
