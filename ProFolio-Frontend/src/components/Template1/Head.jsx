import { defaultAvatarUrl } from '../Constants.jsx';
import ParticleBackground from './ParticleBackground.jsx';
import icons from "./icons.jsx";
import Typewriter from 'typewriter-effect';

export default function Head({ userData }) {

    let imageUrl = `${defaultAvatarUrl}`;

    if (userData.mediaList.length > 0) {
        imageUrl = userData.mediaList[0].url;
    }

    let linkedInUrl = '';
    let githubUrl = '';
    let instagramUrl = '';
    let facebookUrl='';
    let twitterUrl='';

    for (let i = 0; i < userData.externalLinks.length; i++) {
        if (userData.externalLinks[i].name.toLowerCase() == "Linkedin") {
            linkedInUrl = userData.externalLinks[i].url;
        }
        else if (userData.externalLinks[i].name.toLowerCase() == "Github") {
            githubUrl = userData.externalLinks[i].url;
        }
        else if (userData.externalLinks[i].name.toLowerCase() == "Instagram") {
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
        <section className="light head-back grad-orange" >
            <div className="stuff">
                <ParticleBackground className="particle-background" />
                <div className="stuff-head">
                    <p>
                        <Typewriter
                            options={{
                                strings: [`Hello I am ${userData.name}`, 'Welcome to my Portfolio'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                </div>
                <div className="about inline centre">
                    <div className="photo">
                        <div className="pro-pic"><img src={imageUrl} alt="profile-image" /></div>
                    </div>
                    <div className="writing">
                        <h1 className="main-title">{userData.name}</h1>
                        {/* <h3>{userData.title}</h3> */}
                        <br/>
                        {userData.about}
                    </div>
                    <div className="side">
                        {githubUrl && <div className="social-link"><a href={githubUrl} className="git-link" target="_blank" rel="noreferrer noopener">{icons["git2"]}</a></div>}
                        {linkedInUrl && <div className="social-link"><a href={linkedInUrl} className="git-link" target="_blank" rel="noreferrer noopener">{icons["li2"]}</a></div>}
                        {instagramUrl && <div className="social-link"><a href={instagramUrl} className="git-link" target="_blank" rel="noreferrer noopener">{icons["insta2"]}</a></div>}
                        {facebookUrl && <div className="social-link"><a href={facebookUrl} className="git-link" target="_blank" rel="noreferrer noopener">{icons["facebook2"]}</a></div>}
                        {twitterUrl && <div className="social-link"><a href={twitterUrl} className="git-link" target="_blank" rel="noreferrer noopener">{icons["twitter2"]}</a></div>}
                    </div>
                </div>
            </div>
        </section>
    );
}