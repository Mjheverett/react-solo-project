import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-nav">
                <h1>Beach Rental</h1>
            </div>
            <div className="header-nav">
                
            </div>
            <div className="header-nav">
                <Link to="/" className="link">
                    Home
                </Link>
                <Link to="/booking" className="link">
                    Booking
                </Link>
            </div>
        </div>
    )
}

export default Header; 