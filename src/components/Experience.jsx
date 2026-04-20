import React from 'react';
import './Experience.css';
import codingSetupImg from '../assets/coding_setup.png';
import { FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="glow-circle-1"></div>
      <div className="glow-circle-2"></div>
      
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        
        <div className="experience-content">
          <div className="experience-image-wrapper">
            <img 
              src={codingSetupImg} 
              alt="Professional Coding Setup" 
              className="experience-image" 
            />
          </div>
          
          <div className="experience-details">
            <h3 className="experience-role">Junior Front End Developer</h3>
            <h4 className="experience-company">
              <FaLaptopCode /> Freelance & Personal Projects
            </h4>
            <div className="experience-duration">Jan 2023 - Present</div>
            
            <p className="experience-description">
              Passionate about crafting dynamic, highly responsive, and user-friendly web experiences. 
              I specialize in building visually stunning interfaces using modern web technologies. 
              My focus is on creating seamless animations, optimizing performance, and delivering clean, maintainable code.
            </p>
            
            <div className="skills-tags">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Responsive Web Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
