import {Col} from "react-bootstrap";

export default function ExperienceCard({ data }) {
  return (
    <Col lg="6">
      <div id={data.id} key={data.id} className="pb-5 text-center">
        <p className="lead">
          {data.organizationName}
          <br />
          {data.description}
        </p>
      </div>
    </Col>
  );
}