import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Ticketkauf.css"

function Ticketkauf() {
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Erwachsene (ab 21 Jahren)");
  const [date, setDate] = useState("");
  const [natureFund, setNatureFund] = useState(false);

  const priceList = {
    "Erwachsene (ab 21 Jahren)": { price1: 27, price2: 28 },
    "Jugendliche (16–20 Jahre)": { price1: 22, price2: 23 },
    "Kinder (6–15 Jahre)": { price1: 14, price2: 15 },
  };

  const price = category in priceList ? priceList[category] : { price1: 0, price2: 0 };

  const totalPrice = quantity * price.price1;

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDate = new Date(date);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      alert("Das gewählte Datum liegt in der Vergangenheit. Bitte wählen Sie ein zukünftiges Datum.");
      return;
    }

    alert(`Ticket Details: ${category}, ${quantity} tickets, Date: ${date}, Nature Fund: ${natureFund ? "Ja" : "Nein"}`);
  };

  return (
    <div className="ticket-form-container">
      <h1>Einzeleintritt</h1>
      <p className="price">CHF {price.price1.toFixed(2)} / CHF {price.price2.toFixed(2)}</p>
      
      <p className="total-price">Gesamtpreis: CHF {totalPrice.toFixed(2)}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Anzahl *
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>

        <label>
          Preiskategorie *
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Erwachsene (ab 21 Jahren)</option>
            <option>Jugendliche (16–20 Jahre)</option>
            <option>Kinder (6–15 Jahre)</option>
          </select>
        </label>

        <label>
          Besuchsdatum
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <div className="nature-check">
          <input
            type="checkbox"
            checked={natureFund}
            onChange={() => setNatureFund(!natureFund)}
          />
          <label>Freiwilliger Naturschutzfranken pro Ticket CHF 1.00</label>
        </div>

        <button type="submit">IN DEN WARENKORB LEGEN</button>
      </form>

      <p>
        Mit der Aktivierung dieser Checkbox bestätige ich den Naturschutzfranken
        auf dem gewählten Ticket.
      </p>

      <Link to="/" className="back-to-home-button">
        <button>Zurück zur Startseite</button>
      </Link>
    </div>
  );
}

export default Ticketkauf;
