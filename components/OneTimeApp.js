import Router from "next/router";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ButtonGroup,
  Slider,
} from "react-bootstrap";

export default function OneTimeApp() {
  const handleSubmit = () => {
    Router.push("offers");
  };
  return (
    <>
      <Container fluid>
        <section>
          <div className="text-center paragraph-heading">
            <h1 id="unique_features_header">One-Time Application</h1>
            <p className="mt-4">
              This free application will be used for all landlords that bid on
              you. No hidden fees and hassle-free! Your personal information
              will remain anonymous to all landlords that bid on you.
            </p>
          </div>
        </section>
        <section className="section-heading">
          <Container>
            <Row>
              <div className="text-center one-time-app-Rectangle">
                <div className="text-center col-lg-12 col-md-10 ">
                  <img
                    src="/img/noun-security-2839857.png"
                    alt="noun-security-2839857.png"
                    className="section-heading img-fluid img-thumbnail remove-icon-outline"
                  />
                </div>
                <p className="mt-4">
                  This application is verified and secured by this super
                  reliable company.
                </p>
                <p id="one-time-stretch">&nbsp;</p>
              </div>
            </Row>
            <Row>
              <Col>
                <Row>
                  <div className="text-left" id="one-time-app-footer"></div>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={11} className="mb-5">
                <Button
                  className="float-right"
                  size="lg"
                  className="float-right"
                  onClick={handleSubmit}
                >
                  Next
                </Button>
              </Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </section>
      </Container>
    </>
  );
}
