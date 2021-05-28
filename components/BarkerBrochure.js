import {Container, Row, Col, Button} from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';
import { Slider, Tabs, Tab, Typography} from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';




export default function BarkerBrochure() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));
  const [review_0, set_review_0] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const muiTheme = createMuiTheme({
    overrides: {
      MuiSlider: {
        thumb: {
          color: "#1c7406",
          height: "21px",
          width: "21px",
          border: "1px solid #092748",
        },
        track: {
          borderRadius: "7px",
          border: "solid 1px #979797",
          height: "14px",
          background: "linear-gradient(to right, #a41e03 1%, #d37d04 17%, #f4cd02 47%, #1c7406)",
        },
        rail: {
          color: "white",
          height: "14px",
          borderRadius: "7px",
          border: "solid 1px white",
        },
      },
    },
  });
  return(
    <>
      <section>
        <Container>
          <Col></Col>
          <Col>
            <div className="text-center paragraph-heading">
              <h1 >
                Your Fake Brochure
              </h1>
              <h6 className="my-4 text-left"
                style={{
                  fontFamily: 'ProximaNova',
                  fontSize: '19px',
                  fontWeight: '600',
                  fontStretch: 'normal',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                  letterSpacing: '0.32px',
                  color: '#092748',
                }}
              >
                We work with an authorized third party screening company to complete a background and credit check on you at no additional cost. Your Fake Brochure is a compilation of your credit score, bank statements, rental statements, employment, criminal history, and landlord reviews. We take the indivation you have provided and highlight your best qualities. Your Fake Brochure makes you a competitive tenant and will in turn give you the lowest rates. Don’t forget, this process is completely anonymous! Your identity will only be revealed once you have accepted an offer.
              </h6>
            </div>
          </Col>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="label tabs example"
              >
                <Tab 
                  label="TENANT VIEW"
                  centered
                  style={{
                    width: '100%',
                    color: '#5c676f',
                    backgroundColor: 'white',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    border: 'solid 1px #33546d',
                    borderBottomColor: 'transparent'
                  }} 
              />
                <Tab 
                  label="LANDLORD VIEW" 
                  centered
                  style={{
                  color: 'white',
                  backgroundColor: '#092748',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  borderBottomColor: 'transparent'
                }} 
              />
              </Tabs>
            </Col>
          </Row>
        </Container>
        <Container
          style={{
            borderTop: 'transparent',
            border: 'solid 1px #979797',
            padding: '0px 4% 6% 4%'
          }}
        >
            <Row 
              style={{
                padding: '10px'
              }} 
            >
              <Col lg="1" md="2" sm="2" xs="3">
                  <img src="/img/group-3_1.png" alt="group-3_1.png" className="img-fluid img-thumbnail remove-icon-outline" />
              </Col>
              <Col lg="9" md="10" sm="10" xs="9">
                <Row>
                  <div className="text-left">
                    <h3>
                    First & Last Name
                    </h3>
                  </div>
                </Row>
                <Row>
                    <h1 className="text-left">
                    <Rating
                      name="review-1"
                      value={review_0}
                      onChange={(event, newValue) => {
                        set_review_0(newValue);
                      }}
                    />
                    </h1>
                </Row>
                <Row>
                  <h6 className="text-left">
                  4845 Saturn St, Los Angeles
                  </h6>
                </Row>
              </Col>
            </Row>
            <hr className="mb-4"></hr>
            <Row>
              <Col>
                <Row>
                  <Col>
                  <span>
                   <Row>
                    <Col className="px-auto text-center">
                      <>
                        <Typography id="range-slider" gutterBottom></Typography>
                        <ThemeProvider theme={muiTheme}>
                          <Slider
                            value={720}
                            valueLabelDisplay="on"
                            aria-labelledby="range-slider"
                            min={300}
                            max={850}
                          />
                        </ThemeProvider>
                      </>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6>
                      350
                      </h6>
                    </Col>
                    <Col>
                    <h6>
                      Credit Score
                    </h6>
                    </Col>
                    <Col>
                      <h6>
                        850
                      </h6>
                    </Col>
                  </Row>
                </span>
                  </Col>
                </Row>
                <Row>
                  <Col 
                    className="ml-2 my-2"
                    lg={5}
                    sm={10}
                    xs={10}
                    style={{
                      borderRadius: '2px',
                      backgroundColor: '#f5f5f5',
                      margin: '1% 1%',
                      padding: '2% 15px'
                    }}
                  >
                    <Row>
                      <Col>
                        <h6>
                          3
                        </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h6>
                        Active Tradelines
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col 
                    className="ml-2 my-2"
                    lg={5}
                    sm={10}
                    xs={10}
                    style={{
                      borderRadius: '2px',
                      backgroundColor: '#f5f5f5',
                      margin: '1% 1%',
                      padding: '2% 15px'
                    }}
                  >
                    <Row>
                      <Col>
                        <h6>
                          0
                        </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h6>
                        Closed Tradelines
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col 
                    className="ml-2 my-2"
                    lg={5}
                    sm={10}
                    xs={10}
                    style={{
                      borderRadius: '2px',
                      backgroundColor: '#f5f5f5',
                      margin: '1% 1%',
                      padding: '2% 15px'
                    }}
                  >
                    <Row>
                      <Col>
                        <h6>
                          0
                        </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h6>
                        Open Collections
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col 
                    className="ml-2 my-2"
                    lg={5}
                    sm={10}
                    xs={10}
                    style={{
                      borderRadius: '2px',
                      backgroundColor: '#f5f5f5',
                      margin: '1% 1%',
                      padding: '2% 15px'
                    }}
                  >
                    <Row>
                      <Col>
                        <h6>
                          0
                        </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h6>
                        Closed Collection
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col 
                    className="ml-2 my-2"
                    lg={5}
                    sm={10}
                    xs={10}
                    style={{
                      borderRadius: '2px',
                      backgroundColor: '#f5f5f5',
                      margin: '1% 1%',
                      padding: '2% 15px'
                    }}
                  >
                    <Row>
                      <Col>
                        <h6>
                          0
                        </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h6>
                        Evictions Recordss
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col 
                    className="ml-2 my-2"
                    lg={5}
                    sm={10}
                    xs={10}
                    style={{
                      borderRadius: '2px',
                      backgroundColor: '#f5f5f5',
                      margin: '1% 1%',
                      padding: '2% 15px'
                    }}
                  >
                    <Row>
                      <Col>
                        <h6>
                          0
                        </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h6>
                        Public Records
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="ml-4 my-2" lg="5">
                    <div>
                      <Row>
                        <h3>
                          $4,500
                        </h3>
                      </Row>
                      <Row>
                        <h6>
                          Total Monthly income
                        </h6>
                      </Row>
                    </div>
                  </Col>
                  <Col className="ml-4 my-2" lg="5">
                    <div>
                      <Row>
                        <h3>
                        June 1st
                        </h3>
                      </Row>
                      <Row>
                        <h6>
                          Desired Move-In Date
                        </h6>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col className="ml-4 my-2">
                    <h6 className="text-left">
                      About Me
                    </h6>
                    <h6 className="my-4 text-left"
                      style={{
                      fontFamily: 'ProximaNova',
                      fontSize: '19px',
                      fontWeight: 'normal',
                      fontStretch: 'normal',
                      fontStyle: 'normal',
                      lineHeight: '1.27',
                      letterSpacing: '0.25px',
                      color: '#092748',
                    }}
              >                      I am a full-time marketing professional who would like to rent a reliable and safe area for the long term.
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col className="ml-4 my-2">
                    <h6 className="text-left">
                      My Interests
                    </h6>
                    <Row>
                      <Col lg="4">
                        <ul>
                          <li> Music</li>
                          <li> Gardening</li>
                          <li> Dance</li>
                        </ul>
                      </Col>
                      <Col lg="4">
                        <ul>
                          <li> Learning</li>
                          <li> Writing</li>
                          <li> Painting</li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="ml-4 my-2">
                    <h6 className="text-left">
                      Pets
                    </h6>
                    <h6>
                    1 Medium Size Dog
                    </h6>
                    <h6 className="my-4 text-left"
                      style={{
                      fontFamily: 'ProximaNova',
                      fontSize: '15px',
                      fontWeight: 'normal',
                      fontStretch: 'normal',
                      fontStyle: 'normal',
                      lineHeight: '1.27',
                      letterSpacing: '0.25px',
                      color: '#092748',
                    }}
                    > 
                    1 Medium Size Dog
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <h4 className="text-left my-4 pl-4">
              Rental History
              </h4>
            </Row>
            <Row>
              <Col 
                className="mx-4 my-4"
                style={{
                  border: 'solid 1px #d8d8d8',
                  padding: '1em 2em'
                }}
              >
                <div>
                  <Row>
                    <p className="text-left"
                      style={{
                        fontFamily: 'Arial',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                        margin: '-8px 0'
                      }}
                    >
                    Current Residence
                    </p>
                  </Row>
                  <br></br>
                  <Row>
                    <h6 className="text-left">
                    Address
                    </h6>
                  </Row>
                  <Row>
                    <h6 className="text-left"
                      style={{
                        fontFamily: 'ProximaNova',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                      }}
                    >
                    1131 Homeside St. Culver City, CA 91203 
                    </h6>
                  </Row>
                  <br></br>
                  <Row>
                    <h6 className="text-left">
                    Monthly Rent
                    </h6>
                  </Row>
                  <Row>
                  <h6 className="text-left"
                      style={{
                        fontFamily: 'ProximaNova',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                      }}
                    >
                    $1,725
                    </h6>
                  </Row>
                  <br></br>
                  <Row>
                    <h6 className="text-left">
                    Duration of Stay
                    </h6>
                  </Row>
                  <Row>
                  <h6 className="text-left"
                      style={{
                        fontFamily: 'ProximaNova',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                      }}
                    >
                     June 2019 - Present
                    </h6>
                  </Row>
                  <br></br>
                  <Row>
                    <h6 className="text-left">
                    Reason for leaving
                    </h6>
                  </Row>
                  <Row>
                  <h6 className="text-left"
                      style={{
                        fontFamily: 'ProximaNova',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                      }}
                    >
                      Got a new job, looking for a new place closer to work.
                    </h6>
                  </Row>
                </div>
              </Col>
              <Col 
                className="mx-4 my-4"
                style={{
                  border: 'solid 1px #d8d8d8',
                  padding: '1em 2em'
                }}
              >
                <div>
                  <Row>
                    <p className="text-left"
                      style={{
                        fontFamily: 'Arial',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                        margin: '-8px 0'
                      }}
                    >
                    Previous Residence
                    </p>
                  </Row>
                  <br></br>
                  <Row>
                    <h6 className="text-left">
                    Address
                    </h6>
                  </Row>
                  <Row>
                    <h6 className="text-left"
                      style={{
                        fontFamily: 'ProximaNova',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                      }}
                    >
                    1131 Shirly Lane Los Angeles, CA 90016  
                    </h6>
                  </Row>
                  <br></br>
                  <Row>
                    <h6 className="text-left">
                    Monthly Rent
                    </h6>
                  </Row>
                  <Row>
                  <h6 className="text-left"
                      style={{
                        fontFamily: 'ProximaNova',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                      }}
                    >
                    $1,650
                    </h6>
                  </Row>
                  <br></br>
                  <Row>
                    <h6 className="text-left">
                    Duration of Stay
                    </h6>
                  </Row>
                  <Row>
                  <h6 className="text-left"
                      style={{
                        fontFamily: 'ProximaNova',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                      }}
                    >
                     May 2017 - May 2019
                    </h6>
                  </Row>
                  <br></br>
                  <Row>
                    <h6 className="text-left">
                    Reason for leaving
                    </h6>
                  </Row>
                  <Row>
                  <h6 className="text-left"
                      style={{
                        fontFamily: 'ProximaNova',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: '0.27px',
                        color: '#092748',
                      }}
                    >
                      Relocated to a new and better apartment.
                    </h6>
                  </Row>
                </div>
              </Col>
            </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Col>
            <div>
              <div>
                <Row>
                  <Col className="text-center bedrooms-bathrooms-btn-row-align">
                  <Row>
                      <Col>
                        <h1 id="unique_features_header">
                          What’s next?
                        </h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h6 className="mt-4">
                          Now it’s time for the fun stuff! The following page will display your properties and their offer statuses.
                        </h6>
                      </Col>
                    </Row>
                    <Row className="my-4">
                      <Col>
                        <Button
                          variant="primary" 
                          className="btn barker-brochure-btn-blue"
                          size="lg"
                          style={{
                            height: '5em',
                            padding: '30px 30px',
                            fontFamily: 'ProximaNova',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            fontStretch: 'normal',
                            fontStyle: 'normal',
                            lineHeight: 'normal',
                            letterSpacing: '0.23px',
                            textAlign: 'center',
                            color: '#ffffff'
                          }}
                        >
                          VIEW MY OFFER STATUSES
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                    <div className="text-left section-heading"></div>
                </Row>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Container>
      </section>
    </>
  )
}