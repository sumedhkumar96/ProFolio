import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./Jumbotron";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }){

  return (
    <Jumbotron fluid id="Projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">Projects</h2>
        <Row>
          {projects.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                data={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
}