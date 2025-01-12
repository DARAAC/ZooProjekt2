import React from "react";
import Navigation from "./Navigation.jsx";
import ZooMap from "../assets/ZooMap.png";
import "./Map.css";

function Map() {
    return (
        <div className="map">
            <Navigation />
            <div className="logo">
                <img src="src/assets/logo.png" alt="Zoo Logo" />
            </div>
            <h3>Zoo Karte & Anreise</h3>
            <div className="important-note">
                <h4>Wichtige Hinweise!</h4>
                <p>Wir bauen am Zoo der Zukunft. Bitte beachten Sie unsere Baustelleninfos und unsere Hinweise zu temporären Einschränkungen.</p>
                <button className="inform-button">Informieren</button>
            </div>

            <div className="map-image">
                <img src={ZooMap} alt="ZooMap" />
            </div>

            <div className="download-section">
                <p>Herunterladen:</p>
                <a href="https://www.zoo.ch/sites/default/files/media/file/Zooplan_A4_web_241212.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="download-button">Zooplan (PDF)</button>
                </a>
            </div>
        </div>
    );
}

export default Map;
