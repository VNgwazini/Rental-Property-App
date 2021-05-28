import { Container, Row, Col, Form, Carousel, Button, Modal} from "react-bootstrap";
import react, {useState} from "react";

export default function AcceptOffer() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="offer-extended-header">
        <Container>
          <Row>
            <Col>
              <h6 className="text-left">
                &lt; Back to offers
              </h6>
            </Col>
            <Col></Col>
            <Col>
              <h6 className="text-right">
              &lt; Offer 1 OF 5 &gt; 
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center paragraph-heading">
                <h1>
                YOUR OFFER FROM THIS PROPERTY
                </h1>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
        <section>
          <Container>
            <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog modal-xl text-center">
            <Modal.Body>
              <Row>
                <Col>
                  <p>
                    By accepting this offer, you agree to release all of your personal information that is in our possession, such as your name and email in order for the landlord to contact you with all of the necessary  documents to move forward with the payment process.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={handleClose} className="accept-offer-modal-btn-blue">
                    AGREE & ACCEPT OFFER
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={handleClose} className="accept-offer-modal-btn-white">
                    BACK TO OFFERS
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
            </Modal>
          </Container>
        </section>
        <section className="">
        <Container>
          <Row>
            <Col>
              <div className="offer-extended-header offer-extended-Rectangle">
                <Row>
                  <h3 className="text-left">
                    Offer Details
                  </h3>
                </Row>
                <Row>
                  <h6>
                    Your offer: $1,750 per month/$21,000 per 12 month lease
                  </h6>
                </Row>
                <Row>
                  <h6>
                    Going rate: $2,000 per month/$24,000 per 12 month lease
                  </h6>
                </Row>
                <Row>
                  <h6>
                    Additional discounts: ____________________________
                  </h6>
                </Row>
                <Row>
                  <h6>
                    Offer expires in 72 hours
                  </h6>
                </Row>
              </div>
            </Col>
            <Col>
            <div className="offer-extended-header">
                <h3>
                  Message From the Landlord
                </h3>
                <div className="offer-extended-scrollbox">
                  Dear Tenant,<br></br>

                    Thank you for your interest in our apartment. We see you as a very valuable renter and would love to extend an offer to you. Please view our offer details and consider living with us for your 2020-2021 lease. 

                    <br></br>Best,<br></br>

                    Jefferson Vantage Apartments
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col>
              <h3 className="my-4 text-center">
                  Your Match Level: 92%
                </h3>
              </Col>
            </Row>
            <Row>
              <h6 className="my-4 text-center">
                Why? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </h6>
            </Row>
            <Col>
              <div>
                <button className="btn offer-extended-btn-white">
                GO TO WEBSITE
                </button>
              </div>
            </Col>
            <Col>
            <div>
              <button className="btn offer-extended-btn-white">
              SCHEDULE A TOUR
              </button>
            </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="my-4 text-left">
                Before You Accept the Offer
              </h3>
            </Col>
          </Row>
          <Row>
            <h6 className="my-4 text-left">
              Once you accept an offer, the landlord has 48 hours to supply a lease. You then have 48 hours to sign the lease and submit a payment in which you will be legally bound with the property you signed with. If you choose not to sign the lease within the given time frame, the offer will expire and you will be taken back to the offers page.  The landlord has the right to withdraw an offer AT ANY TIME before it is signed to the tenant. Don’t lose this unit. Sign it before someone else takes it!
            </h6>
          </Row>
          <Row>
            <div className="text-left section-heading"></div>
          </Row>
        </Container>
        </section>
        <section className="">
        <Container>
          <Row>
            <Col>
              <h3 className="text-center">
                What’s next?
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="features-icons-item ">
              <div className="text-center">
                  <span className="dot shadow">
                    <img
                      src="/img/mail.png"
                      alt="mail.png"
                      className="img-fluid img-thumbnail remove-icon-outline"
                    />
                  </span>
                  <br></br>
                  <button className="btn unique-feature-btn-white offer-extended-header">
                    MESSAGE LANDLORD
                  </button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="features-icons-item">
                <div className="text-center">
                  <span className="dot shadow">
                    <img
                      src="/img/badge.png"
                      alt="badge.png"
                      className="img-fluid img-thumbnail remove-icon-outline"
                    />
                  </span>
                  <br></br>
                  <Button className="btn unique-feature-btn-blue mx-auto offer-extended-header" variant="primary" onClick={handleShow}>
                      ACCEPT OFFER
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}