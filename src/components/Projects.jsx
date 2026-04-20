import React from 'react';
import './Projects.css';
import projectEcommerce from '../assets/project_ecommerce.png';
import projectFintech from '../assets/project_fintech.png';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Modern E-Commerce Dashboard',
      description: 'A fully responsive and dynamic e-commerce dashboard with sleek data visualization, order management, and a stunning dark mode UI. Built to provide a premium user experience for store owners.',
      image: projectEcommerce,
      tech: ['React', 'Chart.js', 'Tailwind CSS', 'Redux'],
      link: '#'
    },
    {
      id: 2,
      title: 'Fintech Web3 Platform',
      description: 'A cutting-edge landing page for a Web3 cryptocurrency platform. Features glassmorphism design, neon accents, and smooth scroll animations to create an immersive fintech experience.',
      image: projectFintech,
      tech: ['Next.js', 'Framer Motion', 'CSS Modules', 'Web3.js'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="glow-shape-1"></div>
      <div className="glow-shape-2"></div>
      
      <h2 className="projects-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a href={project.link} className="project-link-btn">
                  View Project <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
            
            <div className="project-info">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((techItem, index) => (
                  <span className="tech-tag" key={index}>{techItem}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
