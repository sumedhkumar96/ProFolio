// import {Data} from './data/Head.js';

import './style.css';

import ParticleBackground from './ParticleBackground.jsx';


import icons from "./icons.jsx";
function Head({Data}){
    return(
            
        
        <section className="light head-back grad-orange" >
            <ParticleBackground canvasClassName="example"/>
            <div className="stuff">
            <div className="stuff-head">
            <p>
                

            </p>
            </div>

                
            
                <div className="about inline centre">
                    <div className="photo">
                    <div className="pro-pic"><img src={Data[0].photo} alt="" /></div>
                    </div>
                    <div className="writing">
                        <h1 className="main-title">{Data[0].name}</h1>
                        <h1>{Data[0]['one-line']}</h1>
                        {Data[0].about}
                    </div>    
                    <div className="side">
                    <div className="social-link"><a href={Data[0].github} className="git-link" target="_blank" rel="noreferrer noopener">{icons["git2"]}</a></div>
                    <div className="social-link"><a href={Data[0].li} className="git-link" target="_blank" rel="noreferrer noopener">{icons["li2"]}</a></div>
                    <div className="social-link"><a href={Data[0].insta} className="git-link" target="_blank" rel="noreferrer noopener">{icons["insta2"]}</a></div>
                    </div>
                </div>
                
            </div>
    
            
        </section>
        
    );
}

export default Head;