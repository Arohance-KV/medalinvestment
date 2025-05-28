import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactUs.css';
import { Link } from 'react-router-dom';
import qrCodeImage from '../assets/whatsapp.png';

const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )

    .then(() => {
      setSuccessMessage('Message sent successfully!');
      form.current.reset();

      setTimeout(() => setSuccessMessage(''), 4000); // Hide after 4s
    })
    .catch((error) => {
      setSuccessMessage('Failed to send message. Try again.');
    });
  };
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>CONTACT US</h1>
        <p><Link to="/" className="plain-link">Home</Link> &gt; Contact Us</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
          <h2><span className='highlight'>Get in Touch</span> With Us</h2>
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
             <input type="text" name="from_name" placeholder="Your Name" required />
             <input type="email" name="from_email" placeholder="Your Email Address" required />
             <input type="text" name="contact_number" placeholder="Your Contact Number" required />
             <textarea name="message" placeholder="Your Message" rows="5" required />
             <button type="submit">Submit</button>
            </form>
            {successMessage && <p className="success-message">✅{successMessage}</p>}
      </div>

      {/* WhatsApp Section */}
      <div className="whatsapp-section">
        <h3>Chat with us on <span className='highlight'>WhatsApp</span></h3>
        <img src={qrCodeImage} alt="WhatsApp QR" className="qr-code" />
        <p className="whatsapp-number">+91 82776 08357</p>
      </div>

      {/* Address Section */}
      <div className="address-section">
        <h3>Our Address</h3>
        <p>Medal Investments Pvt. Ltd.<br />#238 Old Tharagupete, Bengaluru</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Medal Investments. All rights reserved.</p>
        <p className="disclaimer">Disclaimer: Mutual Fund investments are subject to market risks...</p>
      </footer>
    </div>
  );
};

export default ContactUs;
