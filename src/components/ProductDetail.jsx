import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
    const {id} = useParams();
    const navigate = useNavigate();

    const shopItems = [
        {
            id: 1,
            name: "Ticket",
            price: 27,
            description: "Einzeleintritt für Erwachsene ab 21 Jahren."
        },
        {
            id: 2,
            name: "Gutschein",
            price: 50,
            description: "Verschenken Sie einen Zoo-Gutschein im Wert von CHF 50."
        },
        {
            id: 3,
            name: "Buch",
            price: 20,
            description: "Ein spannendes Buch über die Welt der Tiere."
        },
        {
            id: 4,
            name: "Spiel",
            price: 35,
            description: "Das beliebte Monopoly in einer Zoo-Edition."
        },
    ];

    const product = shopItems.find((item) => item.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <p>Produkt nicht gefunden.</p>;
    }

    const handleAddToCart = () => {
        alert(`${quantity}x ${product.name} zum Warenkorb hinzugefügt!`);
        navigate("/");
    };
    const handleBackToShop = () => {
        navigate("/shop");
    };
    return (

        <div className="product-detail">
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
            <p className="price">CHF {product.price.toFixed(2)}</p>
                        <div className="quantity">
                <label htmlFor="quantity">Menge:</label>
                <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            <button className="add-to-cart" onClick={handleAddToCart}>
                Zum Warenkorb hinzufügen
            </button>
            <button className="back-to-shop" onClick={handleBackToShop}>
                Zurück zum Shop
            </button>
        </div>

    );
}

export default ProductDetail;
