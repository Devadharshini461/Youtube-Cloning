import React from 'react'
import Navbar from '../Components/Navbar'
import Signin from '../Components/Signin'
import Videolist from '../Components/Videolist'
import Sidebar from '../Components/Sidebar'
import { useState } from 'react'

function Home() {
   const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Navbar  onSearch={setSearchText} />
      {/* <div style={{display:'flex'}}> */}
        <div>
          <Sidebar />
        </div>
        <div style={{marginLeft:"240px"} }>
          <Videolist  searchText={searchText} />
        </div>
      </div>
    // </div>
  )
}

export default Home