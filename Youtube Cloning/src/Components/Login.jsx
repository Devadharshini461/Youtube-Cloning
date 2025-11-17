import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email1,setemail1]=useState('')
  const [pass1,setpass1]=useState('')

  const emailentry=(e) => {
        setemail1(e.target.value)
       console.log("Entered Email:", email1);
        localStorage.setItem("email",JSON.stringify(email1));
    }
    function value1(e) {
        setpass1(e.target.value)
    }

  function move() {
    if (email1.includes('@')) {
      navigate('/Home');
    }
    else {
      alert("Enter Valid Email!!!")
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
      
      <label>Email:</label>
      <input id='email' value={email1} onChange={emailentry} type='email' />
      <label>Password:</label>
      <input id='pass1' value={pass1} onChange={value1} type='password' />
      <button onClick={move}>Log IN</button>
    </div>
    </div>
  )
}

export default Login