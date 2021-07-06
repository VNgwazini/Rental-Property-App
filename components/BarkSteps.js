import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link"

export default function BarkSteps() {
  return (
    <>
      <section className="text-center section-heading mx-auto mb-4">
        <Container className="Rectangle">
          <Row>
            <Col>
              <div className="text-center barker-steps-num-align">
                <img
                  src="/img/group-3.png"
                  alt="group-3.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center image-vertical-align">
                <img
                  src="/img/010-house.png"
                  alt="010-house.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col>
              <div className="text-left">
                <h4 className="text-left header-vertical-align">
                  Give us your favorite listings.
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="text-center section-heading mx-auto mb-4">
        <Container className="Rectangle">
          <Row>
            <Col>
              <div className="text-center barker-steps-num-align">
                <img
                  src="/img/group-2.png"
                  alt="group-2.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center image-vertical-align">
                <img
                  src="/img/040-savings.png"
                  alt="040-savings.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col>
              <div className="text-left">
                <h4 className="text-left header-vertical-align">
                  Tell us what’s important to you and fill out our one-time free
                  application.
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="text-center section-heading mx-auto mb-4">
        <Container className="Rectangle">
          <Row>
            <Col>
              <div className="text-center barker-steps-num-align">
                <img
                  src="/img/group-2-copy.png"
                  alt="group-2-copy.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
                <img
                  src="/img/050-experience.png"
                  alt="050-experience.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col>
              <div className="text-left">
                <h4 className="text-left header-vertical-align">
                  Let us create your Demo Brochure.
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="text-center section-heading mx-auto mb-4">
        <Container className="Rectangle">
          <Row>
            <Col>
              <div className="text-center barker-steps-num-align">
                <img
                  src="/img/group-2-copy-2.png"
                  alt="group-2-copy-2.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center image-vertical-align">
                <img
                  src="/img/001-handshake.png"
                  alt="001-handshake.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col>
              <div className="text-left">
                <h4 className="text-left header-vertical-align">
                  Let landlords compete for you. May the best offer win!
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
        <Container>
          <Row className="mx-auto section-heading">
            <Col></Col>
            <Col>
            <Link href="tenant/top_preferences" passHref>
              <button className="btn btn-primary start-barking-btn-blue">
                Start Demo
              </button>
            </Link>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
