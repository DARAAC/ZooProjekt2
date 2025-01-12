import React from 'react';
import './OpeningHours.css';

function OpeningHours() {
    return (
        <div className="opening-hours-container">
            <h2 className="opening-hours-title">Öffnungszeiten</h2>
            <div className="opening-hours-content">
                <div className="season summer">
                    <div className="season-title">Sommer</div>
                    <div className="season-time">09:00 - 18:00 UHR</div>
                </div>
                <div className="separator"></div>
                <div className="season winter">
                    <div className="season-title">Winter</div>
                    <div className="season-time">10:00 - 17:00 UHR</div>
                </div>
            </div>
        </div>
    );
}

export default OpeningHours;
