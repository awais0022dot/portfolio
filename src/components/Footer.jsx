import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="#" className="social-icon twitter"><FaTwitter /></a>
        <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
        <a href="#" className="social-icon instagram"><FaInstagram /></a>
        <a href="#" className="social-icon github"><FaGithub /></a>
      </div>
      
      <button className="back-to-top" onClick={scrollToTop}>
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
