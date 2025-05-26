import React from 'react';
import '../styles/HomePage.css';
import Banner from '../components/Banner';
import profileImg from '../assets/profile.jpg';
import { FaUsers, FaChartLine, FaPiggyBank } from 'react-icons/fa';
import partner1 from '../assets/partners/franklin.jpg';
import partner2 from '../assets/partners/hdfc.jpg';
import partner3 from '../assets/partners/icici.jpg';
import partner4 from '../assets/partners/kotak.jpg';
import partner5 from '../assets/partners/nippon.jpg';
import partner6 from '../assets/partners/paragparikh.jpeg';
import partner7 from '../assets/partners/sbi.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <Banner />

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="services-header">
          <h2><span className="highlight">Services</span> We Provide</h2>
          <button className="see-more-btn" onClick={() => navigate('/services')}>See More →</button>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <FaUsers className="service-icon" />
            <h3>Family Financial Planning</h3>
            <p>Family financial planning involves setting shared life goals, evaluating household income and resources, and creating a strategy to manage savings, investments, and expenses for long-term financial stability and future security.</p>
          </div>
          <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>SIP/SWP Planning</h3>
            <p>SIP (Systematic Investment Plan) involves investing fixed amounts regularly in mutual funds. SWP (Systematic Withdrawal Plan) enables periodic withdrawals, offering liquidity and income post-retirement or during financial needs.</p>
          </div>
          <div className="service-card">
            <FaPiggyBank className="service-icon" />
            <h3>Alternate Investments</h3>
            <p>Alternate investments are non-traditional assets like real estate, hedge funds, private equity, or commodities. They offer diversification, potential high returns, and hedge against market volatility, but carry higher risks.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img src={profileImg} alt="Mr. Prafful Jain" className="about-image" />
          </div>
          <div className="about-text">
            <p className="about-subtitle">~ About Me</p>
            <h2>Who is <span className="highlight1">Mr. Prafful Jain?</span></h2>
            <p>He is the founder of Medal Investments and has achieved excellent results for both his clients and himself through his exceptional knowledge in financial planning.</p>
            <div className="about-stats">
              <div className="stat">
                <h3>200+</h3>
                <p>People Educated</p>
              </div>
              <div className="stat">
                <h3>7+</h3>
                <p>Accounts Family</p>
                <p>managed</p>
              </div>
              <div className="stat">
                <h3>50 Lakhs+</h3>
                <p>Total Invested</p>
              </div>
            </div>
            <button className="contact-now" onClick={() => window.open('https://wa.me/918277608357', '_blank')}>
              Contact Now
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2 className="partners-title">Our <span className="highlight">Empanelled Partners</span></h2>
        <div className="scrolling-partners">
          <div className="partners-track">
            {[partner1, partner2, partner3, partner4, partner5, partner6, partner7,
              partner1, partner2, partner3, partner4, partner5, partner6, partner7
            ].map((logo, index) => (
              <div key={index} className="partner-logo">
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
