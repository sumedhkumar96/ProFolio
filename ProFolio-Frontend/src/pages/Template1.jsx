import React, { useState, useEffect } from 'react';
import '../styles/Template.css';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Project from '../components/Projects';
import Skill from '../components/Skills';
import Head from '../components/Head';

const Template1 = () => {
    // State to hold user details
    const [userDetails, setUserDetails] = useState(null);

    // Fetch user details from the source where they are stored
    useEffect(() => {
        // Replace this with your actual data fetching logic

        // const fetchUserDetails = async () => {
        //     // Fetch user details and set them in state
        // };
        // fetchUserDetails();
        // const resp = api data here
        const apiResponse = {
            education : [
                {
                    "id": 1,
                    "school": "Indian Institute of Information Technology",
                    "from": "Aug 2018",
                    "to": "May 2022",
                    "cgpa": "CGPA : 8.21 / 10",
                    "degree": "BTech in Computer Science & Engineering"
                    // "logo": iiitk
                },
                {
                    "id": 2,
                    "school": "Kailsanadha Vidyanikethan",
                    "from": "June 2016",
                    "to": "May 2018",
                    "cgpa": "Percentage : 87.8 %",
                    "degree": "Senior Secondary School Certificate (12th CBSE)"
                    // "logo": kvn
                },
                {
                    "id": 3,
                    "school": "Holy Cross CBSE School Arthat",
                    "from": "June 2004",
                    "to": "May 2016",
                    "cgpa": "CGPA : 9.4 / 10",
                    "degree": "Secondary School Certificate (10th CBSE)"
                    // "logo":hc
                }
            ],
            experience : [{
                "id" : 1,
                "job_title":"Machine Learning Engineer",
                "employer":"Cognizant Technology Solutions",
                "from":"Jul 2022",
                "to":"Current",
                "techs":"Machine Learning, Deep Learning",
                "description":"ML Engineer at AI for QA and QA for AI working on implementing solutions to make QA life easier with AI. ",
                "link":""
            },
            {
                "id" : 2,
                "job_title":"Application Developer Intern",
                "employer":"IBM Consulting",
                "from":"Jan 2022",
                "to":"Jun 2022",
                "techs":"Oracle Cloud, Oracle CRM",
                "description":"Documenting, Developing and Testing serveral workflows on the Oracle CRM platform as per client requirements.",
                "link":""
            },
            {
                "id" : 3,
                "job_title":"Deep Learning Intern",
                "employer":"NIT Calicut",
                "from":"May 2021",
                "to":"June 2021",
                "techs":"Tensorflow, Keras, Matplotlib, Google-Colab",
                "description":"Experimented and surveyed on some of the recent and best deep architectures for protein structure prediction",
                "link":""
            },
            {
                "id" : 4,
                "job_title":"AI Project Intern",
                "employer":"IotIot.in",
                "from":"Jan 2021",
                "to":"Mar 2021",
                "techs":"Tensorflow, Keras, Google-Colab, Google Media-pipes",
                "description":"Worked on a deep lerning model to predict hand gestures",
                "link":""
            },
            {
                "id" : 5,
                "job_title":"Web Developer Intern",
                "employer":"Daddy Santa",
                "from":"Jan 2020",
                "to":"Mar 2020",
                "techs":"HTML, CSS, JS, React.js",
                "description":"Designed, Developed and deployed lovely websites for our clients",
                "link":""
            }
            ],
            project : [
                {
                    "id" : 1,
                    "title":"University Recommendation System",
                    "mid":"Team Project | Data Science",
                    "decription":"A hybrid recommendation system that recommends universities for students aspiring to take admission in international universities",
                    "link":"https://github.com/christopher-2000/BTP"
                },
                {   
                    "id" : 2,
                    "title":"Segmentation of Images using UNET",
                    "mid":"Individual Project | Deeplearning",
                    "decription":"UNET Model that does Image Segmentation on Neuronal Images, which areuseful in bio-medical Applications.",
                    "link":"https://github.com/christopher-2000/Neuronal-Structure-Segmentation-with-UNET"
            
                },
                {
                    "id" : 3,
                    "title":"Counting Fingers with CNN",
                    "mid":"Individual Project | Deeplearning",
                    "decription":"A simple CNN model using Keras Sequential Model that predicts the number of fingers shown.",
                    "link":"https://github.com/christopher-2000/FingerCounting_CNN"
            
                },
                {   
                    "id" : 4,
                    "title":"Small Scale Blog App",
                    "mid":"Individual Project | Flutter",
                    "decription":"Light and simple Blog App for an individual organization.",
                    "link":"https://github.com/christopher-2000/IIITK_Blog"
            
                },
                {
                    "id" : 5,
                    "title":"TODO App using Flutter",
                    "mid":"Individual Project | Flutter",
                    "decription":"A TODO mobile Application to save our TODO list and are sorted by deadlines.",
                    "link":"https://github.com/christopher-2000/Todo-Firebase-App"
            
                },
                {
                    "id" : 6,
                    "title":"Portfolio Website",
                    "mid":"Individual Project | React.js",
                    "decription":"My personal portfolio website with details of all my past experience, projects and other achievements",
                    "link":"https://github.com/christopher-2000/My-Resume"
                }
            ],
            skill : [
                {
                    "id" : 1,
                    "skill":"Data Structures and Algorithms",
                    "Techs":"C, C++, Python",
                    "percent":"80",
                    "level":"Intermediate"
                },
                {
                    "id" : 2,
                    "skill":"Front-End Web Development",
                    "Techs":"HTML, CSS, Js, BootStrap, React Js",
                    "percent":"80",
                    "level":"Intermediate"
                },
                {
                    "id" : 3,
                    "skill":"Android App Development",
                    "Techs":"Flutter, Firebase",
                    "percent":"80",
                    "level":"Intermediate"
                },
                {
                    "id" : 4,
                    "skill":"Deep Learning",
                    "Techs":"Keras, TensorFlow, OpenCV",
                    "percent":"60",
                    "level":"Intermediate"
                },
                {
                    "id" : 5,
                    "skill":"Backend Web Development",
                    "Techs":"Node Js, Django, Flask",
                    "percent":"30",
                    "level":"Beginner"
                },
                {
                    "id" : 6,
                    "skill":"Databases",
                    "Techs":"SQl, Firebase, AWS S3",
                    "percent":"50",
                    "level":"Intermediate"
                }
            ],
            Data : [
                {   "name":"M G Christopher",
                    "one-line":"Associate Engineer at Cognizant",
                    "about":"Passionate AI Enthusiast with a keen understanding of the common machine learning techniques and algorithms. Also fond of innovative Web Designing and Competitive Coding",
                    "li":"https://www.linkedin.com/in/christopher2000",
                    "github":"https://www.github.com/christopher-2000",
                    "twitter":"",
                    "insta":"https://www.instagram.com"
            
                }
            ]
        };
        setUserDetails(apiResponse);
    }, []);


      if (!userDetails) {
        return <div>Loading...</div>;
      }


    


    return (
        // <div className="portfolio-template">
        //   <div className="header">
        //     <h1>{`${userDetails.firstName} ${userDetails.lastName}`}</h1>
        //     {userDetails.profilePhoto && <img src={userDetails.profilePhoto} alt="Profile" />}
        //   </div>
        //   <div className="about-me">
        //     <h2>About Me</h2>
        //     <p>{userDetails.aboutMe}</p>
        //   </div>
        //   <div className="education">
        //     <h2>Education</h2>
        //     {userDetails.education.map((edu, index) => (
        //       <div key={index}>
        //         <h3>{edu.institute}</h3>
        //         <p>{edu.degree} - {edu.year}</p>
        //         <p>{edu.fieldOfStudy}</p>
        //         <p>{edu.educationDescription}</p>
        //       </div>
        //     ))}
        //   </div>
        //   {/* Similar sections for experience, skills, and certifications */}
        //   {/* ... */}
        // </div>
        <div>
            <Head Data={userDetails.Data}/>
            <Skill skillHistory={userDetails.skill}/>
            <Education educationHistory={userDetails.education} />

            <Experience experienceHistory={userDetails.experience} />
            <Project projectHistory={userDetails.project}/>
      {/*<Contact /> */}

        </div>
    );
};

export default Template1;
