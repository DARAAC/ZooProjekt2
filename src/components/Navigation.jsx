import React from 'react';

function Navigation({ onNavigate }) {
    return (
        <nav className="navigation">
            <button onClick={() => onNavigate('home')}>🏠</button>
            <button onClick={() => onNavigate('map')}>🗺️</button>
            <button onClick={() => onNavigate('shop')}>🛒</button>
        </nav>
    );
}

export default Navigation;
