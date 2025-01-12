import React, { useState } from 'react';
import "./Home.css"
import News from "./News.jsx";
import './News.css';
import Slideshow from "./Slideshow.jsx"
import { Link } from 'react-router-dom';
import Navigation from "./Navigation.jsx";

function Home() {
    return (
        <div className="home">
            <Navigation></Navigation>
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
        </div>
    );
}

export default Home;
