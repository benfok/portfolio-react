
import './App.css';
import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Header from './components/Header/index';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/portfolio" 
                element={<Portfolio />} 
              />
              <Route 
                path="/contact" 
                element={<Contact />} 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;