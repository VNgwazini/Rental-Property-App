import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function NextBtn() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="float-right my-4">
              <Link href="top_preferences" passHref>
                <Button size="lg">Next </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
