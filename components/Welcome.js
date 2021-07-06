import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ButtonGroup,
  Slider,
} from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

export default function Welcome() {

  const router = useRouter();

  return (
    <>
      <section className="mt-5 pt-5">
        <Container className="mt-5 pt-5">
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col id="welcome" style={{ margin: "10% 0" }}>
              <h1 className="text-center">Welcome, </h1>
              <p className="mt-4">
                Dolore et adipisicing cillum dolor sunt. Ea ad esse laboris est nisi. Laborum duis cupidatat eu dolore nisi consectetur mollit velit sint. Nostrud minim cillum est consequat sunt non exercitation cupidatat veniam. Ut nulla esse aliqua non proident tempor commodo labore duis. Pariatur minim aliquip et labore aliqua ex qui velit id qui culpa.
              </p>
              <div className="text-center">
                <Link href="about_yourself" passHref>
                  <Button variant="primary" size="lg">
                    TAKE ME TO MY PROFILE
                  </Button>
                </Link>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
