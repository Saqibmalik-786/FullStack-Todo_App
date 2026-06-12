import React from 'react'

const SigninPage = () => {
  return (
    <div className='registerPage'>
        <form>
            <h2>Sign In</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
        </form>

    </div>
  )
}

export default SigninPage