import React from 'react'
import Header from './compnets/header/header'
import Footer from './compnets/footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout