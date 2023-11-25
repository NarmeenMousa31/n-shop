import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Dashbord/Navbar/Navbar.jsx'
import Footer from '../Component/Dashbord/Footer/Footer.jsx'

export default function DashboardLayouts() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
