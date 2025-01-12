import Home from './components/Home';
import NewsPage1 from './components/Newspages/NewsPage1';
import NewsPage2 from './components/Newspages/NewsPage2';
import ZooApp from './components/ZooApp'
import Tickets from "./components/Tickets.jsx";
import Shop from "./components/Shop.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from "./components/ProductDetail.jsx";


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/news/1' element={<NewsPage1 />}/>
          <Route path='/news/2' element={<NewsPage2 />}/>
          <Route path='/ZooApp' element={<ZooApp />}/><Route path='/Shop' element={<Shop />}/>
          <Route path='/Tickets' element={<Tickets />}/>
          <Route path="/Shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    );
}

export default App;