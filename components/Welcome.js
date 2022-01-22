import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import FadeIn from 'react-fade-in';

export default function Welcome() {

  return (
    <Container className="text-center px-4 pb-4" style={{marginTop: '70px', width: '100vw', height: '100vh'}}>
      <FadeIn>
      <h2 className="text-center" >Welcome </h2>
      <Row>
        <Col>
          <p className="mt-4">
            Dolore et adipisicing cillum dolor sunt. Ea ad esse laboris est nisi. Laborum duis cupidatat eu dolore nisi consectetur mollit velit sint. Nostrud minim cillum est consequat sunt non exercitation cupidatat veniam. Ut nulla esse aliqua non proident tempor commodo labore duis. Pariatur minim aliquip et labore aliqua ex qui velit id qui culpa.
          </p>
            <Link href="about_yourself" passHref>
              <Button variant="primary">
                TAKE ME TO MY PROFILE
              </Button>
            </Link>
        </Col>
      </Row>
      </FadeIn>
    </Container>
  );
}
