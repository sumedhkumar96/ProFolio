import React, { useState, useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/MainContent.css'; 

/**
 * MainContent Component
 * Renders the main content of the application, including the header with a title image and a user profile dropdown.
 * Users can toggle the dropdown to access settings, change password, and view their profile.
 * The component also displays a section with templates.
 *
 * @returns {JSX.Element} The rendered main content component.
 */
const MainContent = () => {
  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);
  // Ref to store a reference to the dropdown element
  const dropdownRef = useRef(null); 

  /**
   * Toggles the visibility of the user profile dropdown.
   */
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  /**
   * Handles clicks outside the dropdown to close it.
   * @param {Event} event - The click event.
   */
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  // Add event listener on mount and clean up on unmount
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /**
   * Renders the MainContent component.
   * @returns {JSX.Element} The rendered MainContent component.
   */
  return (
    <div className="main-container">
      {/* Header section */}
      <header className="header">
        <div className="main-header">
          {/* Title image */}
          <img src="/PROFOLIOTitle.PNG" alt="Title" className="title-image" />
        </div>
        {/* User profile section */}
        <div className="user-profile" onClick={toggleDropdown} ref={dropdownRef}>
          {/* User profile image */}
          <img src="usericon.png" alt="User Profile" className="clickable" />
          {/* Dropdown content */}
          {showDropdown && (
            <div className="dropdown">
              {/* Dropdown options */}
              <ul>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/change-password">Change Password</Link></li>
                <li><Link to="/userdetails">My Profile</Link></li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Templates section */}
      <section className="templates-section">
        {/* Template elements */}
        <div className="template">
          <a href="/template1">
            <img src="/Template_6.jpeg" alt="Template 1" />
          </a>
        </div>
        <div className="template">
          <a href="link_to_template2">
            <img src="/Template_7.jpeg" alt="Template 2" />
          </a>
        </div>
        <div className="template">
          <a href="link_to_template3">
            <img src="/Template_5.jpeg" alt="Template 3" />
          </a>
        </div>
        <div className="template">
          <a href="link_to_template4">
            <img src="/Template_4.jpeg" alt="Template 4" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
