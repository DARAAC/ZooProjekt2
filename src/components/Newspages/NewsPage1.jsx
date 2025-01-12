import React from 'react';
import {Link} from "react-router-dom";
import Banner from "../Banner.jsx";
import Rhino from "./headerRhino.jpg";
import NewsHeader from "./NewsHeader.jsx";

function NewsPage1() {

    const date = '20.12.2024'
    const titel = 'Die Nashörner sind wieder da!'

    return (
        <div className="news-page">
            {/* Logo */}
            <div className="logo">
                < Link to='/'>
                    <img src='/src/assets/logo.png' alt="Zoo Logo"/>
                </Link>
            </div>
            <div>
                < Banner image={Rhino} />
            </div>
            <div className='Header'>
                < NewsHeader Datum={date} Titel={titel} />
            </div>
            <div className='Unter-Titel'>
                <h2 className='Untertitel'>Nashörner Berta und Franz sind wieder Zurück aus der Tierstatzion </h2>
            </div>
            <div className='News-Text'>
                <p>
                    <span className='Span'>Berta und Franz hatten ende Dezember ein zusammenstoss was zu einem Medizinischen Notfal was jetzt aber dank den Tierärzten wieder gut ist. Komme sie jetzt zur besichtigung im Zoo Zürich</span>
                </p>
            </div>
        </div>
    );
}

export default NewsPage1;
