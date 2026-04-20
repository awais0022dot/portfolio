import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const colors = ['#ff0066', '#00ffcc', '#0066ff', '#a855f7', '#ff9900', '#00cc66', '#ff3366', '#33ccff'];

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Pick a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const root = document.documentElement;
    if (newIsDark) {
      root.setAttribute('data-theme', 'dark');
      root.style.setProperty('--bg-color', '#121212');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#a0a0a0');
      root.style.setProperty('--nav-bg', 'rgba(18, 18, 18, 0.8)');
      root.style.setProperty('--nav-border', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--research-bg', `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop')`);
      root.style.setProperty('--research-overlay', 'linear-gradient(rgba(13, 17, 23, 0.85), rgba(13, 17, 23, 0.95))');
    } else {
      root.setAttribute('data-theme', 'light');
      root.style.setProperty('--bg-color', '#f8f9fa');
      root.style.setProperty('--text-primary', '#121212');
      root.style.setProperty('--text-secondary', '#495057');
      root.style.setProperty('--nav-bg', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--nav-border', 'rgba(0, 0, 0, 0.05)');
      root.style.setProperty('--research-bg', `url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop')`);
      root.style.setProperty('--research-overlay', 'linear-gradient(rgba(248, 249, 250, 0.85), rgba(248, 249, 250, 0.95))');
    }
    
    root.style.setProperty('--accent-color', randomColor);
    root.style.setProperty('--accent-hover', randomColor); // Simplify hover for now
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // For background change
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
    window.scrollTo(0, 0); // Scroll to top when changing tabs
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Muhammad Awais</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home" className={activeTab === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home')}>Home</a>
        </li>
        <li>
          <a href="#experience" className={activeTab === 'experience' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
        </li>
        <li>
          <a href="#projects" className={activeTab === 'projects' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
        </li>
        <li>
          <a href="#research" className={activeTab === 'research' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'research')}>Research</a>
        </li>
        <li>
          <a href="#education" className={activeTab === 'education' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'education')}>Education</a>
        </li>
        <li>
          <a href="#blogs" className={activeTab === 'blogs' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'blogs')}>Blogs</a>
        </li>
      </ul>
      <div className="navbar-theme-toggle">
        <div className={`toggle-switch ${!isDark ? 'light-mode' : ''}`} onClick={toggleTheme}>
          <div className="toggle-knob"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
