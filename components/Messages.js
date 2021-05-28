import { Container, Col, Card, Row, Button, ListGroup } from "react-bootstrap";

function MessagesSidebar() {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </>
  );
}

function MessageBody() {
  return (
    <>
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Header as="h2">Apartment #2</Card.Header>
            <Card.Body>
              <Button variant="outline-secondary" className="float-right">
                Schedule Tour
              </Button>
              <p>4845 Saturn St, Los Angeles</p>

              <hr />
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>

            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Card>
        </Col>
      </Row>
      <Row></Row>
    </>
  );
}

export default function Messages() {
  return (
    <>
      <section className="mt-5">
        <Container fluid className="px-5">
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item>Messages</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="2">
              <MessagesSidebar />
            </Col>
            <Col lg="8">
              <MessageBody />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
