import React, { useState } from 'react';
import './Research.css';
import { FaSearch, FaRobot, FaSpinner } from 'react-icons/fa';

const Research = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    setAnswer(null);

    try {
      // Free Wikipedia API to get a summary of whatever the user searches
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&exchars=500&exintro&explaintext&format=json&titles=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];

      if (pageId === '-1') {
        // No result found
        setAnswer({
          title: 'No exact match found',
          content: `I couldn't find a direct answer for "${searchTerm}" in my current knowledge base. However, as a developer, I am always researching and learning new technologies every day!`,
          found: false
        });
      } else {
        // Result found
        setAnswer({
          title: pages[pageId].title,
          content: pages[pageId].extract,
          found: true
        });
      }
    } catch (error) {
      setAnswer({
        title: 'Network Error',
        content: 'There was a problem fetching the answer. Please try again later.',
        found: false
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="research" className="research-section">
      <div className="glow-spot-1"></div>
      <div className="glow-spot-2"></div>
      
      <h2 className="research-title">Smart Research Hub</h2>
      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
        Powered by Wikipedia API. Ask me anything to get a quick summary!
      </p>
      
      <div className="research-container">
        {/* Search Bar */}
        <div className="search-container">
          <form className="search-wrapper" onSubmit={handleSearch}>
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Type any topic (e.g., Quantum Computing, React.js) and press Enter..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-submit-btn">
              {isLoading ? <FaSpinner className="spinner" /> : 'Search'}
            </button>
          </form>
        </div>

        {/* Answer Box */}
        <div className="answer-container">
          {isLoading && (
            <div className="loading-state">
              <FaRobot className="robot-icon pulsing" />
              <p>Researching and analyzing data...</p>
            </div>
          )}

          {!isLoading && hasSearched && answer && (
            <div className={`answer-card ${answer.found ? 'found' : 'not-found'}`}>
              <div className="answer-header">
                <FaRobot className="robot-icon" />
                <h3 className="answer-title">{answer.title}</h3>
              </div>
              <p className="answer-content">{answer.content}</p>
              {answer.found && (
                <a 
                  href={`https://en.wikipedia.org/wiki/${encodeURIComponent(answer.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="read-more-btn"
                >
                  Read full article on Wikipedia
                </a>
              )}
            </div>
          )}

          {!hasSearched && (
            <div className="initial-state">
              <div className="example-searches">
                <span>Try searching for:</span>
                <button type="button" onClick={() => setSearchTerm('Artificial Intelligence')} className="example-tag">Artificial Intelligence</button>
                <button type="button" onClick={() => setSearchTerm('Web3')} className="example-tag">Web3</button>
                <button type="button" onClick={() => setSearchTerm('Black Hole')} className="example-tag">Black Hole</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Research;
