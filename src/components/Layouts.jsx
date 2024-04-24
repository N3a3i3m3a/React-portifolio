import React from 'react'
import NavBar from './NavBar'
import Socialinks from './Socialinks'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <div>
        <NavBar/>
        <Socialinks/>
        <Outlet/>
    </div>
  )
}

export default Layouts