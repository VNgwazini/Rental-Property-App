import {Container, Row, Col, Button , Carousel} from "react-bootstrap";
import FadeIn from 'react-fade-in';

export default function OfferExtended() {
  return(
    <>
    <FadeIn>
    <section className="offer-extended-header">
        <Container>
          <Row>
            <Col>
              <h6 
                className="text-left"
                style={{
                  whiteSpace: 'nowrap'
                }}
              >
                &lt; Back to offers
              </h6>
            </Col>
            <Col></Col>
            <Col>
            <h6 
                className="text-left"
                style={{
                  whiteSpace: 'nowrap'
                }}
              >
               Offer 1 Of 5
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
                      <h6>Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
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
                      <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
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
                      <h6>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h6>
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
          <Row>
            <Col 
              className="offer-extended-header border rounded"
              style={{
                borderRadius: '7px',
                border: 'solid 1px #979797',
                backgroundColor: '#ffffff',
                padding: '2em 1em'
              }}
            >
                <Row>
                  <Col>
                  <h3 className="text-left">
                    Offer Details
                  </h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <h6>
                    Your offer: $1,750 per month/$21,000 per 12 month lease
                  </h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <h6>
                    Going rate: $2,000 per month/$24,000 per 12 month lease
                  </h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <h6>
                    Additional discounts: ____________________________
                  </h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <h6>
                    Offer expires in 72 hours
                  </h6>
                  </Col>
                </Row>
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
          <Row className="mt-4 text-center">
            <Col>
              <h3>
                Your Match Level: 92%
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className="mb-4">
                Why? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </h6>
            </Col>
          </Row>
          <Row>
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
          <Row className="mt-4 text-left">
              <Col>
                <h3>
                Before You Accept the Offer
                </h3>
              </Col>
            </Row>
          <Row>
              <Col>
                <h6 className="my-4 text-left">
                Once you accept an offer, the landlord has 48 hours to supply a lease. You then have 48 hours to sign the lease and submit a payment in which you will be legally bound with the property you signed with. If you choose not to sign the lease within the given time frame, the offer will expire and you will be taken back to the offers page.  The landlord has the right to withdraw an offer AT ANY TIME before it is signed to the tenant. Don’t lose this unit. Sign it before someone else takes it!
                </h6>
              </Col>
          </Row>
          <Row>
            <div className="text-left section-heading"></div>
          </Row>
        </Container>
      </section>
      <section>
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
                  <span 
                    className="dot shadow"
                    style={{
                      padding: '4.25em'
                    }}
                  >
                    <img
                      src="/img/mail.png"
                      alt="mail.png"
                      className="img-fluid img-thumbnail remove-icon-outline"
                    />
                  </span>
                  <br></br>
                  <Button className="my-4 btn unique-feature-btn-white offer-extended-header"
                    style={{
                      color: '#092748'
                    }}
                  >
                    SKIP THIS STEP
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <div className="features-icons-item">
                <div className="text-center">
                  <span 
                    className="dot shadow"
                    style={{
                      padding: '4.25em'
                    }}
                  >
                    <img
                      src="/img/badge.png"
                      alt="badge.png"
                      className="img-fluid img-thumbnail remove-icon-outline"
                    />
                  </span>
                  <br></br>
                  <Button className="my-4 btn unique-feature-btn-blue mx-auto offer-extended-header">
                    SUBMIT
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </FadeIn>
    </>
  )
}