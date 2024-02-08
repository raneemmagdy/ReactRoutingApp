import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [showLinks, setShowLinks] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${style.secColor} p-4 ${isScrolled ? style.fixedNavbar : ''}`}>
      <div className="container">
        <Link className={`navbar-brand text-white fw-bolder `} to='/' onClick={() => handleLinkClick('')}>
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleLinks} 
          aria-expanded={showLinks ? 'true' : 'false'} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link fw-bolder rounded-2 text-white ${activeLink === 'about' ? style.btnActive : ''}`}
                to='/about'
                onClick={() => { handleLinkClick('about'); toggleLinks(); }} 
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bolder rounded-2 text-white ${activeLink === 'portfolio' ? style.btnActive : ''}`}
                to='/portfolio'
                onClick={() => { handleLinkClick('portfolio'); toggleLinks(); }} 
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bolder rounded-2 text-white ${activeLink === 'contact' ? style.btnActive : ''}`}
                to='/contact'
                onClick={() => { handleLinkClick('contact'); toggleLinks(); }} 
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
