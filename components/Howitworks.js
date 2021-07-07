import { Row, Col, Container } from "react-bootstrap";

export default function Howitworks() {
  return (
    <>
      <section className="mt-5 features-icons bg-light text-center col-lg-12 col-md-10">
        <Container className="py-5">
          <h1 className="text-center ">How It Works</h1>
          <Row>
            <Col lg="4">
              <div className="features-icons-item ">
                <span className="dot shadow">
                  <img
                    src="/img/050-experience.png"
                    alt="050-experience.png"
                    className="img-fluid img-thumbnail remove-icon-outline"
                  />
                </span>

                <p className="mt-5">
                  Sunt in ex ad magna sunt mollit magna consequat commodo laborum enim nostrud.
                </p>
              </div>
            </Col>
            <Col lg="4">
              <div className="features-icons-item">
                <div className="text-center">
                  <span className="dot shadow">
                    <img
                      src="/img/023-hands-up.png"
                      alt="023-hands-up.png"
                      className="img-fluid img-thumbnail remove-icon-outline"
                    />
                  </span>
                </div>
                <p className="mt-5">
                  Labore pariatur ad aliqua do adipisicing ipsum occaecat magna.
                </p>
              </div>
            </Col>
            <Col lg="4">
              <div className="features-icons-item ">
                <div className="text-center ">
                  <span className="dot shadow">
                    <img
                      src="/img/049-email.png"
                      alt="049-email.png"
                      className="img-fluid img-thumbnail remove-icon-outline"
                    />
                  </span>
                </div>
                <p className="mt-5">
                  Deserunt veniam ad occaecat ea minim irure.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="text-center mt-5">
        <Container>
          <Row>
            <Col>
              <div>
                <h4>
                  Quis sint cupidatat mollit irure labore do?&nbsp;
                  <a href="#">Learn more&nbsp;&nbsp;&gt;</a>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
