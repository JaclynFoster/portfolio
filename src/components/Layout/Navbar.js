import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav">
          
            <Link className="link" to="/">About</Link>
            <Link className="link" to="/skills">Skills</Link>
            <Link className="link" to="/projects">Projects</Link>
            <Link className="link" to="contact">Contact</Link>
          
        </nav>
    )
}

export default NavBar