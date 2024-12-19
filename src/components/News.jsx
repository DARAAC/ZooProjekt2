import React, { useEffect } from "react";

function News() {

    useEffect(() => {
        document.getElementById('prevButton').addEventListener('click', handlePrev);
        document.getElementById('nextButton').addEventListener('click', handleNext);
        
        document.querySelectorAll('.page-dots span').forEach((dot, index) => {
            dot.addEventListener('click', () => goToPage(index + 1));
        });

        updatePage();
    }, []);

    let currentPage = 1;

    function updatePage() {
        const content = document.querySelector('.news-content p');
        content.textContent = `📰 Aktuelle Neuigkeiten für Seite ${currentPage}`;

        document.querySelectorAll('.page-dots span').forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentPage - 1) {
                dot.classList.add('active');
            }
        });
    }

    function handlePrev() {
        if (currentPage > 1) {
            currentPage--;
            updatePage();
        }
    }

    function handleNext() {
        if (currentPage < 3) {  
            currentPage++;
            updatePage();
        }
    }

    function goToPage(page) {
        currentPage = page;
        updatePage();
    }

    return (
        <div className="news">
            <h3>News</h3>
            <div className="news-content">
                <p>📰 Aktuelle Neuigkeiten</p>
            </div>
            <div className="news-buttons">
                <button id="prevButton">←</button>
                <button id="nextButton">→</button>
            </div>
            <div className="page-dots">
                <span className="active" onClick={() => goToPage(1)}></span>
                <span onClick={() => goToPage(2)}></span>
                <span onClick={() => goToPage(3)}></span>
            </div>
        </div>
    );
}

export default News;
