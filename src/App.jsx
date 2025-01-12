import { useState } from 'react';
import Home from './components/Home';
import Map from './components/Map';
import Shop from './components/Shop';
import Navigation from './components/Navigation';
import News from './components/News';
import NewsPage1 from './components/Newspages/NewsPage1';
import NewsPage2 from './components/Newspages/NewsPage2';
import ZooApp from './components/ZooApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'map':
                return <Map />;
            case 'shop':
                return <Shop />;
            default:
                return <Home />;
        }
    };

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/news/1' element={<NewsPage1 />}/>
          <Route path='/news/2' element={<NewsPage2 />}/>
          <Route path='/ZooApp' element={<ZooApp />}/>
          {/* Andere Routen für zmbsp. Map oder Shop */}
        </Routes>
      </Router>
    );
}

export default App;