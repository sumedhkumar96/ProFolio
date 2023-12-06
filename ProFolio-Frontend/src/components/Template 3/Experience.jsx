import ExperienceCard from "./ExperienceCard";
import {
  Container,
  Row,
} from "react-bootstrap";
import { Jumbotron } from "./Jumbotron";

export default function Experience({ workExperienceList }){
  return (
    <section id="Experience" className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            Experiences
          </h2>
          <Row>
            {
              workExperienceList.map((data, index) => {
                return <ExperienceCard key={index} data={workExperienceList[index]} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}
