import React, { useState, useEffect } from 'react';
import './Slideshow.css';

// Import images
import Ape from '../assets/headerApe.jpg';
import Gecco from '../assets/headerGecco.jpg';
import Rhino from '../assets/headerRhino.jpg';
import Swan from '../assets/headerSwan.jpg';

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(false); 
    const images = [Ape, Gecco, Rhino, Swan]; // Use the imported images

    // Function to go to the previous slide
    const handlePrev = () => {
        setTransition(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop to previous slide
    };

    // Function to go to the next slide
    const handleNext = () => {
        setTransition(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop to next slide
    };

    // Function to set the current slide based on the clicked dot
    const handleDotClick = (index) => {
        setTransition(true);
        setCurrentIndex(index);
    };

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTransition(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Increment index and loop back to 0
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    // Add a small delay to remove the transition class after the animation finishes
    useEffect(() => {
        if (transition) {
            const timer = setTimeout(() => {
                setTransition(false);
            }, 500); // Match the transition duration
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