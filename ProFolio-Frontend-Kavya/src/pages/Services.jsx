// Importing React and necessary components from react-router-dom and style sheets.
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Services.css'; 
import '../styles/App.css'; 

// Defining a functional component named 'Services'.
const Services = () => {
  // The component returns JSX for rendering.
  return (
    <div className="services-container">
      {/* Displaying an image with a class for styling. */}
      <a href="/">
       <img src="/PROFOLIOIcon.png" className="app-profile" alt="profile" />
      </a>
      {/* Header for the services section. */}
      <h1>Our Services</h1>
      <div className="services-list">
        {/* First service offering */}
        <div className="service">
          <h2>Custom Portfolio Design</h2>
          <p>"Ready to make your digital mark? Let's craft a website that's as unique and dynamic as you are! Imagine a digital canvas that mirrors your brand's personality, splashed with colors of creativity and dashes of style. Our team is like a group of web wizards, conjuring a site that not only looks stunning on every device but also dances to the rhythm of responsiveness. Your brand's new online home will be a blend of professional elegance and playful charm, ensuring that every click brings a smile and a nod of appreciation. Get ready to wow the web world!" 🌐🎨💼✨</p>
        </div>

        {/* Placeholder for another service offering */}
        <div className="service">
          <h2>Loading....</h2>
          <p>Hey there! Just a heads-up: We're currently in the lab, tinkering and tweaking away to make our services even more awesome for you. Think of us as busy little tech elves, working round the clock to sprinkle some extra magic on your experience. Stay tuned for the fun upgrades coming your way!" 🌟✨</p>
        </div>

      </div>
        {/* Footer section of the page with copyright notice and navigation links. */}
      <div className="services-bottom-container">
        <footer className="services-app-footer">
          <div className="copyright">
            Copyright &copy; 2023 by PROFOLIO. All rights reserved.
          </div>
          <nav className="services-bottom-nav">
            <ul>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
};

// Exporting the Services component for use in other parts of the application.
export default Services;
