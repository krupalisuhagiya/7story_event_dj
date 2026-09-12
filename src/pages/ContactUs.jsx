import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ContactUs.css'

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name માં ફક્ત letters અને spaces
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        return;
      }
    }

    // Phone માં ફક્ત digits અને maximum 10 digits
    if (name === "phone") {
      if (!/^\d*$/.test(value) || value.length > 10) {
        return;
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(form.name.trim())) {
      alert("Please enter a valid name using letters only.");
      return;
    }

    // Phone validation
    if (form.phone && form.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main>
      {/* <section className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with India's top event planner</p>
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact Us</span>
        </nav>
      </section> */}

      <section className="contact-section section-pad">
        <div className="container contact-grid">
          <div className="contact-info" data-aos="contact-zoom-left">
            <p className="section-tag">Get In Touch</p>
            <h2>Let's Plan Your <span style={{ color: '#cf2e2e' }}>Dream Event</span></h2>
            <p className="contact-intro">
              Ready to create an unforgettable experience? Reach out to us and let's discuss how we can make your event extraordinary.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Office Address</h4>
                  <p>A-5 krishna park industry punagam surat 395010</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <a href="tel:+91 75728 83241">+91 75728 83241</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <a href="#">Devanigopal4321@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" style={{ background: '#25d366' }}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/917572883241" target="_blank" rel="noreferrer">Chat with us on WhatsApp</a>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com/7StoryEvents" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/7storyevents/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://x.com/7StoryEvents" target="_blank" rel="noreferrer" aria-label="Twitter/X"><i className="fab fa-x-twitter"></i></a>
                <a href="https://www.linkedin.com/company/7storyevents" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap" data-aos="contact-zoom-right">
            <h3>Send Us a Message</h3>
            {submitted && (
              <div className="success-msg">
                <i className="fas fa-check-circle"></i> Thank you! We'll get back to you soon.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your 10-digit phone number"
                    inputMode="numeric"
                    maxLength="10"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Event Type</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">Select event type</option>
                    <option>Luxury Wedding</option>
                    <option>Corporate Event</option>
                    <option>Sports Event</option>
                    <option>Celebrity Event</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs
