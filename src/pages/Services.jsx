import { Link } from 'react-router-dom'
import './Services.css'

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    img: '/images/wedding.jpg',
    title: 'Luxury Wedding Planner',
    desc: '7Story Events is a premier royal wedding planner in India, specializing in curating grand, luxurious, and unforgettable celebrations. Based in Noida, we bring together regal themes, heritage venues, and flawless execution to deliver truly royal experiences. Whether you\'re planning a palace wedding in Rajasthan, a luxury wedding in Noida, or a destination wedding anywhere in India, 7Story Events offers premium planning services tailored to your vision.',
    features: ['Venue Scouting & Booking', 'Decor & Theme Design', 'Catering Management', 'Photography & Videography', 'Entertainment & Music', 'Guest Management'],
  },
  {
    img: '/images/corporate.jpg',
    title: 'Corporate Event Planner',
    desc: 'We manage your corporate event like it\'s our own. From conferences and product launches to team-building events and award ceremonies, we deliver professional, polished, and impactful corporate experiences. Our dedicated team handles every detail from logistics to live production.',
    features: ['Conferences & Summits', 'Product Launches', 'Award Ceremonies', 'Team Building Events', 'Trade Shows & Exhibitions', 'Virtual/Hybrid Events'],
  },
  {
    img: '/images/sports.jpg',
    title: 'Sports Event Management',
    desc: 'From local tournaments to large-scale national competitions, we deliver unforgettable sporting experiences. Our sports event management team handles everything from venue arrangement and athlete management to live broadcasting and audience experience.',
    features: ['Tournament Organization', 'Venue & Logistics', 'Athlete Management', 'Live Broadcasting', 'Sponsorship Management', 'Ticketing & Security'],
  },
  {
    img: '/images/celebrity.jpg',
    title: 'Celebrity Event Planner',
    desc: 'Access India\'s finest venues and global talent networks. We deliver elite celebrity events — from star-studded nights and celebrity appearances to grand entertainment shows. Our extensive network ensures access to top artists, performers and global resources.',
    features: ['Celebrity Appearances', 'Entertainment Shows', 'Fan Meet & Greet', 'Award Functions', 'Concert Management', 'VIP Hospitality'],
  },
]

function Services() {
  const sectionRef = useRef([]); useLayoutEffect(() => {
    ScrollTrigger.refresh();
    sectionRef.current.forEach((row, index) => {

      if (!row) return;

      const image = row.querySelector(".service-row-img");
      const text = row.querySelector(".service-row-text");
      switch (index) {

        case 0:
          gsap.fromTo(
            image,
            {
              rotateX: 90,
              opacity: 0,
            },
            {
              rotateX: 0,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.7)",
              transformPerspective: 800,
              scrollTrigger: {
                trigger: row,
                start: "top 75%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              }
            }
          );
          break;

        case 1:
          gsap.fromTo(
            image,
            {
              rotateY: -90,
              opacity: 0,
            },
            {
              rotateY: 0,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.7)",
              transformPerspective: 800,
              scrollTrigger: {
                trigger: row,
                start: "top 75%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              }
            }
          );
          break;

        case 2:
          gsap.fromTo(
            image,
            {
              rotateX: -90,
              opacity: 0,
            },
            {
              rotateX: 0,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.7)",
              transformPerspective: 800,
              scrollTrigger: {
                trigger: row,
                start: "top 75%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              }
            }
          );
          break;

        case 3:
          gsap.fromTo(
            image,
            {
              rotateY: 90,
              opacity: 0,
            },
            {
              rotateY: 0,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.7)",
              transformPerspective: 800,
              scrollTrigger: {
                trigger: row,
                start: "top 75%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              }
            }
          );
          break;
      }

      gsap.fromTo(
        text,
        {
          x: index % 2 === 0 ? 150 : -150,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          }
        }
      );

    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);
  return (
    <main>

      <section className="services-page section-pad">
        <div className="container">
          <div className="section-title">
            <p className="section-tag">Incredible Services</p>
            <h2>Event Management <span>Services</span></h2>
          </div>
          <div className="services-list">
            {services.map((s, i) => (
              <div
                className={`service-row${i % 2 === 1 ? ' reverse' : ''}`}
                key={s.title}
                ref={(el) => (sectionRef.current[i] = el)}
              >
                <div className="service-row-img">
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
                <div className="service-row-text">
                  <h2>{s.title}</h2>
                  <p>{s.desc}</p>
                  <ul className="service-features">
                    {s.features.map((f) => (
                      <li key={f}><i className="fas fa-check-circle"></i> {f}</li>
                    ))}
                  </ul>
                  <a href="https://wa.me/917572883241" target="_blank" rel="noreferrer" className="btn-primary">
                    <i className="fab fa-whatsapp"></i> Get a Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="services-cta section-pad">
        <div className="container services-cta-inner">
          <h2>Ready to Plan Your Dream Event?</h2>
          <p>Contact India's top event management company today. Let's create something extraordinary together.</p>
          <div className="services-cta-btns">
            <a href="https://wa.me/917572883241" target="_blank" rel="noreferrer" className="btn-primary">
              <i className="fab fa-whatsapp"></i> Lets Discuss
            </a>
            <Link to="/contact-us" className="btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section> */}
      <section
        className="services-cta section-pad"
        data-aos="custom-rotate"
      >
        <div className="container services-cta-inner">
          <h2>Ready to Plan Your Dream Event?</h2>

          <p>
            Contact India's top event management company today.
            Let's create something extraordinary together.
          </p>

          <div className="services-cta-btns">
            <a
              href="https://wa.me/917572883241"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <i className="fab fa-whatsapp"></i> Lets Discuss
            </a>

            <Link to="/contact-us" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
