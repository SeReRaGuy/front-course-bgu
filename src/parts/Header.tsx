import React from 'react';
import '../CSS/Header.css';
import logo from '../images/logo.png'; // Импортируем изображение

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Чебурек-иконка" />
            </div>
                <h1>Хороший день</h1>
        </header>
    );
};

export default Header;