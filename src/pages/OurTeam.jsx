import { Link } from 'react-router-dom'
import './OurTeam.css'

const teamMembers = [
  { name: 'Damodar Singh (Aditya)', role: 'Founder & CEO', img: '/images/team-1.jpg' },
  { name: 'Swati Chaudhary', role: 'Creative Director', img: '/images/team-2.jpg' },
  { name: 'Sarthak Singhal', role: 'Event Manager', img: '/images/team-3.jpg' },
  { name: 'Aashish Yadav', role: 'Corporate Event Lead', img: '/images/team-4.jpg' },
  { name: 'Anish Choudhary', role: 'Wedding Planner', img: '/images/team-5.jpg' },
  { name: 'Gaurav Kumar', role: 'Operations Manager', img: '/images/team-6.jpg' },
  { name: 'Prashant Kumar', role: 'Sports Event Coordinator', img: '/images/team-7.jpg' },
  { name: 'Prakash Kumar', role: 'Logistics Head', img: '/images/team-8.jpg' },
  { name: 'Rajesh Kumar', role: 'Decor Specialist', img: '/images/team-9.jpg' },
  { name: 'Abhishek Sharma', role: 'Photography Lead', img: '/images/team-10.jpg' },
  { name: 'Sunil Vaid', role: 'Client Relations', img: '/images/team-11.jpg' },
]

function OurTeam() {
  return (
    <main>
      <section className="page-header">
        <h1>Our Team</h1>
        <p>The Heart of Our Success</p>
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Our Team</span>
        </nav>
      </section>

      <section className="team-section section-pad">
        <div className="container">
          <div className="section-title">
            <p className="section-tag">Meet The Team</p>
            <h2>The People Behind <span>ADDY Events</span></h2>
          </div>
          <div className="team-grid">
            {teamMembers.map((m) => (
              <div className="team-card" key={m.name}>
                <div className="team-img">
                  <img src={m.img} alt={m.name} loading="lazy" />
                  <div className="team-socials">
                    <a href="https://www.linkedin.com/company/addy-events" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/addyevents/" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-team section-pad" style={{ background: '#f9f9f9' }}>
        <div className="container join-team-inner">
          <div>
            <h2>Join Our <span style={{ color: '#cf2e2e' }}>Team</span></h2>
            <p>
              We are always looking for talented, passionate people who want to make a difference in the events industry.
              If you have a passion for creating extraordinary experiences, we'd love to hear from you.
            </p>
          </div>
          <Link to="/contact-us" className="btn-red">Get In Touch</Link>
        </div>
      </section>
    </main>
  )
}

export default OurTeam
