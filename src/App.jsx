import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Just in case, though we rely on index.css

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Only render the active tab's component */}
      <div className="tab-content" style={{ minHeight: '100vh', paddingTop: '80px' }}>
        {activeTab === 'home' && <Hero />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'research' && <Research />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'blogs' && <Blogs />}
      </div>

      {activeTab === 'home' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
