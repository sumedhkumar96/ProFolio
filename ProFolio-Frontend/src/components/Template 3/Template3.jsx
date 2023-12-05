import { MainBody } from "./MainBody";

export function Template3({userData}) {
    return (
        <>
            <MainBody
                title={userData.name}
                message={userData.about}
            />
            {/* {about.show && (
                <AboutMe
                    heading={about.heading}
                    message={about.message}
                    link={about.imageLink}
                    imgSize={about.imageSize}
                    resume={about.resume}
                />
            )}
            {
                experiences.show && (
                    <Experience experiences={experiences} />
                )
            }
            {repos.show && (
                <Project
                    heading={repos.heading}
                    username={repos.gitHubUsername}
                    length={repos.reposLength}
                    specfic={repos.specificRepos}
                />
            )}
            {leadership.show && (
                <Leadership
                    heading={leadership.heading}
                    message={leadership.message}
                    img={leadership.images}
                    imageSize={leadership.imageSize}
                />
            )}
            {skills.show && (
                <Skills
                    heading={skills.heading}
                    hardSkills={skills.hardSkills}
                    softSkills={skills.softSkills}
                />
            )} */}
        </>
    );
}