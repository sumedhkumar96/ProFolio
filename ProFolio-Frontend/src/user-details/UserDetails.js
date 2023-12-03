import React, { useState } from 'react';
import './App.css'

export default function UserDetails(){
    {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [education, setEducation] = useState([{institute: '', degree: '', year: '', fieldOfStudy :'', educationDescription: ''}]);
        const [experience, setExperience] = useState([{jobTitle: '', employmentType: '',companyName: '', location: '', locationType: '', startDate: '', endDate: '', industry: '', jobDescription: '', skills: ''}]);
        const [skills, setSkills] = useState([{userSkills : ''}]);
        const [certifications, setCertifications] = useState([{name : '', organisation : '', issueDate : '', expirationDate : '', credentialId : '', credentialUrl : '', skills : '' }]);
        const [profilePhoto, setProfilePhoto] = useState(null);
        const [currentPosition, setCurrentPosition] = useState({companyOrInsititute : '', positionOrDegree: '', startDate: '', location: '' });
        
        const handleEducationChange = (event, index) => {
          const { name, value } = event.target;
          const updatedEducation = [...education];
          updatedEducation[index][name] = value;
          setEducation(updatedEducation);
        };
      
        const handleAddEducation = () => {
          setEducation([...education, { institute: '', degree: '', year: '', fieldOfStudy :'', educationDescription: '' }]);
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
            education,
            experience,
            skills,
            certifications,
            profilePhoto,
            currentPosition
          });
        };
      
        return (
          <div className="App">
            <h1>Update your Profolio details</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
      
            {/* Current Position */}
              <div>
                <h2>Current Position</h2>
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
              </div>
      
              {/* Education Section */}
              <div>
                <h2>Education</h2>
                {education.map((edu, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Institute"
                      name="institute"
                      value={edu.institute}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                    <input
                      type="text"
                      placeholder="Degree"
                      name="degree"
                      value={edu.degree}
                      onChange={(event) => handleEducationChange(event, index)}
                    /><br></br>
                    <label htmlFor='passout-year'>Passout Year</label>
                    <input
                      type="date"
                      id='passout-year'
                      name="year"
                      value={edu.year}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
                    <input
                      type="text"
                      id='fieldOfStudy'
                      name="fieldOfStudy"
                      placeholder='Field of study'
                      value={edu.fieldOfStudy}
                      onChange={(event) => handleEducationChange(event, index)}
                    />
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
                <h2>Experience</h2>
                {experience.map((exp, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Job Title"
                      name="jobTitle"
                      value={exp.jobTitle}
                      onChange={(event) => handleExperienceChange(event, index)}
                    />
                <br /><br />
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
                <br/>
                    <input
                      type="text"
                      placeholder="Company Name"
                      name="companyName"
                      value={exp.companyName}
                      onChange={(event) => handleExperienceChange(event, index)}
                    /><br></br>
                    <input
                      type="text"
                      placeholder="Location"
                      name="location"
                      value={exp.location}
                      onChange={(event) => handleExperienceChange(event, index)}
                     />
                <br /><br />
                <label htmlFor="locationType">Current employment status</label>
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
                </select>
                <br/>
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
                    <input
                      type="text"
                      placeholder="Industry"
                      name="industry"
                      value={exp.industry}
                      onChange={(event) => handleExperienceChange(event, index)}
                    /><br></br>
                    <textarea
                      id='jobDescription'
                      name="jobDescription"
                      placeholder='Job Description'
                      value={exp.jobDescription}
                      onChange={(event) => handleExperienceChange(event, index)}
                    />
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
                <h2>Skills</h2>
                {skills.map((item, index) => (
                  <div key={index}>
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
      
             {/* Certifications Section */}
             <div>
                <h2>Certifications or license</h2>
                {certifications.map((item, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={item.name}
                      onChange={(event) => handleCertificationsChange(event, index)}
                    />
                    <input
                      type="text"
                      placeholder="Issuing organisation"
                      name="organisation"
                      value={item.organisation}
                      onChange={(event) => handleCertificationsChange(event, index)}
                    /><br></br>
                    <label htmlFor='issue-date'>Issue date</label>
                    <input
                      type="date"
                      id='issue-date'
                      name="issueDate"
                      value={item.issueDate}
                      onChange={(event) => handleCertificationsChange(event, index)}
                    />
                    <label htmlFor='expiration-date'>Expiration date</label>
                    <input
                      type="date"
                      id='expiration-date'
                      name="expirationDate"
                      value={item.expirationDate}
                      onChange={(event) => handleCertificationsChange(event, index)}
                    /><br></br>
                    <input
                      type="text"
                      id='credential-id'
                      name="credentialId"
                      placeholder='Credential ID'
                      value={item.credentialId}
                      onChange={(event) => handleCertificationsChange(event, index)}
                    />
                    <input
                      type="text"
                      id='credential-url'
                      name="credentialUrl"
                      placeholder='Credential URL'
                      value={item.credentialUrl}
                      onChange={(event) => handleCertificationsChange(event, index)}
                    />
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

              {/* Profile Photo Upload */}
              <label htmlFor='profile-photo'>Upload your picture for profile photo</label>
              <input id='profile-photo' type="file" onChange={handleProfilePhotoChange} /> 
              
      
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      };
}