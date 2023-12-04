import { Link } from "react-router-dom";
import '../../styles/Template2.css';
import { Template2Projects } from "./Projects";


export function Template2({ userData }) {


    let linkedInUrl = '';
    let githubUrl = '';
    let instagramUrl = '';
    for (let i = 0; i < userData.externalLinks.length; i++) {
        if (userData.externalLinks[i].name == "Linkedin") {
            linkedInUrl = userData.externalLinks[i].url;
        }
        else if (userData.externalLinks[i].name == "Github") {
            githubUrl = userData.externalLinks[i].url;
        }
        else if (userData.externalLinks[i].name == "Instagram") {
            instagramUrl = userData.externalLinks[i].url;
        }
    }

    return (<div className="template-2-container">
        <header>
            <nav id="navbar">
                <ul>
                    <li><a href="#welcome-section">About</a></li>
                    <li><a href="#projects">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section id="welcome-section">
                <h1>Hey I am {userData.name}</h1>
                <p>{userData.about}</p>
            </section>

            <Template2Projects projects={userData.projects} />

            <section id="contact">
                <h1>Let's work together...</h1>
                <p>How do you take your coffee?</p>
                <div className="social-icons">
                    {githubUrl && <a href="https://github.com/adityar224" target="_blank" rel="noopener"><i
                        className="fa-brands fa-github"></i>
                        GitHub</a>}
                    
                    {linkedInUrl && <a href="https://www.linkedin.com/in/aditya-r-2496941ba/" target="_blank" rel="noopener"><i
                        className="fa-brands fa-linkedin"></i>
                        LinkedIn</a>}
                    <a href={`mailto:${userData.email}`}><i className="fa-solid fa-envelope"></i>
                        Mail</a>
                    
                    {userData.phone && <a href={`tel:${userData.phone}`}><i className="fa-solid fa-mobile-screen-button"></i>
                        Call</a>}
                </div>
            </section>
        </main>
        <footer>
            © Created by <Link id="profile-link" to="/">Profolio</Link>
        </footer>
    </div>);
}