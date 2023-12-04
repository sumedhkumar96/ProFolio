import ParticleBackground from './ParticleBackground.jsx';
import icons from "./icons.jsx";
import Typewriter from 'typewriter-effect';


export default function Head({ userData }) {

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
                                strings: [`Hello I am ${userData.name}`],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                </div>
                <div className="about inline centre">
                    <div className="photo">
                        <div className="pro-pic"><img src="data:image/jpeg;base64,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" alt="profile-image" /></div>
                    </div>
                    <div className="writing">
                        <h1 className="main-title">{userData.name}</h1>
                        <h1>{userData.title}</h1>
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