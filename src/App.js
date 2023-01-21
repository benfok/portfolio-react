
import './App.css';
import { React } from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Header from './components/Header/index';
import Footer from './components/Footer';

import { PageProvider } from './contexts/PageContext';


function App() {

  return (
      <Router basename="/">
        <div id="react-content-container" className="container">
          <PageProvider>
            <Header />
            <main>
              <Routes>
                {/* <Route 
                  path="/" 
                  element={<Home />} 
                /> */}
                <Route 
                  path="" 
                  element={<About />} 
                />
                <Route 
                  path="services/:active_tab" 
                  element={<Services />} 
                />
                <Route 
                  path="/services/*" 
                  element={<Services />} 
                />
                <Route 
                  path="portfolio" 
                  element={<Portfolio />} 
                />
                <Route 
                  path="contact" 
                  element={<Contact />} 
                />
                <Route 
                  path="resume" 
                  element={<Resume />} 
                />
                <Route 
                  path="*" 
                  element={<About />} 
                />
              </Routes>
            </main>
          </PageProvider>
          <Footer />
        </div>
      </Router>
  );
}

export default App;