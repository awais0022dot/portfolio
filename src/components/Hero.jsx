import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaTwitter, FaDribbble, FaLinkedinIn, FaStackOverflow, FaKaggle, FaInstagram, FaGithub } from 'react-icons/fa';
import './Hero.css';
import avatarImg from '../assets/profile_avatar.jpg'; // Make sure this is the right path

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);

  return (
    <section id="home" className="hero-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#00ffcc", "#ff0066", "#ffff00", "#0066ff", "#a855f7"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 6 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="hero-content">
        <h1 className="greeting">
          Hi <span className="wave">👋</span>, I'm <strong>Muhammad Awais</strong>
        </h1>
        <div className="avatar-container">
          <img src={avatarImg} alt="Muhammad Awais" className="avatar" />
        </div>
        <h2 className="subtitle">
          I am a <span className="typing">Junior Front End Developer.</span>
        </h2>
        
        <div className="social-links">
          <a href="#" className="social-icon twitter"><FaTwitter /></a>
          <a href="#" className="social-icon dribbble"><FaDribbble /></a>
          <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
          <a href="#" className="social-icon stackoverflow"><FaStackOverflow /></a>
          <a href="#" className="social-icon kaggle"><FaKaggle /></a>
          <a href="#" className="social-icon instagram"><FaInstagram /></a>
          <a href="#" className="social-icon github"><FaGithub /></a>
        </div>

        <div className="hero-cta">
          <a href="https://example.com/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn cta-btn">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
