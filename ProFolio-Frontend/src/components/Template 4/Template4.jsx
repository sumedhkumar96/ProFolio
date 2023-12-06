import '../../styles/Templates4.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { defaultAvatarUrl } from '../Constants.jsx';
import Typewriter from 'typewriter-effect';


export default function Template4({ userData }) {
    let imageUrl = `${defaultAvatarUrl}`;

    if (userData.mediaList.length > 0) {
        imageUrl = userData.mediaList[0].url;
    }

    if (userData.workExperienceList.length == 0) {
        return <></>;
    }

    if (userData.educationList.length == 0) {
        return <></>;
    }

    if (userData.projects.length == 0) {
        return <></>;
    }

    if (userData.certifications.length == 0) {
        return <></>;
    }

    if (userData.externalLinks.length === 0) {
        return <></>;
    }

    var settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        slide: '.card-space', 
        centerPadding: '10px',
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="user-profile-container">
            <div className="user-profile-header">
                <img src={imageUrl} alt="Profile" className="user-profile-photo" />
                <div className="user-profile-info">
                    <h2>About Me</h2>
                    <h5>{userData.title}</h5>
                    <h1>{userData.name}</h1>
                    <p>{userData.phone}</p>
                    <p>{userData.email}</p>
                    <p>{userData.about}</p>
                </div>
            </div>

            <section className="user-education">
                <h2>Education</h2>
                {
                    userData.educationList.map(entry => {
                        return (
                            <div className="padd" key={entry.institutionName}>
                                <div className="entry inline light-entry">
                                    <div className="details">
                                        <h4>{entry.institutionName}</h4>
                                        <p>
                                            {entry.description}
                                        </p>
                                        <div className="inline">
                                            <h5><label>From: </label> {entry.fromDate} <label>To: </label> {entry.toDate}&emsp;|&emsp;</h5>
                                            <h5><label>CGPA: </label> {entry.grade}</h5>

                                        </div>
                                        <h5>{entry.degreeName}</h5>
                                        <br/>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <section className="user-work-experience">
                <h2>Work Experience</h2>
                {
                    userData.workExperienceList.map(entry => {
                        return (
                            <div className="entry inline dark-entry" key={entry.organizationName}>
                                <div className="details">
                                    <h4>{entry.role}</h4>
                                    <div className="space-around">
                                        <div className="inline">
                                            <h5>{entry.organizationName}&emsp;|&emsp;</h5>
                                            <h5><label>From: </label> {entry.fromDate} <label>To: </label> {entry.toDate}  </h5>
                                        </div>
                                        <p>{entry.description}</p>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <section className="user-skills">
                <h2>Skills</h2>
                <div className="social-buttons">
                    {userData.skills && userData.skills.length > 0 ? (
                        userData.skills.map(entry => (
                            <button key={entry.name} className="social-button">
                                {entry.name}
                            </button>
                        ))
                    ) : (
                        <p>No skills available</p>
                    )}
                </div>
            </section>

            <section className="user-projects">
                <h2>Projects</h2>
                <Slider {...settings}>
                    {userData.projects && userData.projects.length > 0 ? (
                        userData.projects.map(entry => (
                            <div className="card-space" key={entry.name}>
                                <div className="card">
                                    <div className="card-top"></div>
                                    <div className="card-body">
                                        <h4>{entry.name}</h4>
                                        <h5>
                                        <label>From: </label> {entry.startDate} <br/> <label>To: </label> {entry.endDate}
                                        </h5>
                                        <p>{entry.decription}</p>
                                        <a href={entry.url} className="git-link" target="_blank" rel="noreferrer noopener">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No projects available</p>
                    )}
                </Slider>
            </section>

            <section className="social-links">
                <h2>Social Links</h2>
                <div className="social-buttons">
                    {userData.externalLinks && userData.externalLinks.length > 0 ? (
                        userData.externalLinks.map(entry => (
                            <button key={entry.name} onClick={() => {
                                console.log('Button clicked');
                                window.open(entry.url, "_blank")
                            }} className="social-button">
                                {entry.name}
                            </button>
                        ))
                    ) : (
                        <p>No social links available</p>
                    )}
                </div>
            </section>

            <section className="social-links">
                <h2>Certifications</h2>
                {userData.certifications && userData.certifications.length > 0 ? (
                    userData.certifications.map(entry => (
                        <div key={entry.name}>
                            <h4>{entry.name}</h4>
                            <h5>Issued by {entry.provider}</h5>
                            <h5>Issued on: {entry.issuedOn}</h5>
                            <h5>Valid until: {entry.validUntil}</h5>
                            <button onClick={() => window.open(entry.url, "_blank")} className="social-button">
                                View Certification 
                            </button>
                            <br /><br />
                        </div>
                        
                    ))
                ) : (
                    <p>No certifications available</p>
                )}
            </section>
            <footer className="template4-footer">This site was designed and developed by <Link to="/">PROFOLIO</Link></footer>
        </div>
    );
}





