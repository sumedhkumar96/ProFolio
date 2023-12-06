import { Link, useOutletContext } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import user_icon from '../assets/images/usericon.png';
import '../styles/MainContent.css';
import { SelectTemplate } from "../components/SelectTemplate";
import UserDetails from "./UserDetails";

export function HomePage({ logOut }) {
    const [user, setUser] = useOutletContext();
    const [isUserEditPage, setIsUserEditPage] = useState(false);
    
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="home-page gradient-main">
        <header className="header">
                <div className="main-header">
                    <img src="/alt-logo.png" alt="Title" className="title-image" />
                </div>
                <div className="user-profile" onClick={toggleDropdown} ref={dropdownRef}>
                    <img src={user_icon} alt="User Profile" className="clickable" />
                    {showDropdown && (
                        <div className="dropdown">
                            <ul>
                                <li><Link onClick={()=>setIsUserEditPage(!isUserEditPage)}>{(isUserEditPage)?"Change Template":"Edit Details"}</Link></li>
                                <li><Link to={`/user/${user.id}`}>My Portfolio</Link></li>
                                <li><Link onClick={logOut}>Log Out</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>
        {isUserEditPage?<UserDetails />:<SelectTemplate setIsUserEditPage={setIsUserEditPage} />}
        </div>
    );
}