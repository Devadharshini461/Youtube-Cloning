import React from 'react'
import shorts from '../assets/shorts1.png'
import sub from '../assets/subscription.png'
import { useNavigate } from 'react-router-dom'
// import shorts from 'C:\Users\ELCOT\Desktop\Youtube\Youtube Cloning\src\assets\shorts.jpg'

function Sidebar() {
  const navigate=useNavigate()
  return (

    <div className='sidebar'> 
      <div className='item' onClick={()=>{navigate('/Home')}}><i className="fa-regular fa-house" style={{color: "#000000",}}></i><span>Home</span></div>
      <div className='item'><img src={shorts}></img><span>Shorts</span></div>
      <div className='item'><img src={sub}></img><span>Subscriptions</span></div>

      <hr></hr>
      <h3>You</h3>
      <br></br>

      <div className='item' onClick={()=>{navigate('/History')}}><i className="fa-solid fa-clock-rotate-left" style={{color: "#000000"}}></i><span>History</span></div>
      <div className='item'><i className="fa-solid fa-graduation-cap" style={{color: "#000000",}}></i><span>Your Courses</span></div>
      <div className='item'><i className="fa-regular fa-clock" style={{color: "#000000",}} ></i><span>Watch Later</span></div>
      <div className='item'><i className="fa-regular fa-thumbs-up" style={{color: "#000000",}} ></i><span>Liked Videos</span></div>
      <div className='item'><i class="fa-solid fa-download" style={{color: "#000000",}} ></i><span>Download</span></div>
    </div>

  )
}

export default Sidebar
