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
        <section className="light head-back grad-orange" >
            <div className="stuff">
                <ParticleBackground canvasClassName="example" />
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
                        {/* <h3>{userData.title}</h3> */}
                        <h1 className="main-title">{userData.name}</h1>
                        <br/>
                        {userData.about}
                    </div>
                    <div className="side">
                        {githubUrl && <div className="social-link"><a href={githubUrl} className="git-link" target="_blank" rel="noreferrer noopener">{icons["git2"]}</a></div>}
                        {linkedInUrl && <div className="social-link"><a href={linkedInUrl} className="git-link" target="_blank" rel="noreferrer noopener">{icons["li2"]}</a></div>}
                        {instagramUrl && <div className="social-link"><a href={instagramUrl} className="git-link" target="_blank" rel="noreferrer noopener">{icons["insta2"]}</a></div>}
                    </div>
                </div>
            </div>
        </section>
    );
}