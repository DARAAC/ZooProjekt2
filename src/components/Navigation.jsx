import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <Link to="/">🏠</Link>
            <Link to="/Map">🗺️</Link>
            <Link to="/Shop">🛒</Link>
            <Link to="/ZooApp">🦁 </Link>
            <Link to="/Tickets">🎫 </Link>
        </nav>
    );
}
export default Navigation;
