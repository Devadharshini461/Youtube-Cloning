import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Components/Login'
import Signin from '../Components/Signin'
import Videopage from '../Pages/Videopage'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Signin />}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Videopage/:id' element={<Videopage/>}></Route>
    </Routes>
  )
}

export default Routing