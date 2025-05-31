import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import profileImg from '../assets/profile.avif';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Refs for sections to animate
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const aboutMeRef = useRef(null);
  const founderRef = useRef(null);

  useEffect(() => {
    // Header animation: fade down
    gsap.from(headerRef.current, {
      opacity: 1,
      y: -50,
      duration: 1,
      ease: 'power2.out',
    });

    // About intro fade in + slide from left
    gsap.from(introRef.current, {
      scrollTrigger: {
        trigger: introRef.current,
        start: 'top 80%',
      },
      opacity: 1,
      x: -100,
      duration: 1,
      ease: 'power2.out',
    });

    // About Me section fade in + slide from right
    gsap.from(aboutMeRef.current, {
      scrollTrigger: {
        trigger: aboutMeRef.current,
        start: 'top 80%',
      },
      opacity: 1,
      x: 100,
      duration: 1,
      ease: 'power2.out',
    });

    // Founder message fade in + slight scale up
    gsap.from(founderRef.current, {
      scrollTrigger: {
        trigger: founderRef.current,
        start: 'top 80%',
      },
      opacity: 1,
      scale: 0.95,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header1" ref={headerRef}>
        <h1>ABOUT US</h1>
        <p>
          <Link to="/" className="plain-link">Home</Link> &gt; About Us
        </p>
      </div>

      {/* About Us Intro */}
      <div className="about-intro" ref={introRef}>
        <h2>About Company</h2>
        <p>
          We are a financial distribution firm committed to making investment opportunities accessible to all.
          Whether you're an individual, a family, or a business, our mission is to empower you with the financial confidence
          needed to plan for the future and seize new opportunities.
        </p>
        <p>
          Through a combination of strategic solutions, in-depth market insight, and personalized planning,
          we tailor our approach to meet your unique goals and circumstances.
          We believe that financial growth should be built on a foundation of trust, transparency, and long-term relationships.
          With a client-first mind-set, we strive to simplify the complexities of investing—guiding you every step of the way
          so you can make informed decisions and achieve lasting success.
        </p>

        <div className="mission-vision">
          <div>
            <h3>Mission:</h3>
            <p>
              To empower our clients and their families to achieve financial independence and maximize the utility of their wealth,
              enabling them to live with confidence, purpose, and peace of mind.
              We strive to be a trusted partner in every stage of life, offering clear guidance, personalized strategies, and unwavering support.
            </p>
          </div>
          <div>
            <h3>Vision:</h3>
            <p>
              Our vision is to empower society at large to achieve financial independence
              through accessible, reliable, and personalized financial support and education.
            </p>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="about-section1" id="about" ref={aboutMeRef}>
        <div className="about-container1">
          <div className="about-image-wrapper1">
            <img src={profileImg} alt="Mr. Prafful Jain" className="about-image" />
          </div>
          <div className="about-text1">
            <p className="about-subtitle1">~ About Me</p>
            <h2>Who is <span className="highlight">Mr. Prafful Jain?</span></h2>
            <p>
              He is the founder of Medal Investments and has achieved excellent results for both his clients and himself
              through his exceptional knowledge in financial planning.
            </p>
            <div className="about-stats1">
              <div className="stat1">
                <h3>200+</h3>
                <p>People Educated</p>
              </div>
              <div className="stat1">
                <h3>7+</h3>
                <p>Accounts Family</p>
                <p>managed</p>
              </div>
              <div className="stat1">
                <h3>50 Lakhs+</h3>
                <p>Total Invested</p>
              </div>
            </div>
             <button className="contact-now1" onClick={() => window.open('https://wa.me/918277608357', '_blank')}>
              Contact Now
            </button>
          </div>
        </div>
      </section>

      {/* From Founder */}
      <div className="founder-message" ref={founderRef}>
        <h3>From the Founder:</h3>
        <p>
          "We believe in a better future through finance. Everyone should have the opportunity to understand and control
          their financial destiny. That belief is the heart of everything we do."
        </p>
      </div>
      <footer className="footer">
        <p>© 2025 Medal Investments. All rights reserved.</p>
        <p className="disclaimer">Disclaimer: Disclaimer: Mutual Fund investments are subject to market risks, read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes. The Mutual Fund is not guaranteeing or assuring any dividend under any of the schemes and the same is subject to the availability and adequacy of distributable surplus. Investors are requested to review the prospectus carefully and obtain expert professional advice with regard to specific legal, tax and financial implications of the investment/participation in the scheme.</p>
      </footer>
    </div>
  );
};

export default About;
