import React from 'react'
import Navbar from '../Components/Navbar'
import Signin from '../Components/Signin'
import Videolist from '../Components/Videolist'
import Sidebar from '../Components/Sidebar'

function Home() {
  return (
    <div>
      <Navbar />
      {/* <div style={{display:'flex'}}> */}
        <div>
          <Sidebar />
        </div>
        <div style={{marginLeft:"240px"}}>
          <Videolist />
        </div>
      </div>
    // </div>
  )
}

export default Home