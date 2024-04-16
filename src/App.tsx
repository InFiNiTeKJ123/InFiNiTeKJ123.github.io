import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Menubar from './components/menubar';
import Home from './pages/home';
import Map from './pages/map';
import About from './pages/about';
import Weather from './components/test';
import Explore from './pages/explore';



function App() {
  return (
    <div>
      <Menubar />
      <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/map" element={<Map />}/>
            <Route path="/explore" element={<Explore />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/test" element={<Weather />}/>
            <Route path="*" element={<Navigate to='/home'/>}/>
      </Routes>

    </div>
  );
}

export default App;
