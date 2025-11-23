import React from 'react'
import HEADER from './HEADER'
import { Outlet } from 'react-router-dom'

const Leadue = () => {
  return (
    <div>
        <HEADER/>
        <Outlet/>
    </div>
  )
}

export default Leadue