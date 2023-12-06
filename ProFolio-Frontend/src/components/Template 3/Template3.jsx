import { MainBody } from "./MainBody";
import NavBar from "./NavBar.jsx";
import '../../styles/custom.scss';
import '../../styles/stars.css';
import '../../styles/Template3.css';
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export function Template3({ userData }) {
    return (
        <div className="template-3-container">
            <NavBar userData={userData} />
            <MainBody userData={userData} />
            <AboutMe userData={userData} />
            {
                userData.educationList.length != 0 && (
                    <Education educationList={userData.educationList} />
                )
            }
            {
                userData.workExperienceList.length != 0 && (
                    <Experience workExperienceList={userData.workExperienceList} />
                )
            }
            {userData.projects.length != 0 && (
                <Projects projects={userData.projects} />
            )}
            {userData.skills.length != 0 && (
                <Skills skills={userData.skills} />
            )}
            <footer className="mt-auto py-5 text-center ">
                <Container>
                    <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
                    <Link rel="noopener" to="/"> <span className="badge bg-dark">
                            Profolio
                    </span>
                    </Link>{" "}
                    using <i className="fab fa-react" />
                </Container>
            </footer>
        </div>
    );
}