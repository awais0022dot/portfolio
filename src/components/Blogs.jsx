import React from 'react';
import './Blogs.css';
import { FaArrowRight } from 'react-icons/fa';

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: 'My Journey: Learning React in 2025',
      excerpt: 'Reflecting on the challenges and breakthroughs of learning modern React, including concurrent features, server components, and why hooks changed everything for me.',
      category: 'React.js',
      date: 'Oct 12, 2025',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'Why Tailwind CSS is a Game Changer for UI',
      excerpt: 'How utility-first CSS transformed my workflow. Building faster, keeping CSS files small, and ensuring consistent design systems without leaving the HTML file.',
      category: 'CSS & Design',
      date: 'Aug 24, 2025',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'Understanding JavaScript Closures',
      excerpt: 'Closures used to be the most confusing part of JS for me. In this post, I break it down into a simple, easy-to-understand analogy that finally made it click.',
      category: 'JavaScript',
      date: 'May 05, 2025',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 4,
      title: 'Mastering Next.js App Router',
      excerpt: 'Exploring the power of Server Components, nested layouts, and the new data fetching paradigms that make Next.js the top choice for modern web apps.',
      category: 'Next.js',
      date: 'Jan 15, 2026',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=2070&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 5,
      title: 'TypeScript: Beyond the Basics',
      excerpt: 'Why static typing is essential for developer productivity. From interfaces and types to generics and advanced utility types that make code bulletproof.',
      category: 'TypeScript',
      date: 'Feb 10, 2026',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2028&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 6,
      title: 'State Management in 2026',
      excerpt: 'Comparing Zustand, Redux Toolkit, and React Context. Which one should you choose for your next project? A deep dive into performance and developer experience.',
      category: 'State Management',
      date: 'Mar 22, 2026',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop',
      link: '#'
    }
  ];

  return (
    <section id="blogs" className="blogs-section">
      <div className="glow-shape-blog1"></div>
      <div className="glow-shape-blog2"></div>
      
      <h2 className="blogs-title">Latest Articles</h2>
      
      <div className="blogs-grid">
        {blogsData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image-wrapper">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>
            
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              
              <h3 className="blog-post-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              
              <a href={blog.link} className="read-more-link">
                Read Article <FaArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
