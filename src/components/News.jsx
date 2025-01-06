import React from 'react';
import { Link } from 'react-router-dom';


function News() {
  return (
    <div className="news">
      <div className="news-item">
        <Link to="/news/1">
          <button className="news-button">Title 1</button>
        </Link>
        <div className="news-content">
          <p>Brief description of news item 1</p>
        </div>
      </div>

      <div className="news-item">
        <Link to="/news/2">
          <button className="news-button2">Title 2</button>
        </Link>
        <div className="news-content">
          <p>Brief description of news item 2</p>
        </div>
      </div>
    </div>
  );
}

export default News;
