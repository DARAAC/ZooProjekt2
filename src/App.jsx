import { useState } from 'react';
import Home from './components/Home';
import Map from './components/Map';
import Shop from './components/Shop';
import Navigation from './components/Navigation';

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
        <div>
            {renderPage()}
            <Navigation onNavigate={setCurrentPage} />
        </div>
    );
}

export default App;
