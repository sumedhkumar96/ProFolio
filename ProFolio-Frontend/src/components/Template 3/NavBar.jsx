import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

export default function NavBar({ userData }) {

    const [fix, setFix] = useState(false);

    function setFixed(){
        if (window.scrollY>=300){
            setFix(true);
        }
        else{
            setFix(false);
        }
    }

    window.addEventListener("scroll",setFixed);

    function scrollToSection(id) {
        const targetSection = document.getElementById(id);
        console.log("hi");
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function NavLink({ section, children }) {
        return (
            <a onClick={() => scrollToSection(section)}>
            <span className={`nav-item lead`}>
                {children}
            </span>
            </a>
        );
    }

    return (
        <Navbar
            className={`px-3 fixed-top ${fix ? "navbar-white" : "navbar-transparent"}`}
            expand="lg"
        >
            <Navbar.Brand className="navbar-brand" href="/#home">
                {`<${userData.name} />`}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                {userData.about != "" && (
                        <NavLink section="About">
                            About
                        </NavLink>
                    )}
                    {userData.workExperienceList.length!=0 && (
                        <NavLink section="Experience">
                            Experience
                        </NavLink>
                    )}
                    {userData.projects.length!=0 && (
                        <NavLink section="Projects">
                            Projects
                        </NavLink>
                    )}
                    {userData.skills.length != 0 && (
                        <NavLink section="Skills">
                            Skills
                        </NavLink>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
