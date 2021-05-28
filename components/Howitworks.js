import { Row, Col, Container } from "react-bootstrap";

export default function Howitworks() {
  return (
    <>
      <section className="mt-5 features-icons bg-light text-center col-lg-12 col-md-10">
        <Container className="py-5">
          <h1 className="text-center ">How it Works</h1>
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
                  Select your favorite listings and submit your free Fake
                  Brochure
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
                  Landlords compete for you before they even know your name!
                  Compare offers and properties
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
                  Choose the best offer that fits your needs and wants
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
                  Are you a rental property professional or landlord?&nbsp;
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
