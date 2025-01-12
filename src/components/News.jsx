import React from 'react';
import { Link } from 'react-router-dom';


function News() {
  return (
    <div className="news">
      <div className="news-item">
        <Link to="/news/1">
          <button className="news-button">Die Nashörner sind Zurück</button>
        </Link>
        <div className="news-content">
          <p>Nach einem Unfall sind sie jetzt gesund und munter zurück</p>
        </div>
      </div>
      <div className="news-item">
        <Link to="/news/2">
          <button className="news-button">Quizrunde in der Zoo App</button>
        </Link>
        <div className="news-content">
          <p>Wir haben in der Zoo-App eine neue Runde unseres Zooquiz gestartet </p>
        </div>
      </div>
    </div>
  );
}

export default News;
