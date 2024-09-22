import React , { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './index.css';
import './Button.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skill';
import Work from './Components/Work';
import Emailjs from './Components/Emailjs';
import Repositories from './Components/Repositories';
import Footer from './Components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
   <div className="App">
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Home/>
        <About/>
        <Skills/>
        <Repositories/>
        <Emailjs/>
        <Routes>
           <Route path="/resume" element={<Work />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
