import React from 'react';
import './styles/LoginModal.css'
import swinging from "../assets/swinging.png"

interface LoginModalProps {
    isVisible: boolean;
    setVisible: (value: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isVisible, setVisible }) => {
    return (
        <div className={isVisible ? "containerModal visible" : "containerModal hidden"}>
            <div className="modalContent">
                <div className="blockk">
                    <div className="left_login">
                        <b className='modal_logintext'>Login</b>
                        <button className='close_modal' onClick={() => setVisible(false)}>Close</button>
                        <b className="user_name">Email</b>
                        <input type="text" placeholder='Email' className="user" />
                        <b className="user_password">Password</b>
                        <input type="text" placeholder='Password' className="password" />
                        <button className="submit">
                            Log In
                        </button>
                    </div>
                    <div className="img_containerModal">
                            <img src={swinging} alt="img"  className='swinging'/>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default LoginModal;
