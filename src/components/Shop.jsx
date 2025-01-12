import React from 'react';
import Navigation from "./Navigation.jsx";

function Shop() {
    return (

        <div className="shop">
            <Navigation></Navigation>
            <div className="logo">
                <img src="src/assets/logo.png" alt="Zoo Logo" />
            </div>
            <h3>Shop</h3>
            <div className="shop-items">
                <div className="item">
                    <img src="/tickets.jpg" alt="Tickets" />
                    <p>Tickets</p>
                </div>
                <div className="item">
                    <img src="/vouchers.jpg" alt="Gutscheine" />
                    <p>Gutscheine</p>
                </div>
                <div className="item">
                    <img src="/books.jpg" alt="Bücher" />
                    <p>Bücher</p>
                </div>
            </div>
        </div>
    );
}

export default Shop;
