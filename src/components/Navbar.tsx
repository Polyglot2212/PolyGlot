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
                <Link to="/Account" className="link">
                    Account
                </Link>
            </div>
            <div className='links'>
                <Link to="/QuizPage" className="link">
                    QuizPage
                </Link>
            </div>
            <div className='links'>
                <Link to="/Roadmap" className="link">
                    Roadmap
                </Link>
            </div>
            <div className='links'>
                <button className="Authorizathion_off">
                    SignIn
                </button>
            </div>
            
            <a className="links"></a>
        </nav>

    </div>
  )
}

export default Navbar