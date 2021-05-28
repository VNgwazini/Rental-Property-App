import { Container, Row, Col, Form, Carousel, Button, Modal} from "react-bootstrap";
import react, {useState} from "react";

export default function Congratulations() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="offer-extended-header text-center">
        <Container>
          <Row>
            <Col>
              <h1>
                Congratulations on your new home!
              </h1>
              <p>
                Please print this page or download it as a PDF for your records.
              </p>
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
                  <h3>
                    By accepting this offer, you agree to release all of your personal information that is in our possession, such as your name and email in order for the landlord to contact you with all of the necessary  documents to move forward with the payment process.
                  </h3>
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
        <section className="offer-extended-header">
        <Container>
          <Row>
            <Col>
              <div className="text-center">
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
            <Col>
              <div className="congratulations-Rectangle text-center">
                <Row>
                  <Col>
                    <h3>
                    Property Name
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>
                    Street Address
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>
                    City, State, Zip
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>
                    Phone number
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>
                    Email
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="offer-extended-header congratulations-details-Rectangle">
            <Col>
              <div>
                <Row>
                  <Col>
                    <h3>
                      Details of Accepted Offer #7192AkJ80
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      Your offer: $1,750 per month/$21,000 per 12 month lease
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      Going rate: $2,000 per month/$24,000 per 12 month lease
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      Additional discounts: ____________________________
                    </p> 
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      Offer expires in 72 hours
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      Offer accepted: 5/21/2020 
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  <h3 className="my-4 text-center">
                    NEXT STEPS
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-left">
                    Congratulations, _______! We are so happy to have helped your home find you. The landlord now has access to your personal contact information, and will be reaching out with the necessary documents to wrap up the leasing process. We have also provided their contact information below.
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <p className="text-left">
                  Landlord Name
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-left">
                  Landlord Email
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-left">
                  Landlord Phone Number
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-left">
                  Apartment Name
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-left">
                  Apartment Address
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-left">
                  City, State
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Button className="congratulations-btn-blue">
            ONE LAST THING . . .
            </Button>
          </Row>
          <Row>
            <div className="text-left section-heading"></div>
          </Row>
        </Container>
        </section>
    </>
  );
}
 