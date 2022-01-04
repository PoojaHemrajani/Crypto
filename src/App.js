import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Cryptocurrencies } from './components/Cryptocurrencies';
import News from './components/News';
import { Exchanges } from './components/Exchanges';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <div style={{marginLeft:'300px'}}>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Cryptocurrencies' element={<Cryptocurrencies />} />
          <Route path='/Exchange' element={<Exchanges />} />
          <Route path='/News' element={<News />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
