import Home from './components/Home';
import News from './components/News';
import NewsPage1 from './components/Newspages/NewsPage1';
import NewsPage2 from './components/Newspages/NewsPage2';
import ZooApp from './components/ZooApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/news/1' element={<NewsPage1 />}/>
          <Route path='/news/2' element={<NewsPage2 />}/>
          <Route path='/ZooApp' element={<ZooApp />}/>
        </Routes>
      </Router>
    );
}

export default App;