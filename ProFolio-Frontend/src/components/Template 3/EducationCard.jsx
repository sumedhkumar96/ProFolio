import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function EducationCard({ data }) {

  return (
    <Col lg="6">
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
        <div className="col-6 col-md-4 text-muted no-left-margin">{data.fromDate} to {data.toDate}</div>
            <Card.Title as="h4" className="col-12 col-md-8 no-left-margin">{data.institutionName}</Card.Title>
            <Card.Subtitle as="h5" className="col-12 col-md-8 no-left-margin">{data.degreeName}</Card.Subtitle>
            <Card.Subtitle as="h6" className="col-12 col-md-8 no-left-margin">{data.location}</Card.Subtitle>
            <hr />
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}