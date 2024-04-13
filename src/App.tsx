import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menubar from './components/menubar';
import Home from './pages/home';
import Map from './pages/map';
import About from './pages/about';



function App() {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/map" element={<Map />}/>
        <Route path="/about" element={<About />}/>
      </Routes>

    </div>
  );
}

export default App;
