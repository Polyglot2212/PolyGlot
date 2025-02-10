import React from 'react';

interface LoginModalProps {
    isVisible: boolean;
    setVisible: (value: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isVisible, setVisible }) => {
    return (
        <div className={isVisible ? "containerModal visible" : "containerModal hidden"}>
            <div className="modalContent">
                <h2>Login Modal</h2>
                <button onClick={() => setVisible(false)}>Закрыть</button>
            </div>
        </div>
    );
};

export default LoginModal;
