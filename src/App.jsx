import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Materials from './Components/Materials'
import Buyer from './Forms/Buyer'

export default function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <Materials/>
    {/* <Buyer/> */}
    </div>
  )
}
