import React from 'react'
import { emailentered } from './Signin'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({onSearch}) {
  // const entry=useContext(emailentered);
  let get = JSON.parse(localStorage.getItem("email")) || JSON.parse(localStorage.getItem("email1"))
  const entry = get.replace(get.slice(get.indexOf("@")), "");
  const Navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  function out() {
    localStorage.removeItem('email');
    localStorage.removeItem('pass')
    Navigate('/')
  }

  function handleSearch(e) {
    setSearchValue(e.target.value);
    onSearch(e.target.value);   
  }

  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <button onClick={() => { Navigate('/Home') }} className='logobutton'><i class="fa-solid fa-bars" style={{ color: "#000000ff" }}></i></button>
          <i className="fa-brands fa-youtube" style={{ color: "#ff0505" }}></i>
          <span><b>Youtube</b></span>
          <span><sup>IN</sup></span>
        </div>
        <div className='search'>
          <button>
            <input id='search' type='text' value={searchValue} onChange={handleSearch}></input>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button><i className="fa-solid fa-microphone"></i></button>
        </div>
        <div className='sideportion'>
          <button>+Create</button>
          <button><i className="fa-solid fa-bell"></i></button>
          <p>{entry}</p>
          <button onClick={out}><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
        </div>
      </div>
    </>
  )
}

export default Navbar