import { Container, Row, Col } from "react-bootstrap";

export default function WhyFakeCompany() {
  //text-center my-6
  return (
    <>
      <section className="mx-auto my-4">
        <Container>
          <Row className="why-Rectangle text-left my-4 mx-auto">
            <Col lg="2">
              <div className="text-center why-rent-image-align col-lg-12 col-md-10">
                <img
                  src="/img/043-sign.png"
                  alt="043-sign.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col lg="10" className="mt-4">
              <Row>
                <h6>
                  You’re likely overpaying your monthly lease.
                </h6>
              </Row>
              <Row>
                <p>
                  Did you know landlords have pricing flexibility based upon
                  factors such as vacancy rates, your desired lease date and
                  term, and your personal qualifications and history? It
                  often requires skilled negotiation to achieve a landlord’s
                  best rate because this information is constantly changing,
                  which can be stressful and time consuming. FakeCompany
                  flips the script, promoting your unique qualifications to
                  landlords to compel them to chase you and make you their
                  best offer, without stressful negotiations.
                </p>
              </Row>
            </Col>
          </Row>
          <Row className="why-Rectangle text-left my-4 mx-auto">
            <Col lg="2">
              <div className="text-center why-rent-image-align col-lg-12 col-md-10">
                <img
                  src="/img/023-browser.png"
                  alt="023-browser.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col lg="10" className="mt-4">
              <Row>
                <h6>
                  FakeCompany selects and highlights your best qualities to market you to landlords anonymously.
                </h6>
              </Row>
              <Row>
                <p>
                  Whether you’ve worked hard to build your credit, get a
                  great job, make car payments on time, or have a spotless
                  record, we will create a Fake Brochure that highlights
                  your best qualities to demonstrate to landlords that you
                  are the tenant they want. Your Fake Brochure will not
                  disclose your name, race, color, national origin,
                  religion, sex, familial status, or any disability. We will
                  force landlords to make their offers solely on the
                  criteria that should matter. After we complete your Fake
                  Brochure, landlords will be barking at the bit to bid on
                  you.
                </p>
              </Row>
            </Col>
          </Row>
          <Row className="why-Rectangle text-left my-4 mx-auto">
            <Col lg="2">
              <div className="text-center why-rent-image-align col-lg-12 col-md-10">
                <img
                  src="/img/009-chat.png"
                  alt="009-chat.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col lg="10" className="mt-4">
              <Row>
                <h6>
                  Discover more apartments and pay less for applications.
                </h6>
              </Row>
              <Row>
                <p>
                  Until now, tenants could not discover or compare flexible
                  rental pricing without contacting multiple landlords and
                  paying multiple application fees. FakeCompany reverses the
                  process and ANONYMOUSLY advertises your unique
                  qualifications (credit, background, income, etc.) to
                  multiple landlords of your choosing, and in response,
                  landlords will make their best offer to you at the outset.
                </p>
              </Row>
            </Col>
          </Row>
          <Row className="why-Rectangle text-left my-4 mx-auto">
            <Col lg="2">
              <div className="text-center why-rent-image-align col-lg-12 col-md-10">
                <img
                src="/img/042-credit-card.png"
                alt="042-credit-card.png"
                className="img-fluid img-thumbnail remove-icon-outline"
              />
            </div>
              </Col>
              <Col lg="10" className="mt-4">
              <Row>
                <h6>
                  Your information is safe and secure at all times.
                </h6>
              </Row>
              <Row>
                <p>
                  We use an authorized third party screening service in
                  order to make sure your information is secured in our
                  servers. It will not be disclosed to anyone until you have
                  accepted an offer. Once you accept an offer, we will only
                  disclose the information landlords NEED to know in order
                  to complete the leasing process.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mx-auto section-heading">
            <Col></Col>
            <Col>
              <button className="btn btn-primary start-barking-btn-blue">
                Start Faking
              </button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}