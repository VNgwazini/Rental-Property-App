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
              Culpa pariatur aliqua non consequat commodo mollit ad quis laborum. Do dolor pariatur irure ipsum duis amet et dolore duis. Enim velit consectetur incididunt incididunt velit aute aliqua ullamco eiusmod ad laboris. Consectetur reprehenderit eiusmod Lorem proident nostrud quis eiusmod fugiat nostrud pariatur elit.
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
                  In elit voluptate ea dolor id aliquip commodo culpa exercitation incididunt dolore.
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
