import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="glow-shape-ed1"></div>
      <div className="glow-shape-ed2"></div>
      
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        
        <div className="education-card">
          <div className="education-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Professional IT Education" 
              className="education-image" 
            />
            <div className="education-image-overlay"></div>
          </div>
          
          <div className="education-details">
            <h3 className="education-degree">BS Information Technology (BS IT)</h3>
            <h4 className="education-institution">
              <FaGraduationCap /> University
            </h4>
            <div className="education-duration">2020 - 2024</div>
            
            <p className="education-description">
              Graduated with a Bachelor of Science in Information Technology. 
              Gained a strong foundation in software engineering, web development, database management, and computer networks. 
              Successfully completed various academic projects focusing on modern web technologies.
            </p>
            
            <div className="course-highlights">
              <span className="highlight-tag">Web Development</span>
              <span className="highlight-tag">Software Engineering</span>
              <span className="highlight-tag">Data Structures</span>
              <span className="highlight-tag">Database Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
