import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurTeam from './pages/OurTeam'
import Services from './pages/Services'
import WeddingGallery from './pages/WeddingGallery'
import ScrollToTop from './components/ScrollToTop'
import Video from './pages/Video'
import EventLoader from './components/EventLoader'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <EventLoader />;
  }
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/services/:id" element={<Services />} /> */}

        <Route path="/src/pages/WeddingGallery.jsx" element={<WeddingGallery />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
