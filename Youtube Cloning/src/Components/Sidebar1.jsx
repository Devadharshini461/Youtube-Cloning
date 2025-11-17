import React from 'react'
import shorts from '../assets/shorts1.png'
import sub from '../assets/subscription.png'

function Sidebar1() {
  return (
    <div>
        <div className='item1' onclick={()=>{navigate('/Home')}}><i className="fa-regular fa-house" style={{color: "#000000",}}></i></div>
        <br></br>
        <span>Home</span>
        <div className='item1'><img src={shorts}></img></div>
        <br></br>
        <span>Shorts</span>
        <div className='item1'><img src={sub}></img></div>
        <br></br>
        <span>Subscriptions</span>
        <div className='item1'><i class="fa-regular fa-circle-user" style={{color: "#000000",}} ></i></div>
        <br></br>
        <span>You</span>
        <div className='item1'><i class="fa-solid fa-download" style={{color: "#000000",}} ></i></div>
        <br></br>
        <span>Download</span>
    </div>
  )
}

export default Sidebar1