import Jumbotron from './Helper_Components.jsx';
import { Container } from 'react-bootstrap';

export function MainBody({userData}) {

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

    return (
        <Jumbotron fluid id="home" style={{ background: `linear-gradient(136deg,"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1")`, backgroundSize: "1200% 1200%" }} className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
            <div id="stars"></div>
            <Container className="text-center">
                <h1 className="display-1">{userData.name}</h1>
                <Typewriter options={{ strings: [userData.about], autoStart: true, loop: true, }}/>
                {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer noopener"><i className={`fab fa-github fa-3x socialicons`} /></a>}
                {linkedInUrl && <a href={linkedInUrl} target="_blank" rel="noreferrer noopener"><i className={`fab fa-linkedin fa-3x socialicons`} /></a>}
                {instagramUrl && <a href={instagramUrl} target="_blank" rel="noreferrer noopener"><i className={`fab fa-instagram fa-3x socialicons`} /></a>}
                <a className="btn btn-outline-light btn-lg " href="#aboutme" role="button" aria-label="Learn more about me">
                    More about me
                </a>
            </Container>
        </Jumbotron>
    );
}