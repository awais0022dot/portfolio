import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Contact.css';
import contactImg from '../assets/contact_illustration.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in <span>Touch</span></h2>
      
      <div className="contact-container">
        <div className="contact-illustration">
          <img src={contactImg} alt="Contact Illustration" />
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="input-group">
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            
            <div className="input-group">
              <input type="email" id="email" placeholder="Email Address" required />
            </div>
            
            <div className="input-group">
              <textarea id="message" placeholder="Type your Message" required rows="4"></textarea>
            </div>
            
            <button type="submit" className="btn submit-btn">
              Send <FaPaperPlane className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
