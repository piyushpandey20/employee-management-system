import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className=' border-2 border-emerald-600 p-20 rounded-lg'>
            <form onSubmit={(e) => {submitHandler(e)}} 
                className='flex flex-col items-center justify-center'>
                <input value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required className='border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 px-5
                    rounded-full' type="email" placeholder='Enter your email' />
                <input   value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required className=' mt-3 border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 px-5
                    rounded-full' type="password" placeholder='Enter password'/>
                <button className='outline-none mt-3 text-white bg-emerald-600 text-xl py-3 px-5
                 rounded-full'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login
