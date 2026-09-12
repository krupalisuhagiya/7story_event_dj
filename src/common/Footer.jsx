import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const emailSubject = "Event Enquiry";
  const emailBody = `Hello 7Story Events,

I would like to enquire about your event services.

Thank you.`;

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=Devanigopal4321@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <img src="/images/footer_logo.png" alt="7Story Events" width="70" height="70" />
              <span>7Story Events</span>
            </div>
            <p className="footer-desc">
              7Story Events is a premier event management company in India, specializing in luxury weddings,
              corporate events, sports events, and celebrity events.
            </p>
            <div className="footer-socials">
              {/* <a href="https://www.facebook.com/7StoryEvents" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/company/7storyEvents" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/7StoryEvents" target="_blank" rel="noreferrer" aria-label="X/Twitter">
                <i className="fab fa-x-twitter"></i>
              </a> */}
              <a
                href="https://www.instagram.com/7story_event_dj/"
                target="_blank"
                rel="noreferrer"
                className="footer-instagram"
                aria-label="Follow on Instagram"
              >
                <i className="fab fa-instagram"></i>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Navigate</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              {/* <li><Link to="/our-team">Our Team</Link></li> */}
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Luxury Wedding Planner</Link></li>
              <li><Link to="/services">Corporate Event Planner</Link></li>
              <li><Link to="/services">Sports Event Management</Link></li>
              <li><Link to="/services">Celebrity Event Planner</Link></li>
              {/* <li><Link to="/corporate-gallery">Corporate Gallery</Link></li> */}
              <li><Link to="/src/pages/WeddingGallery.jsx">Wedding Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>A-5 krishna park industry punagam surat 395010</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+917572883241">(+91) 75728 83241</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href={gmailLink}
                  target="_blank"
                  rel="noreferrer">Devanigopal4321@gmail.com</a>
              </li>
            </ul>
            <a
              href="https://wa.me/917572883241"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>Copyright &copy; 2026 7Story Events. All Rights Reserved.</p>
          <p>
            <span>Recognised For <strong>Top Event Planners</strong></span>
          </p>
        </div>
      </div>
    </footer >
  )
}

export default Footer
