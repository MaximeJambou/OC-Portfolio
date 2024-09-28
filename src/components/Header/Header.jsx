import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-container">
                <p>Maxime Jambou</p>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink
                            to="/a-propos"
                            className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
