import React, { useState } from 'react';
import "./Home.css"
import News from "./News.jsx"

function Home() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div className="home">
            {/* Logo */}
            <div className="logo">
                <img src="src/assets/logo.png" alt="Zoo Logo"/>
            </div>

            {/* Öffnungszeiten */}
            <div className="opening-hours">
                <h3>Öffnungszeiten</h3>
                <div className="zeiten">
                    <span>Sommer: 09:00 - 18:00 Uhr</span>
                    <span>Winter: 10:00 - 17:00 Uhr</span>
                </div>
            </div>

            {/* News */}
           < News/>
            {/* Tickets */}
            <div className="ticket-section">
                <h3>Tickets buchen</h3>
                <label><p>Wählen Sie Ihr <strong>Tagesticket</strong>:</p></label>
                <input
                    id="ticket-date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)} // Assuming you have a state handler for `startDate`
                />

                <button className="ticket-btn">🎟️ Ticket kaufen</button>
            </div>



        </div>
    );
}

export default Home;
