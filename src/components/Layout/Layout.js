import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import './Layout.css'

const Layout = props => {
  return (
    <div className="layout">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout


