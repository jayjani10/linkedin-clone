import React from 'react'
import './Login.css'

function Login() {

    const register = () => {};

    const loginToApp = () => {};

    return (
        <div className='login'>
            <img src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0V' />
            <form>
                <input type='text' placeholder='Full Name (required)' required/>
                <input type='text' placeholder='Profile Pic URL' />
                <input type='email' placeholder='Email id' required/>
                <input type='password' placeholder='Password' required/>
                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? 
                <span className='login__register'> Register Now</span>
            </p>
        </div>
    )
}

export default Login
