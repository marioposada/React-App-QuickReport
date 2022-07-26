import React from 'react'
import { DashBoard } from './DashBoard';
import { NavBar } from './NavBar';
import { Reports } from './Reports';
import { SideBar } from './SideBar';

const Panel = () => {
  return (
    <>
    <div>Panel</div>
    <NavBar />
    <SideBar />
    <DashBoard />
    <Reports />
    
    </>
    
  )
}

export default Panel;