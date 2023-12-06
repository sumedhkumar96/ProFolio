import Education from './Education';
import Experience from './Experience';
import Project from './Projects';
import Skill from './Skills';
import Head from './Head';
import '../../styles/Template1.css';
import { Link } from 'react-router-dom';
import Certification from './Certification';
import ContactMe from './ContactMe';


export function Template1({ userData }) {
    // Fetch user details from the source where they are stored
    return (
        <div className='template-1-container'>
            <Head userData={userData} />
            {userData.skills.length>0 &&<Skill skills={userData.skills} />}
            <Education educationList={userData.educationList} />
            <Experience workExperienceList={userData.workExperienceList} />
            <Project projects={userData.projects} />
            <Certification certifications={userData.certifications} />
            <ContactMe contacts={userData.externalLinks} />
            <footer className="grad-progress center">This site was designed and developed by Kavya Nandigam of team <Link to="/">PROFOLIO</Link>.</footer>
        </div>
    );
}