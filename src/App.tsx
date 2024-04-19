import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Menubar from './components/menubar';
import Home from "./pages/home";
import Map from './pages/map';
import About from './pages/about';
import Explore from './pages/explore';
import AirQuality from './components/test';



function App() {
  const [value, setValue] = useState('home')
  return (
    <div>
      <Menubar current_page={value} set_current_page={setValue}/>
      <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/map" element={<Map />}/>
            <Route path="/explore" element={<Explore />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/test" element={<AirQuality />}/>
            <Route path="*" element={<Navigate to='/home'/>}/>
      </Routes>

    </div>
  );
}

export default App;
