import { Link } from 'react-router-dom'
import './AboutUs.css'

function AboutUs() {
  return (
    <main>
      {/* <section className="page-header">
        <h1>About Us</h1>
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </nav>
      </section> */}

      {/* <section className="about-intro section-pad">
        <div className="container about-intro-inner">
          <div className="about-intro-img">
            <img src="/images/about-home.jpg" alt="ADDY Events Team" />
            <div className="about-years-badge">
              <span className="badge-num">5+</span>
              <span className="badge-label">Years in Event Management</span>
            </div>
          </div>
          <div className="about-intro-text">
            <p className="section-tag">Who We Are</p>
            <h2>About ADDY Events</h2>
            <p>
              ADDY Events is a recognized and trusted service currently active in every field of event organization.
              We are using the latest tools and highly professional staff to finish all of your works.
            </p>
            <p>
              We have a wide range of networks in this industry to give you the required results. We are one of the
              most selected and rewarded Corporate Event Planners, Wedding Event Planners, organizers and best event
              management company in Delhi NCR, India.
            </p>
            <p>
              We are a team of passionate professionals across different verticals such as social media, armed forces,
              photography, hospitality, graphic designers, content writers, and HR.
            </p>
            <div className="about-vision">
              <h3>Our Vision</h3>
              <p>
                To be India's most trusted and innovative event management company, delivering extraordinary
                experiences that become cherished memories for every client we serve.
              </p>
            </div>
            <div className="about-btns">
              <a href="https://wa.me/919140058489" target="_blank" rel="noreferrer" className="btn-primary">
                <i className="fab fa-whatsapp"></i> Lets Discuss
              </a>
              <Link to="/contact-us" className="btn-red">Contact Us</Link>
            </div>
          </div>
        </div>
      </section> */}

      <section className="about-values section-pad" style={{ background: '#f9f9f9' }}>
        <div className="container">
          <div className="section-title">
            <p className="section-tag" data-aos="about-top">What Drives Us</p>
            <h2>
              <span style={{ color: "#378746", display: "inline-block" }} data-aos="about-left">
                Our Core
              </span>{" "}
              <span style={{ color: "#cf2e2e", display: "inline-block" }} data-aos="about-right">
                Values
              </span>
            </h2>
          </div>
          <div className="values-grid">
            {[
              { icon: 'fas fa-star', title: 'Excellence', desc: 'We strive for perfection in every event we plan and execute.', aos: "about-left", },
              { icon: 'fas fa-handshake', title: 'Trust', desc: 'Building lasting relationships with our clients through transparency and honesty.', aos: "about-top", },
              { icon: 'fas fa-lightbulb', title: 'Innovation', desc: 'Bringing fresh, creative ideas to make every event unique and memorable.', aos: "about-right", },
              { icon: 'fas fa-users', title: 'Teamwork', desc: 'Our diverse team works together to deliver results that exceed expectations.', aos: "about-left", },
              { icon: 'fas fa-heart', title: 'Passion', desc: 'We love what we do — and that passion shows in every event we create.', aos: "about-bottom", },
              { icon: 'fas fa-clock', title: 'Reliability', desc: 'On time, on budget, and on point — every single time, without compromise.', aos: "about-right", },
            ].map((v) => (
              <div className="value-card" key={v.title} data-aos={v.aos}>
                <div className="value-icon"><i className={v.icon}></i></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="about-stats section-pad">
        <div className="container">
          <div className="section-title">
            <p className="section-tag">Fun Facts</p>
            <h2>Trusted by Real <span>Customers</span></h2>
          </div>
          <div className="about-stats-grid">
            {[
              { n: '1000+', l: 'Clients Served' },
              { n: '900+', l: 'Happy Customers' },
              { n: '99%', l: 'Customer Ratings' },
              { n: '1000+', l: 'Tickets Resolved' },
            ].map((s) => (
              <div className="about-stat" key={s.l}>
                <h2>{s.n}</h2>
                <p>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="about-location section-pad" style={{ background: '#f9f9f9' }}>
        <div className="container">
          <div className="section-title">
            <p className="section-tag">Find Us</p>
            <h2>Our <span>Location</span></h2>
          </div>
          <div className="location-content">
            <div className="location-info">
              <div className="loc-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>A-5 krishna park industry punagam surat 395010</p>
                </div>
              </div>
              <div className="loc-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919140058489">+91 75728 83241</a>
                </div>
              </div>
              <div className="loc-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@addyevents.in">Devanigopal4321@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="location-map">
              <iframe
                title="ADDY Events Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d77.5!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
