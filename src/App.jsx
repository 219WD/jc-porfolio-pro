import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './pages/HomeScreen';
import Work from './pages/Work';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
