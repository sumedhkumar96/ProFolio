import { useEffect, useState } from 'react';
import '../styles/UserDetails.css';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { url } from "../components/Constants.jsx";

export default function UserDetails() {
  let navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      const response = await fetch(`${url}/api/user/public/${user.id}`);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      if (jsonResponse) {
        setName(jsonResponse.name);
        setTitle(jsonResponse.title);
        setPhone(jsonResponse.phone);
        setHomeLocation(jsonResponse.homeLocation);
        setCurrentAddress(jsonResponse.currentLocation);
        setAboutMe(jsonResponse.aboutMe);
        if (jsonResponse.educationList!=[]) {
          setEducation(jsonResponse.educationList);
        }
        if(jsonResponse.skills!=[]){
          setUserSkills(jsonResponse.skills);
        }
        if(jsonResponse.workExperienceList!=[]){
          setWorkExperience(jsonResponse.workExperienceList);
        }
        if(jsonResponse.externalLinks!=[]){
          setSocialMedia(jsonResponse.externalLinks);
        }
        if(jsonResponse.certifications!=[]){
          setCertifications(jsonResponse.certifications);
        }
        if(jsonResponse.projects!=[]){
          setProjects(jsonResponse.projects);
        }

      }
      else {
        alert("Wrong OTP entered, Please Try Again");
      }
    }

    getUserData();
  }, []);

  const [user, setUser] = useOutletContext();
  const [Name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [homeLocation, setHomeLocation] = useState('');
  const [currentLocation, setCurrentAddress] = useState('');
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
  // const [experience, setExperience] = useState([{ role: '', organizationName: '', location: '',  fromDate: '', toDate: '', description: ''}]);
  const [workExperience, setWorkExperience] = useState([{
    role: '',
    organizationName: '',
    location: '',
    fromDate: '',
    toDate: '',
    description: ''
  }]);
  // const [skills, setSkills] = useState([]);
  const [userSkills, setUserSkills] = useState([{ name: '' }]);
  const [certifications, setCertifications] = useState([{ name: '', provider: '', issuedOn: '', validUntil: '', credentialId: '', url: '' }]);
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
    setEducation([...education, { institutionName: '', degreeName: '', grade: '', location: '', fromDate: '', toDate: '', description: '' }]);
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
    setCertifications([...certifications, { name: '', provider: '', issuedOn: '', validUntil: '', credentialId: '', url: '' }])
  }

  function handleUserSkillChange(event, index) {
    const updatedSkills = [...userSkills];
    updatedSkills[index] = { name: event.target.value };
    setUserSkills(updatedSkills);
  }

  function handleAddUserSkill() {
    setUserSkills([...userSkills, { name: '' }]);
  }

  function handleWorkExperienceChange(event, index) {
    const { name, value } = event.target;
    setWorkExperience(prevExperience => {
      const updatedExperience = [...prevExperience];
      updatedExperience[index] = { ...updatedExperience[index], [name]: value };
      return updatedExperience;
    });
  }

  function handleAddWorkExperience() {
    setWorkExperience([...workExperience, {
      role: '',
      organizationName: '',
      location: '',
      fromDate: '',
      toDate: '',
      description: ''
    }]);
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
    setProfilePhoto(file);
    // if (file) {

    //   const reader = new FileReader();

    //   reader.onloadend = () => {
    //     setProfilePhoto(reader.result);
    //   };

    //   reader.readAsDataURL(file);
    // }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (profilePhoto != null) {
      let formData = new FormData();
      console.log(profilePhoto);
      formData.append("file", profilePhoto);
      const responseImage = await fetch(`${url}/api/user/${user.id}/profile-picture`, {
        method: "POST",
        body: formData,
        headers: {
          'Authorization': `Bearer ${user.authToken}`,
        },
      });
      console.log(responseImage);
    }


    console.log({
      Name,
      title,
      phone,
      homeLocation,
      currentLocation,
      aboutMe,
      education,
      workExperience,
      userSkills,
      certifications,
      profilePhoto,
      currentPosition,
      socialMedia,
      projects
    });
    console.log(user.authToken);
    console.log((education == [{
      institutionName: '',
      degreeName: '',
      grade: '',
      location: '',
      fromDate: '',
      toDate: '',
      description: ''
    }]));
    let response = await fetch(`${url}/api/user/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        "id": user.id,
        "name": Name,
        'title': title,
        "phone": phone,
        "about": aboutMe,
        "templatePreference": 1,
        "homeLocation": homeLocation,
        "currentLocation": currentLocation,
        "educationList": (education.length == 1 && education[0].degreeName == '') ? null : education,
        "workExperienceList": (workExperience.length === 1 && workExperience[0].organizationName === '') ? null : workExperience,
        "skills": userSkills.map(skill => ({ "name": skill.name })),
        "externalLinks": (socialMedia.length == 1 && socialMedia[0].name == '') ? null : socialMedia,
        "certifications": (certifications.length == 1 && certifications[0].name == '') ? null : certifications,
        "projects": (projects.length == 1 && projects[0].name == '') ? null : projects,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS,DELETE',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': `Bearer ${user.authToken}`,
      },
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    if (response.status == 202) {
      return navigate(`/user/${user.id}`);
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
            value={Name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
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
            value={homeLocation}
            onChange={(e) => setHomeLocation(e.target.value)}
          />

          {/* Current Address field */}
          <label htmlFor="current-address">Current Address</label>
          <input
            id="current-address"
            type="text"
            placeholder="Current Address"
            value={currentLocation}
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
            {workExperience.map((exp, index) => (
              <div key={index}>
                <label htmlFor={`workExp-role-${index}`}>Role</label>
                <input
                  type="text"
                  placeholder="Role"
                  name="role"
                  value={exp.role}
                  onChange={(event) => handleWorkExperienceChange(event, index)}
                />
                <label htmlFor="employment-type">Organization Name</label>
                <input
                  type="text"
                  placeholder="Organization Name"
                  name="organizationName"
                  value={exp.organizationName}
                  onChange={(event) => handleWorkExperienceChange(event, index)}
                />
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={exp.location}
                  onChange={(event) => handleWorkExperienceChange(event, index)}
                />
                <label htmlFor="fromDate">From date</label>
                <input
                  type="date"
                  placeholder='From date'
                  id='fromDate'
                  name="fromDate"
                  value={exp.fromDate}
                  onChange={(event) => handleWorkExperienceChange(event, index)}
                />
                <label htmlFor="toDate">To date</label>
                <input
                  type="date"
                  placeholder='To date'
                  id='toDate'
                  name="toDate"
                  value={exp.toDate}
                  onChange={(event) => handleWorkExperienceChange(event, index)}
                />
                <label htmlFor="description">Description</label>
                <textarea
                  id='description'
                  name="description"
                  placeholder='Description'
                  value={exp.description}
                  onChange={(event) => handleWorkExperienceChange(event, index)}
                />
                <hr />
              </div>
            ))}
            <button type="button" onClick={handleAddWorkExperience}>
              Add Experience
            </button>
          </div>
          <br></br>
          {/* Skills Section */}
          <div>
            <h2 className="gradient-heading">Skills</h2>
            {userSkills.map((skill, index) => (
              <div key={index}>
                <label htmlFor={`userSkill-${index}`}>Skill</label>
                <input
                  type="text"
                  placeholder="Enter a skill"
                  value={skill.name}
                  onChange={(event) => handleUserSkillChange(event, index)}
                />
                <hr />
              </div>
            ))}

            <button type="button" onClick={handleAddUserSkill}>
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
                <label htmlFor="provider">Issuing Organization</label>
                <input
                  type="text"
                  placeholder="Issuing Organization"
                  name="provider"
                  value={item.provider}
                  onChange={(event) => handleCertificationsChange(event, index)}
                />
                <label htmlFor='issue-date'>Issue date</label>
                <input
                  type="date"
                  id='issue-date'
                  name="issuedOn"
                  value={item.issuedOn}
                  onChange={(event) => handleCertificationsChange(event, index)}
                />
                <label htmlFor='expiration-date'>Valid Untill</label>
                <input
                  type="date"
                  id='expiration-date'
                  name="validUntil"
                  value={item.validUntil}
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
                  name="url"
                  placeholder='Credential URL'
                  value={item.url}
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
          <input id='profile-photo' type="file" accept="image/*" onChange={handleProfilePhotoChange} />
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>

  );

}