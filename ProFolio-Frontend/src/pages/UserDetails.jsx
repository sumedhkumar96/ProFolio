import { useState } from 'react';
import '../styles/UserDetails.css';
import { useOutletContext } from 'react-router-dom';


export default function UserDetails({setIsUserEditPage}) {
  const [user, setUser] = useOutletContext();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [preferredPronouns, setPreferredPronouns] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [socialMedia, setSocialMedia] = useState([{
    name: '',
    url: ''
  }]);

  // const [education, setEducation] = useState([{institutionName: '', degreeName: '', year: '', fieldOfStudy :'', description: ''}]);
  const [education, setEducation] = useState([{
    institutionName: '',
    degreeName: '',
    grade: '',
    location: '',
    fromDate: '',
    toDate: '',
    description: ''
  }]);
  const [experience, setExperience] = useState([{ role: '', organizationName: '', location: '',  fromDate: '', toDate: '', description: ''}]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([{ name: '', organisation: '', issueDate: '', expirationDate: '', credentialId: '', credentialUrl: ''}]);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({ companyOrInsititute: '', positionOrDegree: '', fromDate: '', location: '' });
  const [projects, setProjects] = useState([{
    name: '',
    description: '',
    url: '',
    startDate: '',
    endDate: ''
  }]);

  const handleEducationChange = (event, index) => {
    const { name, value } = event.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institutionName: '', degreeName: '', year: '', description: '' }]);
  };

  const handleSocialMediaChange = (event, index) => {
    const { name, value } = event.target;
    const updatedSocialMedia = [...socialMedia];
    updatedSocialMedia[index][name] = value;
    setSocialMedia(updatedSocialMedia);
  };

  const handleAddSocialMedia = () => {
    setSocialMedia([...socialMedia, { name: '', url: '' }]);
  };


  function handleCertificationsChange(event, index) {
    const { name, value } = event.target;
    const updatedCertification = [...certifications];
    updatedCertification[index][name] = value;
    setCertifications(updatedCertification);
  }

  function handleAddCertification() {
    setCertifications([...certifications, { name: '', organisation: '', issueDate: '', expirationDate: '', credentialId: '', credentialUrl: '' }])
  }

  function handleSkillsChange(event, index) {
    const { name, value } = event.target;
    const updatedskill = [...skills];
    updatedskill[index][name] = value;
    setSkills(updatedskill);
  }

  function handleAddSkill() {
    setSkills([...skills])
  }

  function handleExperienceChange(event, index) {
    const { name, value } = event.target;
    setExperience(prevExperience => {
      const updatedExperience = [...prevExperience];
      const experienceItem = updatedExperience[index] || {};
      experienceItem[name] = value;
      updatedExperience[index] = experienceItem;
      return updatedExperience;
    });
  }

  function handleAddExperience() {
    setExperience([...experience, { role: '', employmentType: '', organizationName: '', location: '', fromDate: '', toDate: '', description: '' }]);
  }

  const handleProjectChange = (event, index) => {
    const { name, value } = event.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    setProjects([...projects, { name: '', description: '', url: '', startDate: '', endDate: '' }]);
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      phone,
      homeAddress,
      currentAddress,
      preferredPronouns,
      aboutMe,
      education,
      experience,
      skills,
      certifications,
      profilePhoto,
      currentPosition,
      socialMedia,
      projects
    });
    console.log(user.authToken);
    console.log((education==[{
      institutionName: '',
      degreeName: '',
      grade: '',
      location: '',
      fromDate: '',
      toDate: '',
      description: ''
    }]));
    let response = await fetch(`http://127.0.0.1:8080/api/user/${user.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              "id": user.id,
              "name": `${firstName} ${lastName}`,
              "phone": phone,
              "title": preferredPronouns,
              "about": aboutMe,
              "templatePreference": 1,
              "homeLocation" : homeAddress,
              "currentLocation" : currentAddress,
              "educationList":(education.length==1 && education[0].degreeName=='')?null:education,
              "workExperienceList": (experience.length==1 && experience[0].organizationName=='')?null:experience,
              "skills": skills,
              "externalLinks":(socialMedia.length==1 && socialMedia[0].name=='')?null:socialMedia,
              "certifications":(certifications.length==1 && certifications[0].name=='')?null:certifications,
              "projects": (projects.length==1 && projects[0].name=='')?null:projects,
          }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS,DELETE',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization':`Bearer ${user.authToken}`,
            },
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (response.status == 202) {
            setIsUserEditPage(false);
        }
  }

  return (
    <div id="user-details-container">
      <div className="form-container">
        <h1 className="gradient-heading">Update Your Personal Details</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          {/* Phone field */}
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Home Address field */}
          <label htmlFor="home-address">Home Address</label>
          <input
            id="home-address"
            type="text"
            placeholder="Home Address"
            value={homeAddress}
            onChange={(e) => setHomeAddress(e.target.value)}
          />

          {/* Current Address field */}
          <label htmlFor="current-address">Current Address</label>
          <input
            id="current-address"
            type="text"
            placeholder="Current Address"
            value={currentAddress}
            onChange={(e) => setCurrentAddress(e.target.value)}
          />

          {/* About Me Textarea */}
          <label htmlFor="about-me">About Me</label>
          <textarea
            id="about-me"
            placeholder="A little bit about yourself..."
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />

          {/* Education Section */}
          <div>
            <h2 className="gradient-heading">Education</h2>
            {education.map((edu, index) => (
              <div key={index}>
                <label htmlFor='institutionName'>Institute Name</label>
                <input
                  type="text"
                  placeholder="Institute Name"
                  name="institutionName"
                  value={edu.institutionName}
                  onChange={(event) => handleEducationChange(event, index)}
                />
                <label htmlFor='degreeName'>Degree Name</label>
                <input
                  type="text"
                  placeholder="Degree Name"
                  name="degreeName"
                  value={edu.degreeName}
                  onChange={(event) => handleEducationChange(event, index)}
                />
                <label htmlFor={`grade-${index}`}>Grade</label>
                <input
                  type="text"
                  placeholder="Grade"
                  name="grade"
                  value={edu.grade}
                  onChange={(event) => handleEducationChange(event, index)}
                />
                <label htmlFor={`location-${index}`}>Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={edu.location}
                  onChange={(event) => handleEducationChange(event, index)}
                />

                <label htmlFor={`fromDate-${index}`}>From Date</label>
                <input
                  type="date"
                  name="fromDate"
                  value={edu.fromDate}
                  onChange={(event) => handleEducationChange(event, index)}
                />

                <label htmlFor={`toDate-${index}`}>To Date</label>
                <input
                  type="date"
                  name="toDate"
                  value={edu.toDate}
                  onChange={(event) => handleEducationChange(event, index)}
                />
                <label htmlFor='desciption'>Description</label>
                <textarea
                  id='description'
                  placeholder='Description'
                  name="description"
                  value={edu.description}
                  onChange={(event) => handleEducationChange(event, index)}
                />
                <hr />
              </div>
            ))}

            <button type="button" onClick={handleAddEducation}>
              Add Education
            </button>
          </div>
          <br></br>

          {/* Experience Section */}
          <div>
            <h2 className="gradient-heading">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index}>
                <label htmlFor="role">Role</label>
                <input
                  type="text"
                  placeholder="Role"
                  name="role"
                  value={exp.role}
                  onChange={(event) => handleExperienceChange(event, index)}
                />
                <label htmlFor="employment-type">Organization Name</label>
                <input
                  type="text"
                  placeholder="Organization Name"
                  name="organizationName"
                  value={exp.organizationName}
                  onChange={(event) => handleExperienceChange(event, index)}
                />
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={exp.location}
                  onChange={(event) => handleExperienceChange(event, index)}
                />
                <label htmlFor="fromDate">From date</label>
                <input
                  type="date"
                  placeholder='From date'
                  id='fromDate'
                  name="fromDate"
                  value={exp.fromDate}
                  onChange={(event) => handleExperienceChange(event, index)}
                />
                <label htmlFor="toDate">To date</label>
                <input
                  type="date"
                  placeholder='To date'
                  id='toDate'
                  name="toDate"
                  value={exp.toDate}
                  onChange={(event) => handleExperienceChange(event, index)}
                />
                <label htmlFor="description">Description</label>
                <textarea
                  id='description'
                  name="description"
                  placeholder='Description'
                  value={exp.description}
                  onChange={(event) => handleExperienceChange(event, index)}
                />
                <hr />
              </div>
            ))}
            <button type="button" onClick={handleAddExperience}>
              Add Experience
            </button>
          </div>
          <br></br>

          {/* User Skills Section */}
          <div>
            <h2 className="gradient-heading">Skills</h2>
            {skills.map((item, index) => (
              <div key={index}>
                <label htmlFor="skills">Skills</label>
                <input
                  type="text"
                  placeholder="Enter your skill"
                  name="userSkills"
                  value={item.skills}
                  onChange={(event) => handleSkillsChange(event, index)}
                />
                <hr />
              </div>
            ))}

            <button type="button" onClick={handleAddSkill}>
              Add Skill
            </button>
          </div>
          <br></br>

          {/* Social Media Section */}
          <div>
            <h2 className="gradient-heading">Social Media</h2>
            {socialMedia.map((platform, index) => (
              <div key={index}>
                <label htmlFor={`socialMedia-name-${index}`}>Platform Name</label>
                <input
                  type="text"
                  placeholder="LinkedIn, Instagram, etc."
                  name="name"
                  value={platform.name}
                  onChange={(event) => handleSocialMediaChange(event, index)}
                />

                <label htmlFor={`socialMedia-url-${index}`}>URL</label>
                <input
                  type="text"
                  placeholder="https://..."
                  name="url"
                  value={platform.url}
                  onChange={(event) => handleSocialMediaChange(event, index)}
                />
                <hr />
              </div>
            ))}
            <button type="button" onClick={handleAddSocialMedia}>
              Add Social Media
            </button>
          </div>
          <br></br>

          {/* Certifications Section */}
          <div>
            <h2 className="gradient-heading">Certifications or Licenses</h2>
            {certifications.map((item, index) => (
              <div key={index}>
                <label htmlFor="name">Certification or License Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={item.name}
                  onChange={(event) => handleCertificationsChange(event, index)}
                />
                <label htmlFor="organisation">Issuing Organization</label>
                <input
                  type="text"
                  placeholder="Issuing Organization"
                  name="organisation"
                  value={item.organisation}
                  onChange={(event) => handleCertificationsChange(event, index)}
                />
                <label htmlFor='issue-date'>Issue date</label>
                <input
                  type="date"
                  id='issue-date'
                  name="issueDate"
                  value={item.issueDate}
                  onChange={(event) => handleCertificationsChange(event, index)}
                />
                <label htmlFor='expiration-date'>Valid Untill</label>
                <input
                  type="date"
                  id='expiration-date'
                  name="expirationDate"
                  value={item.expirationDate}
                  onChange={(event) => handleCertificationsChange(event, index)}
                />
                <label htmlFor='credentialId'>Credential ID</label>
                <input
                  type="text"
                  id='credential-id'
                  name="credentialId"
                  placeholder='Credential ID'
                  value={item.credentialId}
                  onChange={(event) => handleCertificationsChange(event, index)}
                />
                <label htmlFor='credentialUrl'>Credential URL</label>
                <input
                  type="text"
                  id='credential-url'
                  name="credentialUrl"
                  placeholder='Credential URL'
                  value={item.credentialUrl}
                  onChange={(event) => handleCertificationsChange(event, index)}
                />
                <hr />
              </div>
            ))}

            <button type="button" onClick={handleAddCertification}>
              Add certifications or license
            </button>
          </div>
          <br></br>

          {/* Projects Section */}
          <div>
            <h2 className="gradient-heading">Projects</h2>
            {projects.map((project, index) => (
              <div key={index}>
                <label htmlFor={`project-name-${index}`}>Project Name</label>
                <input
                  type="text"
                  placeholder="Project Name"
                  name="name"
                  value={project.name}
                  onChange={(event) => handleProjectChange(event, index)}
                />

                <label htmlFor={`project-description-${index}`}>Description</label>
                <textarea
                  placeholder="Project Description"
                  name="description"
                  value={project.description}
                  onChange={(event) => handleProjectChange(event, index)}
                />

                <label htmlFor={`project-url-${index}`}>URL</label>
                <input
                  type="text"
                  placeholder="https://..."
                  name="url"
                  value={project.url}
                  onChange={(event) => handleProjectChange(event, index)}
                />

                <label htmlFor={`project-startDate-${index}`}>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={project.startDate}
                  onChange={(event) => handleProjectChange(event, index)}
                />

                <label htmlFor={`project-endDate-${index}`}>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={project.endDate}
                  onChange={(event) => handleProjectChange(event, index)}
                />
                <hr />
              </div>
            ))}
            <button type="button" onClick={handleAddProject}>
              Add Project
            </button>
          </div>
          <br></br>

          {/* Profile Photo Upload */}
          <label htmlFor='profile-photo'>Upload your picture for profile photo</label>
          <input id='profile-photo' type="file" onChange={handleProfilePhotoChange} />
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>

  );

}