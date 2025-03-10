import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import '../styles/Navbar.css';

function Navbar() {
    const [isVisible, setVisible] = useState(false);
    const [isLogin, setLogin] = useState(true);

    return (
        <div>
            <nav className='navbar'>
                <div className='logoLink'>
                    <Link to="/" className="logo">
                        PolyGlot
                    </Link>
                </div>
                <div className='links'>
                    <Link to="/Account" className={isLogin ? "link visible" : "link hidden"}>
                        Account
                    </Link>
                </div>
                <div className='links'>
                    <Link to="/QuizPage" className={isLogin ? "link visible" : "link hidden"}>
                        QuizPage
                    </Link>
                </div>
                <div className='links'>
                    <Link to="/Roadmap" className={isLogin ? "link visible" : "link hidden"}>
                        Roadmap
                    </Link>
                </div>
                <div className='links'>
                    <button className="Login" onClick={() => setVisible(!isVisible)}>
                        Sign In
                    </button>
                </div>
            </nav>

            <LoginModal isVisible={isVisible} setVisible={setVisible} />
        </div>
    );
}

export default Navbar;
