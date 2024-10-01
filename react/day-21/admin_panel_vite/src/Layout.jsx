import React from 'react'
import LeftSide from './LeftSide'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='main'>
        <div className='left'>
            <LeftSide/>
        </div>
        <div className='right'>
        hello header
            <Outlet/>
        </div>
    </div>
  )
}
