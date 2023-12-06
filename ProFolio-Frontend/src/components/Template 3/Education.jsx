import {
  Container,
  Row,
} from "react-bootstrap";
import { Jumbotron } from "./Jumbotron";
import EducationCard from "./EducationCard";

export default function Education({ educationList }){
  return (
    <section id="Education" className="section">
      <Container>
        <Jumbotron className="bg-light m-0">
          <h2 className="display-4 mb-5 text-center">
            Education
          </h2>
          <Row>
            {
              educationList.map((data, index) => {
                return <EducationCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}