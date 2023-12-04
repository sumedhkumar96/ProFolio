import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/UserDetails.css'; 


export default function UserDetails(){
    {
        const history = useNavigate(); 
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [homeAddress, setHomeAddress] = useState('');
        const [currentAddress, setCurrentAddress] = useState('');
        const [preferredPronouns, setPreferredPronouns] = useState('');
        const [aboutMe, setAboutMe] = useState('');
        const [socialMedia, setSocialMedia] = useState([{
          name: '',
          url: ''
        }]);
        
        // const [education, setEducation] = useState([{institute: '', degree: '', year: '', fieldOfStudy :'', educationDescription: ''}]);
        const [education, setEducation] = useState([{
          institute: '', 
          degree: '', 
          grade: '', 
          location: '', 
          fromDate: '', 
          toDate: '', 
          fieldOfStudy: '', 
          educationDescription: ''
        }]);
        const [experience, setExperience] = useState([{jobTitle: '', employmentType: '',companyName: '', location: '', locationType: '', startDate: '', endDate: '', industry: '', jobDescription: '', skills: ''}]);
        const [skills, setSkills] = useState([{userSkills : ''}]);
        const [certifications, setCertifications] = useState([{name : '', organisation : '', issueDate : '', expirationDate : '', credentialId : '', credentialUrl : '', skills : '' }]);
        const [profilePhoto, setProfilePhoto] = useState(null);
        const [currentPosition, setCurrentPosition] = useState({companyOrInsititute : '', positionOrDegree: '', startDate: '', location: '' });
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
          setEducation([...education, { institute: '', degree: '', year: '', fieldOfStudy :'', educationDescription: '' }]);
        };

        const handleSocialMediaChange = (event, index) => {
          const { name, value } = event.target;
          const updatedSocialMedia = [...socialMedia];
          updatedSocialMedia[index][name] = value;
          setSocialMedia(updatedSocialMedia);
        };
        
        const handleAddSocialMedia = () => {
          setSocialMedia([...socialMedia, {name: '', url: '' }]);
        };
        

        function handleCertificationsChange(event, index){
          const { name, value } = event.target;
          const updatedCertification = [...certifications];
          updatedCertification[index][name] = value;
          setCertifications(updatedCertification);
        }

        function handleAddCertification(){
          setCertifications([...certifications, {name : '', organisation : '', issueDate : '', expirationDate : '', credentialId : '', credentialUrl : '', skills : '' }])
        }

        function handleSkillsChange(event, index){
          const { name, value } = event.target;
          const updatedskill = [...skills];
          updatedskill[index][name] = value;
          setSkills(updatedskill);
        }

        function handleAddSkill(){
            setSkills([...skills, {userSkills : ''}])
        }
      
        function handleExperienceChange(event, index){
          const { name, value } = event.target;
          setExperience(prevExperience => {
            const updatedExperience = [...prevExperience];
            const experienceItem = updatedExperience[index] || {}; 
            experienceItem[name] = value; 
            updatedExperience[index] = experienceItem;
            return updatedExperience;
          });
        }

        function handleAddExperience(){
            setExperience([...experience, {jobTitle: '', employmentType: '', companyName: '', location: '', locationType: '', startDate: '', endDate: '', industry: '', jobDescription: '', skills: ''}]);
        }

        function handleCurrentPositionChange(event){
            const {name, value} = event.target;
            setCurrentPosition((currentPositionData) => {
              return {
                ...currentPositionData,
                [name] : value
              }
            })
      
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
        
        //console.log(certifications)
      
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

        const handleSubmit = (event) => {
          event.preventDefault();
          // Send Data to API
          console.log({
            firstName,
            lastName,
            email,
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
          // history.push('/maincontent');

        };     
        return (
          <div className="App">
            {/* <div className="user-details-page"> */}
            <div className="form-container">
            <h1 className="gradient-heading">Update Your Profolio Details</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              {/* <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              /> */}
              {/* Email field */}
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

          {/* Preferred Pronouns Dropdown */}
          {/* <label htmlFor="preferred-pronouns">Preferred Pronouns</label>
          <select
            id="preferred-pronouns"
            value={preferredPronouns}
            onChange={(e) => setPreferredPronouns(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="he/him">He/Him</option>
            <option value="she/her">She/Her</option>
            <option value="they/them">They/Them</option>
            <option value="other">Other</option>
          </select> */}

          {/* About Me Textarea */}
          <label htmlFor="about-me">About Me</label>
          <textarea
            id="about-me"
            placeholder="A little bit about yourself..."
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
      
            {/* Current Position */}
              {/* <div>
                <h2 className="gradient-heading">Current Position</h2>
                  <input
                      type="text"
                      placeholder="Company or Institue Name"
                      name="companyOrInsititute"
                      value={currentPosition.companyOrInsititute}
                      onChange={handleCurrentPositionChange}
                  />
                  <input
                      type="text"
                      placeholder="Position or Degree"
                      name="positionOrDegree"
                      value={currentPosition.positionOrDegree}
                      onChange={handleCurrentPositionChange}
                  /><br></br>
                  <label htmlFor='start-date'>Start Date</label>
                  <input
                      type="date"
                      id='start-date'
                      placeholder="Start date"
                      name="startDate"
                      value={currentPosition.startDate}
                      onChange={handleCurrentPositionChange}
                  /><br></br>
                  <input
                      type="text"
                      placeholder="Location"
                      name="location"
                      value={currentPosition.location}
                      onChange={handleCurrentPositionChange}
                  />
              </div> */}
      
              {/* Education Section */}
              <div>
                <h2 className="gradient-heading">Education</h2>
                {education.map((edu, index) => (
                  <div key={index}>
                    <label htmlFor='institute'>Institute</label>
                    <input
                      type="text"
                      placeholder="Institute"
                      name="institute"
                      value={edu.institute}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                    <label htmlFor='degree'>Degree</label>
                    <input
                      type="text"
                      placeholder="Degree"
                      name="degree"
                      value={edu.degree}
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
                    <label htmlFor='fieldOfStudy'>Field of Study</label>
                    <input
                      type="text"
                      id='fieldOfStudy'
                      name="fieldOfStudy"
                      placeholder='Field of study'
                      value={edu.fieldOfStudy}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                    <label htmlFor='desciption'>Description</label>
                    <textarea
                      id='educationDescription'
                      placeholder='Description'
                      name="educationDescription"
                      value={edu.educationDescription}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                    <hr/>
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
                    <label htmlFor="jobTitle">Role</label>
                    <input
                      type="text"
                      placeholder="Role"
                      name="jobTitle"
                      value={exp.jobTitle}
                      onChange={(event) => handleExperienceChange(event, index)}
                    />
                  <label htmlFor="employment-type">Current employment status</label>
                   <select 
                    id="employment-type"
                    onChange={(event) => handleExperienceChange(event, index)}
                    name="employmentType"
                    value={exp.employmentType}
                    >
                    <option value="">-- Choose --</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                    <option value="Apprenticeship">Apprenticeship</option>
                  </select>
                  <label htmlFor="employment-type">Organization Name</label>
                    <input
                      type="text"
                      placeholder="Organization Name"
                      name="companyName"
                      value={exp.companyName}
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
                {/* <label htmlFor="locationType">Current employment status</label>
                <select 
                    id="locationType"
                    onChange={(event) => handleExperienceChange(event, index)}
                    name="locationType"
                    value={exp.locationType}
                    >
                    <option value="">-- Choose --</option>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                </select> */}
                <label htmlFor="startDate">Start date</label>
                    <input
                      type="date"
                      id='startDate'
                      name="startDate"
                      value={exp.startDate}
                      onChange={(event) => handleExperienceChange(event, index)}
                    />
                <label htmlFor="endDate">End date</label>
                    <input
                      type="date"
                      placeholder='End date'
                      id='endDate'
                      name="endDate"
                      value={exp.endDate}
                      onChange={(event) => handleExperienceChange(event, index)}
                    />
                    {/* <input
                      type="text"
                      placeholder="Industry"
                      name="industry"
                      value={exp.industry}
                      onChange={(event) => handleExperienceChange(event, index)}
                    /> */}
                    <label htmlFor="jobDescription">Job Description</label>
                    <textarea
                      id='jobDescription'
                      name="jobDescription"
                      placeholder='Job Description'
                      value={exp.jobDescription}
                      onChange={(event) => handleExperienceChange(event, index)}
                    />
                    <label htmlFor="skills">Skills</label>
                    <textarea
                      id='skills'
                      name="skills"
                      placeholder='Skills'
                      value={exp.skills}
                      onChange={(event) => handleExperienceChange(event, index)}
                    />
                    <hr/>
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
                    <hr/>
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
                  <hr/>
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
                    <label htmlFor='skills'>Skills</label>
                    <input
                      type="text"
                      id='skills'
                      name="skills"
                      placeholder='Skills'
                      value={item.skills}
                      onChange={(event) => handleCertificationsChange(event, index)}
                    />
                    <hr/>
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
                    <hr/>
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
          // </div>
        );
      };
}