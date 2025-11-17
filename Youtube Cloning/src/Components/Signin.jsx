import React, { createContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Login from './Login'

export const emailentered = createContext()

function Signin() {
    const navigate =useNavigate()
    const [email, setemail] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')

    function emailentry(e) {
        setemail(e.target.value)
        localStorage.setItem("email",JSON.stringify(email));
    }
    function value1(e) {
        setPass1(e.target.value)
    }
    function value2(e) {
        setPass2(e.target.value)
    }

    // const details = JSON.parse(localStorage.getItem('details')) || [];

    // const Index = details.findIndex(acc => acc.email === props.email);

    const saveStorage = () => {
        const details = JSON.parse(localStorage.getItem('details')) || [];
        // console.log("Entered Email:", email);
        const Index = details.findIndex(acc => acc.email === email);

        if (Index !== -1) {
            alert("You Already have an Account!!!")
            navigate("/Login")
        }
        else {
            if(email.includes('@')){
            if (pass1 == pass2) {
                details.push({
                    email: email,
                    pass: pass1
                    
                })
                
                localStorage.setItem('details', JSON.stringify(details));
                navigate('/Home')
                ;
                // navigate("/Login")
                // localStorage.setItem('pass', JSON.stringify(pass2));
                // localStorage.setItem('email', JSON.stringify(document.getElementById('email').value.trim))
            }
            else {
                alert("Enter valid Account Credenials")
            }}
            else{
                alert("Enter Valid Email!!!")
            }
        }
    };

    return (
        <>
        <emailentered.Provider value={email}>
        </emailentered.Provider>
            <div className="Signin-container">
                <label>Email:</label>
                <input id='email' value={email} onChange={emailentry} type='email' />
                <label>Password:</label>
                <input id='pass1' value={pass1} onChange={value1} type='password' />
                <label>Conifrm-Password:</label>
                <input id='pass2' value={pass2} onChange={value2} type='password' />
                <button onClick={saveStorage}>Create Account</button>
                <Link to='/Login'>Log in</Link>
            </div>
        </>
    )
}

export default Signin