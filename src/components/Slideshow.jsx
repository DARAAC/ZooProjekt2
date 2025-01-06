import React, { useState, useEffect } from 'react';
import './Slideshow.css';

import Ape from '../assets/headerApe.jpg';
import Gecco from '../assets/headerGecco.jpg';
import Rhino from '../assets/headerRhino.jpg';
import Swan from '../assets/headerSwan.jpg';

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(false); 
    const images = [Ape, Gecco, Rhino, Swan]; 

    
    const handlePrev = () => {
        setTransition(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); 
    };

    
    const handleNext = () => {
        setTransition(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    
    const handleDotClick = (index) => {
        setTransition(true);
        setCurrentIndex(index);
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            setTransition(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
        }, 5000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    useEffect(() => {
        if (transition) {
            const timer = setTimeout(() => {
                setTransition(false);
            }, 500); 
            return () => clearTimeout(timer);
        }
    }, [transition]);

    return (
        <div className="slideshow-container">
            <div className={`slide ${transition ? 'slide-transition' : ''}`}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            {/* Navigation buttons */}
            <button className="prev" onClick={handlePrev}>←</button>
            <button className="next" onClick={handleNext}>→</button>

            {/* Dots navigation */}
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;