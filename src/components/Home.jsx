import React, { useState } from 'react';
import "./Home.css"
import News from "./News.jsx"
import Slideshow from "./Slideshow.jsx"

function Home() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div className="home">
            {/* Logo */}
            <div className="logo">
                <img src="src/assets/logo.png" alt="Zoo Logo"/>
            </div>
            <div>
            < Slideshow />
            </div>
        </div>
    );
}

export default Home;
