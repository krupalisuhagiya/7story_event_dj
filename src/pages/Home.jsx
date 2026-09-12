import { Form, Link } from "react-router-dom";
import "./Home.css";
import celebrityImg from "/images/corporate-4.jpg";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Luxury Wedding Planner",
    desc: "Grand, luxurious and unforgettable weddings tailored to your vision — from palace weddings in Rajasthan to destination weddings across India.",
    // img: "/images/wedding.jpg",
    img: "/images/wedding-3.jpg",
    link: "/src/pages/WeddingGallery.jsx",
  },
  {
    title: "Corporate Event Planner",
    desc: "Beautifully written Kankotri that blends tradition with elegance, creating the perfect first impression for your celebration.",
    img: "/images/corporate.jpg",
    link: "/src/pages/WeddingGallery.jsx",
  },
  {
    title: "Sports Event Planner",
    desc: "From local tournaments to large-scale national competitions, we deliver unforgettable sporting experiences with precision and flair.",
    img: "/images/sports.jpg",
    link: "/src/pages/WeddingGallery.jsx",
  },
];

const stats = [
  { number: "50+", label: "Clients Served" },
  { number: "99%", label: "Happy Customers" },
  { number: "99%", label: "Customer Ratings" },
];

const whyUs = [
  {
    icon: "fas fa-tasks",
    title: "End-to-End Event Management",
    desc: "From ideation to execution — we handle every detail, so you can enjoy the moment without stress.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Custom-Tailored Experiences",
    desc: "No templates. Every event is uniquely designed to reflect your style, story, and vision.",
  },
  {
    icon: "fas fa-map-marked-alt",
    title: "Venue Scouting & Styling",
    desc: "Access to India's most prestigious venues — from royal palaces to modern luxury resorts — with personalized theme décor.",
  },
  {
    icon: "fas fa-globe",
    title: "Global Vendor Network",
    desc: "From international artists to gourmet catering, we source the best talent and resources from around the world.",
  },
];
function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".overlay-box");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("flip-card");
            observer.unobserve(entry.target); // એક જ વાર animation
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  return (
    <main>
      <section className="hero">
        <div className="confetti-container">
          <span></span>
          <span>
            <span></span>
          </span>
          <span>
            <span></span>
            <span></span>
          </span>
          <span>
            <span></span>
            <span></span>
          </span>
          <span>
            <span></span>
            <span></span>
          </span>
          <span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>
            <span></span>
            <span></span>
          </span>
          <span>
            <span></span>
          </span>
        </div>
        <div className="container hero-content">
          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1>TOP EVENT PLANNER IN INDIA</h1>

            <p className="hero-sub">
              We create amazing experiences — luxury weddings, corporate events,
              sports & celebrity event management across India.
            </p>

            <div className="hero-btns">
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

          {/* RIGHT IMAGE */}
          <div className="hero-right">
            <img
              src="/images/hero-bg.jpeg"
              alt="7Story Events"
              className="hero-main-img"
            />
          </div>
        </div>
      </section>

      <section className="services-overview section-pad">
        <div className="container">
          <div className="section-title">
            <p className="section-tag" data-aos="top-coming">
              Introducing
            </p>
            <h2 className="main-title" data-aos="left-coming">
              We Create An Amazing Experience
              <br />
              <span className="sub-title" data-aos="right-coming">
                Choose Your Top Event Planner
              </span>
            </h2>
          </div>
          <div className="services-grid">
            {services.map((s, index) => {
              let animation = "";

              if (index === 0) {
                animation = "card-left";
              } else if (index === 1) {
                animation = "card-bottom";
              } else if (index === 2) {
                animation = "card-right";
              }

              return (
                <div
                  className="service-card"
                  key={s.title}
                  data-aos={animation}
                >
                  <div className="service-img-wrap">
                    <img src={s.img} alt={s.title} loading="lazy" />

                    <div className="service-img-overlay"></div>
                  </div>

                  <div className="service-body">

                    <h3>{s.title}</h3>

                    <p>{s.desc}</p>

                    <Link to={s.link} className="btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="celebrity-section">
        <div className="celebrity-overlay"></div>

        <div className="container celebrity-content">
          <div
            className="celebrity-image aos-rotate-right"
            data-aos="aos-rotate-right"
          >
            <img src={celebrityImg} alt="Celebrity Event Planner" />
          </div>

          <div className="celebrity-text">
            <h2 data-aos="fade-down" data-aos-duration="1500">
              CELEBRITY
            </h2>
            <h1>
              <span
                className="event-text"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                EVENT
              </span>
              <span
                className="planner-text"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                PLANNER
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="philosophy-section">
        <div className="container philosophy-container">
          {/* LEFT CONTENT */}
          <div
            className="philosophy-left"
            data-aos="cross-light-speed"
            data-aos-once="true"
          >
            <p className="philosophy-tag">Our Philosophy.</p>

            <h2>7Story Events: Best Event Planner</h2>

            <p className="philosophy-desc">
              7Story Events is a professional event management company. We are a
              passionate team creating unforgettable wedding, corporate,
              celebrity and sports events across India with premium planning and
              execution.
            </p>

            <ul className="philosophy-list">
              <li>Corporate Events Planner & Organiser</li>
              <li>Photography and Videography</li>
              <li>Wedding Planners & Organizers</li>
              <li>Conference Event Planners</li>
              <li>Sports Management Company</li>
              <li>Celebrity Event Planner</li>
            </ul>

            <a
              href="https://wa.me/917572883241"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Lets Discuss
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="philosophy-right"
            data-aos="cross-light-speed"
            data-aos-once="true"
          >
            <img src="/images/hero-bg1.jpg" alt="7Story Events" />
          </div>
        </div>
      </section>
      <section className="royal-section">
        <div className="container philosophy-container">
          {/* RIGHT IMAGE */}
          <div
            className="philosophy-right"
            data-aos="cross-light-speed"
            data-aos-once="true"
          >
            <img src="/images/wedding-2.jpg" alt="7Story Events" />
          </div>
          {/* LEFT CONTENT */}
          <div
            className="philosophy-left"
            data-aos="cross-light-speed"
            data-aos-once="true"
          >
            <h2>
              Luxury Wedding Planner-
              <br />
              Royal Wedding
            </h2>
            <p>
              Looking for reliable and professional event organisers in Noida?
              At <strong>7Story Events</strong>, we specialise in creating
              exceptional event experiences tailored to your needs.
            </p>

            <ul className="royal-list">
              <li>
                With over <strong>1+ years of experience</strong> in event
                management
              </li>


              <li>We Manage Events of Every Size and Style</li>

              <li>
                We rank among the top corporate event management companies in
                Delhi, Gurgaon and NCR.
              </li>
            </ul>

            <a
              href="https://wa.me/917572883241"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              START CHAT <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="experience-services" ref={sectionRef}>
        <div className="container">
          <div className="services-heading">
            <p>Our Services.</p>
            <h2>
              Bringing Your <span>Dream</span> Celebrations
              <br />
              to Life
            </h2>
          </div>
          <div className="service-box-grid">

            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Mehendi →</div>
                <img src="/images/mehndi.webp" alt="" />
              </Link>
            </div>

            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Carnival →</div>
                <img src="/images/carnival.jpg" alt="" />
              </Link>
            </div>

            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Anchor →</div>
                <img src="/images/images.jpg" alt="" />
              </Link>
            </div>

            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">DJ →</div>
                <img src="/images/corporate.jpg" alt="" />
              </Link>
            </div>

            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Sangeet - Garba →</div>
                <img src="/images/hero-bg.jpeg" alt="" />
              </Link>
            </div>

            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Photography Frame →</div>
                <img src="/images/photography frame.webp" alt="" />
              </Link>
            </div>

            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Haldi →</div>
                <img src="/images/haldi.webp" alt="" />
              </Link>
            </div>
            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Engagement →</div>
                <img src="/images/better together.jpg" alt="" />
              </Link>
            </div>
            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Kanku Pagla →</div>
                <img src="/images/kanku pagla.png" alt="" />
              </Link>
            </div>
            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Birthday →</div>
                <img src="/images/birthday.webp" alt="" />
              </Link>
            </div>
            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">6Thi →</div>
                <img src="/images/6Thi.png" alt="" />
              </Link>
            </div>
            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Vanarasam →</div>
                <img src="/images/vanarasam.png" alt="" />
              </Link>
            </div>
            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Panchamasi →</div>
                <img src="/images/panchmasi.png" alt="" />
              </Link>
            </div>
            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Shrimant Sanskar →</div>
                <img src="/images/22 Baby Shower.jpeg" alt="" />
              </Link>
            </div>
            <div className="overlay-box">
              <Link to="/src/pages/WeddingGallery.jsx">
                <div className="card-indicator">Besanu →</div>
                <img src="/images/besanu.jpg" alt="" />
              </Link>
            </div>
          </div>
         
        </div>
      </section>
    
      <section className="stats-section" ref={ref}>
        <div className="container stats-grid">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <h2>
                {inView && (
                  <>
                    <CountUp
                      end={parseInt(s.number)}
                      duration={2}
                    />
                    {s.number.includes("+") && "+"}
                    {s.number.includes("%") && "%"}
                  </>
                )}
              </h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-us section-pad">
        <div className="container">
          <div className="section-title">
            <p className="section-tag" data-aos="top-coming">
              Premium Event Management

            </p>
            <h2 data-aos="left-coming">
              Experience Excellence in Every Celebration
              <br />
              <span data-aos="right-coming">Why Choose 7Story Events ?</span>
            </h2>
          </div>
          <div className="why-grid">
            {whyUs.map((w, index) => {
              let animation = "";

              if (index === 0) {
                animation = "cinematic-left";
              } else if (index === 1) {
                animation = "cinematic-top";
              } else if (index === 2) {
                animation = "cinematic-bottom";
              } else if (index === 3) {
                animation = "cinematic-right";
              }

              return (
                <div className="why-card" key={w.title} data-aos={animation}>
                  <div className="why-icon">
                    <i className={w.icon}></i>
                  </div>

                  <h3>{w.title}</h3>

                  <p>{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="gallery-home section-pad"
        style={{ background: "#f9f9f9" }}
      >
        <div className="container">
          <div className="section-title">
            <p className="section-tag">Our Work</p>
            <h2>
              Our <span>Gallery</span>
            </h2>
          </div>
          <div className="gallery-home-grid">
            <Link to="/src/pages/WeddingGallery.jsx" className="gallery-home-card">
              <img
                src="/images/corporate.jpg"
                alt="Corporate Events"
                loading="lazy"
              />
              <div className="gallery-home-overlay">
                <h3>Corporate Gallery</h3>
                <p>View All</p>
              </div>
            </Link>
            <Link to="/src/pages/WeddingGallery.jsx" className="gallery-home-card">
              <img
                src="/images/wedding.jpg"
                alt="Wedding Events"
                loading="lazy"
              />
              <div className="gallery-home-overlay">
                <h3>Wedding Gallery</h3>
                <p>View All</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section custom-rotate" data-aos="custom-rotate">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Create an Unforgettable Event?</h2>
            <p>Get in touch with India's top event planner today.</p>
          </div>
          <div className="cta-btns">
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
  );
}

export default Home;
