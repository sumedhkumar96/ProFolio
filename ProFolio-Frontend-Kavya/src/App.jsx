import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './styles/App.css';

/**
 * The App component serves as the main layout of the application.
 *
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  /**
   * Scrolls to the "About Me" section smoothly.
   */
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-me');
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
      <div className="app">
        {/* Top navigation and profile icon */}
        <div className="top-container">
          <img src="/PROFOLIOIcon.png" className="app-profile" alt="profile" />
          <nav className="app-nav">
            <ul>
              <li><a href="#!" onClick={scrollToAbout}>About</a></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
        {/* Main content including header and about section */}
        <div className="main-content">
          <header className="app-header">
            <div className="left-container">
              <div className="profile-title"> 
                <img src="/PROFOLIOTitle.PNG" className="profolio-title" alt="profolio-title" />
              </div>
              {/* Login and Signup buttons */}
              <div className="buttons-container">
                <Link to="/login">
                  <button className="login-button">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="signup-button">Signup</button>
                </Link>
              </div>
            </div>
            <div className="right-container">
              <div className="profile-container"> 
                <img src="/profile.png" className="profile" alt="profile photo" />
              </div>
            </div>
          </header>
          <main className="bottom-full-width">
            <div className="about-me-container">
              <div  id="about-me" className="about-me">
                <div className="about-me-text">
                  <h1 className="about-me-header">
                    <span className="text-gradient d-inline">PROFOLIO</span>
                  </h1>
                  <p className="about-profolio-tag">ASSEMBLE. EXHIBIT. IMPRESS.</p>
                  <p className="text-muted">
                    PROFOLIO helps you build visually appealing and highly customizable portfolio 
                    and share it online in order to showcase yourself to the world.
                    Showcase your work, achievements, experiences, and skills.
                  </p>
                </div>
              </div>
            </div>
          </main> 
        </div>
        {/* Footer with copyright notice and navigation */}
        <div className="bottom-container">
          <footer className="app-footer">
            <div className="copyright">
              Copyright &copy; 2023 by PROFOLIO. All rights reserved.
            </div>
            <nav className="bottom-nav">
              <ul>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>
  );
}

export default App;
