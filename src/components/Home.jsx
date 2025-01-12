import React, { useState } from 'react';
import "./Home.css"
import News from "./News.jsx";
import './News.css';
import Slideshow from "./Slideshow.jsx"
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home">
            {/* Logo */}
            <div className="logo">
            < Link to='/'>
                <img src="src/assets/logo.png" alt="Zoo Logo"/>
            </Link>
            </div>
            <div>
            < Slideshow />
            </div>
            <div className='news-section'>
                <h1 className='news-title'>Zoo News</h1>
                <News />
            </div>
            <div className='Oeffnungszeiten-section'>
                <h1 className='Oeffnungszeiten-Titel'>Öffnungszeiten</h1>
                {/*Mach da wiiter simon*/}
            </div>
            <div className='Tickets-section'>
                <h1 className='Tickets-Text'>Buche jetzt deinen Besuch!</h1>
                < Link to='/Tickets'>
                    <button className="Tickets-Button">Ticket Kaufen</button>
                </Link>
            </div>
           
        </div>
    );
}

export default Home;
