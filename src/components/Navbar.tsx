import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import '../styles/Navbar.css';

function Navbar() {
    const [isVisible, setVisible] = useState(false);

    return (
        <div>
            <nav className='navbar'>
                <div className='logoLink'>
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
                    <button className="Login" onClick={() => setVisible(!isVisible)}>
                        SignIn
                    </button>
                </div>
            </nav>

            <LoginModal isVisible={isVisible} setVisible={setVisible} />
        </div>
    );
}

export default Navbar;
