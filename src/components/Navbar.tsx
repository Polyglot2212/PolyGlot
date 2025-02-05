import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <div className='links'>
                <Link to="/" className="logo">
                    PolyGlot
                </Link>
            </div>
            <div className='links'>
                <Link to="/" className="link">
                    PolyGlot
                </Link>
            </div>
            <div className='links'>
                <Link to="/" className="link">
                    PolyGlot
                </Link>
            </div>
            <div className='links'>
                <Link to="/" className="link">
                    PolyGlot
                </Link>
            </div>
            
            <a className="links"></a>
        </nav>

    </div>
  )
}

export default Navbar