import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Jumbotron } from './Jumbotron';

export default function Skills({ skills }) {

    function SkillsSection({ split_skills }) {
        return (
            <>
                {split_skills.map((skill, index) => (
                    <div id={`${index} - ${skill.name}`} key={`${index} - ${skill.name}`} style={{ width: "95%" }}>
                        <p className="lead mb-1 mt-2">{skill.name}</p>
                        <ProgressBar
                            className={" progress-bar-animation"}
                            now={80}
                        />
                    </div>
                ))}
            </>
        );
    }

    return (
        <Jumbotron fluid id="Skills" className="bg-white m-0">
            <Container className="p-5 ">
                <h2 className="display-4 pb-5 text-center">
                    Skills
                </h2>
                <div id="skills-tabs lead" className="skills-tabs">
                    <Row className="pt-3 px-1">
                        <Col xs={12} md={6}>
                            <SkillsSection id="left-skills" key={"left-skills"}
                                split_skills={skills.slice(0, Math.floor(skills.length / 2))} />
                        </Col>
                        <Col xs={12} md={6}>
                            <SkillsSection id="right-skills" key={"right-skills"}
                                split_skills={skills.slice(Math.floor(skills.length / 2), skills.length)} />
                        </Col>
                    </Row>
                </div>
            </Container>
        </Jumbotron>
    );
}