import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServicePillar from './pages/ServicePillar';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer';
import Credits from './pages/Credits';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-pillar" element={<ServicePillar />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
