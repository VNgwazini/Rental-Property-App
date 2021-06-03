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
                All of your properties have been saved. Please tell us more
                about you so that we can create your personal Fake Brochure
                that we will use to show Landlords why they should want you as a
                tenant. Don’t worry, we won’t disclose your name, race, gender
                or any other personal information. We only disclose the things
                that landlords should consider to make you an offer, such as
                your requirements, job history and credit score.
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
