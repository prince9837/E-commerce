import React, { useContext, useState } from 'react'
import Header from "./Header"
import { Outlet } from 'react-router-dom'
import ResponsiveLinks from '../ui/ResponsiveLinks'

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        
        
    </div>
  )
}

export default AppLayout