import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import React from 'react';
import './App.css';
import Home from './Pages/Home';
import ImageCardSlider from './Components/ImageCardSlider';
import Card from './Pages/Card';
import DetailedPage from './Pages/DetailedPage';
import Intro from './Pages/Intro';

import SeriesListPage from './Pages/SeriesListPages'
import SeriesDetailPage from './Pages/SeriesDetailPage'

function App() {
  
  return (
    <>
    
      <Router>
        
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie" element={<Card />} />
          <Route path="/movie/:id" element={<DetailedPage />} />
          <Route path="/webseries" element={<SeriesListPage/>} />
          <Route path="/webseries/:id" element={<SeriesDetailPage />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
