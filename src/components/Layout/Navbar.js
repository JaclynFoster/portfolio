import React from 'react'
import { Link } from 'react-router-dom'
import { Divider } from 'antd'

const NavBar = () => {
  return (
    <nav className="nav">
      <Link className="link" to="/">
        About
      </Link>
      <Divider />
      <Link className="link" to="/skills">
        Skills
      </Link>
      <Divider />
      <Link className="link" to="/projects">
        Projects
      </Link>
      <Divider />
      <Link className="link" to="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default NavBar
