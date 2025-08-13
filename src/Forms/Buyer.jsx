import React from 'react'

export default function Buyer() {
  return (
    <div className='bg-amber-100 flex-1/2 ' >
      <form>
        <label for="username">UserName : </label>
        <input className='border-black ' id="username" placeholder='Username' type='text' required />
        <label for="Email" >E mail : </label>
        <input id='Email' type='email' placeholder='user@gmail.com' required />
        <label for="mobilenumber" >Mobile Number : </label>
        <input id='mobilenumber' type='tel'  />
        <label for="password" >Password : </label>
        <input id='password' type='password' />
        <button type='submit' >Login</button>
        <button type='submit' >submit</button>

      </form>
    </div>
  )
}
