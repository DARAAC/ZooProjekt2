import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import Navigation from "./Navigation.jsx";

function Shop() {
    const navigate = useNavigate();

    const shopItems = [
        {
            id: 1,
            name: "Ticket",
            image: "src/assets/einzeleintritt.png",
            price: 27,
            description: "Einzeleintritt für Erwachsene ab 21 Jahren."
        },
        {
            id: 2,
            name: "Gutschein",
            image: "src/assets/gutschein.png",
            price: 50,
            description: "Verschenken Sie einen Zoo-Gutschein im Wert von CHF 50."
        },
        {
            id: 3,
            name: "Buch",
            image: "src/assets/buch.png",
            price: 20,
            description: "Ein spannendes Buch über die Welt der Tiere."
        },
        {
            id: 4,
            name: "Spiel",
            image: "src/assets/monopoly.png",
            price: 35,
            description: "Das beliebte Monopoly in einer Zoo-Edition."
        },
    ];

    return (
        <div className="shop">
            <Navigation></Navigation>
            <h3>Shop</h3>
            <div className="shop-items">
                {shopItems.map((item) => (
                    <div
                        className="item"
                        key={item.id}
                        onClick={() => navigate(`/product/${item.id}`)}
                    >
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;
