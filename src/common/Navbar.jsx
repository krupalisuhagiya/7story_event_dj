import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../public/images/logo.png"
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  // const [galleryOpen, setGalleryOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false);

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span><i className="fas fa-map-marker-alt"></i> Surat, Gujarat, India</span>
            <span><i className="fas fa-phone"></i> (+91) 75728 83241</span>
            <span><i className="fas fa-phone"></i> (+91) 97241 24200</span>
            <span><i className="fas fa-envelope"></i> Devanigopal4321@gmail.com</span>
          </div>
          <div className="topbar-right">
            {/* <a href="https://www.facebook.com/7story-events" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/7story-events" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://x.com/7story-events" target="_blank" rel="noreferrer" aria-label="Twitter/X"><i className="fab fa-x-twitter"></i></a> */}
            <a
              href="https://www.instagram.com/7story_event_dj/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="topbar-instagram"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="ADDY Events Logo" width="70" height="70" />
            {/* <span className="brand-name" style={{fontFamily:"initial"}}>7Story Event & DJ</span> */}
            <span className="brand-name luxury-logo">
              <div className="logo-text-wrapper">
                <div>
                  <span className="gold-seven">7</span>
                  <span className="gold-text">Story Event & DJ</span>
                </div>

                <div className="gold-line">
                  <span></span>
                  <i className="fas fa-gem"></i>
                  <span></span>
                </div>
              </div>
            </span>
          </Link>

          <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>

            <Link
              to="/about-us"
              className={location.pathname === '/about-us' ? 'active' : ''}
            >
              About Us
            </Link>

            <Link
              to="/contact-us"
              className={location.pathname === '/contact-us' ? 'active' : ''}
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Services
            </Link>

            <Link
              to="/src/pages/WeddingGallery.jsx"
              className={location.pathname === '/src/pages/WeddingGallery.jsx' ? 'active' : ''}
            >
              Gallery
            </Link>

            <Link
              to="/video"
              className={location.pathname === '/video' ? 'active' : ''}
            >
              Video
            </Link>

            {/* Mobile Let's Discuss Button */}
            <a
              href="https://wa.me/917572883241"
              target="_blank"
              rel="noreferrer"
              className="mobile-discuss"
            >
              <i className="fab fa-whatsapp"></i>
              Let's Discuss
            </a>
          </nav>

          {/* Desktop Let's Discuss Button */}
          <a
            href="https://wa.me/917572883241"
            target="_blank"
            rel="noreferrer"
            className="btn-discuss"
          >
            <i className="fab fa-whatsapp"></i>
            Let's Discuss
          </a>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>


        </div>
      </header>
    </>
  )
}

export default Navbar
