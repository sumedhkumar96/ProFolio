import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { Jumbotron } from './Jumbotron';

export function MainBody({ userData }) {

    function scrollToAbout(event) {
        event.preventDefault();
        const aboutSection = document.getElementById('aboutme');
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    let linkedInUrl = '';
    let githubUrl = '';
    let instagramUrl = '';
    let facebookUrl='';
    let twitterUrl='';

    for (let i = 0; i < userData.externalLinks.length; i++) {
        if (userData.externalLinks[i].name.toLowerCase() == "linkedin") {
            linkedInUrl = userData.externalLinks[i].url;
        }
        else if (userData.externalLinks[i].name.toLowerCase() == "github") {
            githubUrl = userData.externalLinks[i].url;
        }
        else if (userData.externalLinks[i].name.toLowerCase() == "instagram") {
            instagramUrl = userData.externalLinks[i].url;
        }
        else if (userData.externalLinks[i].name.toLowerCase() == "facebook") {
            facebookUrl = userData.externalLinks[i].url;
        }
        else if (userData.externalLinks[i].name.toLowerCase() == "twitter") {
            twitterUrl = userData.externalLinks[i].url;
        }
    }

    return (
        <Jumbotron fluid id="home" style={{ background: `linear-gradient(136deg, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1)`, backgroundSize: "1200% 1200%" }} className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
            <div id="stars"></div>
            <Container className="text-center">
                <h1 className="display-1">{userData.name}</h1>
                <div className="lead typist">
                    <Typewriter options={{ strings: ["Welcome to my portfolio"], autoStart: true, loop: true }} />
                </div>
                <div className="p-5">
                    {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer noopener"><i className={`fab fa-github fa-3x socialicons`} /></a>}
                    {facebookUrl && <a href={facebookUrl} target="_blank" rel="noreferrer noopener"><i className={`fab fa-facebook fa-3x socialicons`} /></a>}
                    {instagramUrl && <a href={instagramUrl} target="_blank" rel="noreferrer noopener"><i className={`fab fa-instagram fa-3x socialicons`} /></a>}
                    {linkedInUrl && <a href={linkedInUrl} target="_blank" rel="noreferrer noopener"><i className={`fab fa-linkedin fa-3x socialicons`} /></a>}
                    {twitterUrl && <a href={twitterUrl} target="_blank" rel="noreferrer noopener"><i className={`fab fa-twitter fa-3x socialicons`} /></a>}
                </div>
                <a className="btn btn-outline-light btn-lg " href="#" onClick={scrollToAbout} role="button" aria-label="Learn more about me">
                    More about me
                </a>
            </Container>
        </Jumbotron>
    );
}