import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function EducationCard({ data }) {

  return (
    <Col lg="6">
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Row>
            <Card.Title as="h4" className="col-12 col-md-8">{data.institutionName}</Card.Title>
            <div className="col-6 col-md-4 text-muted">{data.location}</div>
          </Row>
          <Row>
            <Card.Subtitle as="h5" className="col-12 col-md-8">{data.degreeName}</Card.Subtitle>
            <div className="col-6 col-md-4 text-muted">{data.fromDate} - {data.toDate}</div>
          </Row>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}