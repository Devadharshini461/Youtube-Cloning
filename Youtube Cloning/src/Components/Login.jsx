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
      <div className='logo' style={{marginBottom:"10px"}}>
          <button className='logobutton1'style={{marginLeft:"65px"}}><i className="fa-brands fa-youtube" style={{ color: "#ff0505" }}></i></button>
          <span style={{fontSize:"28px"}}><b>Youtube</b></span>
          <span><sup>IN</sup></span>
      </div>
      <label>Email:</label>
      <input id='email' value={email1} onChange={emailentry} type='email' />
      <label>Password:</label>
      <input id='pass1' value={pass1} onChange={value1} type='password' />
      <button className='movebutton' onClick={move}>Log IN</button>
    </div>
    </div>
  )
}

export default Login