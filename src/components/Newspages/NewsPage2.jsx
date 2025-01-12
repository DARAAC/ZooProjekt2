import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner.jsx'
import '../Banner.css'
import Swan from './headerSwan.jpg';
import './Newspage.css'
import NewsHeader from './NewsHeader.jsx'
import './NewsHeader.css'
import Navigation from "../Navigation.jsx";


function NewsPage2() {

    const date = '20.12.2024'
    const titel = 'Neue Quizrunde in der Zoo App'

  return (
<div className="news-page">
    {/* Logo */}
    <Navigation></Navigation>
    <div className="logo">
        < Link to='/'>
        <img src='/src/assets/logo.png' alt="Zoo Logo"/>
        </Link>
    </div>
    <div>
        < Banner image={Swan} />
    </div>
    <div className='Header'>
        < NewsHeader Datum={date} Titel={titel} />
    </div>
    <div className='Unter-Titel'>
        <h2 className='Untertitel'>Wir haben in der Zoo-App eine neue Runde unseres Zooquiz gestartet – auf zur Fragen-Schnitzeljagd!</h2>
    </div>
    <div className='News-Text'>
        <p>
            <span className='Span'>In unserer kostenlosen </span>
            < Link to='/ZooApp'>
            <a className='ZooApp-Link'>Zoo App</a>
            </Link>
            <span className='Span'>&nbsp;steht eine neue Zooquiz-Runde bereit. Sie funktioniert wie eine Schnitzeljagd: Fragezeichen auf dem Zooplan markieren den Standort der verschiedenen Fragen. Anschauen und beantworten kann man jede Frage, sobald man sich am richtigen Ort im Zoo befindet.</span>
        </p>
    </div>
</div>
  );
}

export default NewsPage2;
