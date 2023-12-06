import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function ProjectCard({ data }) {

    return (
        <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title as="h5">{data.name}</Card.Title>
                    <Card.Text>{data.description} </Card.Text>
                    {<CardButtons url={data.url} />}
                    <hr />
                    {<CardFooter url={data.url} startDate={data.startDate} endDate={data.endDate} />}
                </Card.Body>
            </Card>
        </Col>
    );
}

function CardButtons({ url }) {
    return (
        <div className="d-grid gap-2 d-md-block">
            <a
                href={`${url}/archive/master.zip`}
                className="btn btn-outline-secondary mx-2"
            >
                <i className="fab fa-github" /> Clone Project
            </a>
            <a href={url} target=" _blank" className="btn btn-outline-secondary mx-2">
                <i className="fab fa-github" /> Repo
            </a>
        </div>
    );
}

function CardFooter({ url, startDate, endDate }) {
    return (
        <p className="card-text">
            <a
                href={url + "/stargazers"}
                target=" _blank"
                className="text-dark text-decoration-none"
            >
                <span className="text-dark card-link mr-4">
                    <i className="fab fa-github" /> Stars{" "}
                </span>
            </a>
            <small className="text-muted">{startDate} / {endDate}</small>
        </p>
    );
}