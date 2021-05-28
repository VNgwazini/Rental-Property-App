import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ButtonGroup,
  Slider,
} from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import StateContext from "../pages/StateContext";
import DispatchContext from "../pages/DispatchContext";

export default function AboutYourself() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [aboutSelf, setAboutSelf] = useState(null);
  const [volCom, setVolCol] = useState(null);
  const router = useRouter();

  const handleSubmit = async (values) => {
    const response = await axios
      .put("tenant-preferences/" + appState.tenantPreferencesID, {
        headers: {
          Authorization: "Bearer " + appState.token,
        },
        tenant_about_self_info: aboutSelf,
        tenant_about_self_vol_com: volCom,
      })
      .then((response) => {
        Router.push("one_time_app");
      })
      .catch((error) => {
        Router.push("one_time_app");
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <>
      <body id="gradient-orange">
        <section>
          <Container>
            <Row>
              <Col>
                <h1 className="text-center paragraph-heading">
                  Tell us about yourself
                </h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="mt-4 text-center">
                  You’re “barking” up the right tree! Customize your profile to
                  strengthen your Fake Brochure.
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <div className="text-center paragraph-heading about-yourself-Rectangle">
              <div className="text-center section-heading">
                <img
                  src="/img/group-3_1.png"
                  alt="group-3_1.png"
                  className="section-heading img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
              <h1 id="unique_features_header">First & Last Name</h1>
              <Form
                className="bedrooms-bathrooms-btn-row-align"
                id="unique-features-form"
              >
                <Row>
                  <Col>
                    <div className="text-left bedrooms-bathrooms-btn-row-align">
                      <>
                        <div className="form-group">
                          <label>
                            <h6>
                              Tell us anything else you would like the landlord
                              to know about you:
                            </h6>
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="15"
                            style={{
                              borderRadius: "3px",
                              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
                            }}
                            onChange={(e) => {
                              setAboutSelf(e.target.value);
                            }}
                          ></textarea>
                        </div>
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-left bedrooms-bathrooms-btn-row-align">
                      <>
                        <div className="form-group">
                          <label>
                            <h6>Volunteer and community involvement:</h6>
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="15"
                            onChange={(e) => {
                              setVolCol(e.target.value);
                            }}
                            style={{
                              borderRadius: "3px",
                              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
                            }}
                          ></textarea>
                        </div>
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-left my-2">
                    <h6>
                      Would you like to upload any recommendation letters/W2
                      forms?
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-left" lg={1} xs={3}>
                    <img
                      src="/img/cloud-upload.png"
                      alt="cloud-upload.pngg"
                      className="img-fluid img-thumbnail remove-icon-outline"
                      style={{
                        height: "2em",
                        width: "2em",
                      }}
                    />
                  </Col>
                  <Col className="text-left">
                    <input
                      type="file"
                      className="form-control-file my-auto"
                      id="exampleFormControlFile2"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="text-left" lg={1} xs={3}>
                    <img
                      src="/img/cloud-yes.png"
                      alt="cloud-yes.png"
                      className="img-fluid img-thumbnail remove-icon-outline"
                      style={{
                        height: "2em",
                        width: "2em",
                      }}
                    />
                  </Col>
                  <Col className="text-left">
                    <input
                      type="file"
                      className="form-control-file my-auto"
                      id="exampleFormControlFile2"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="text-left my-2"></Col>
                </Row>
                <Row>
                  <Col>
                    <Link href="" passHref>
                      <Button
                        className="float-right"
                        size="lg"
                        onClick={handleSubmit}
                      >
                        Next
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <div className="text-left section-heading"></div>
                </Row>
              </Form>
            </div>
            <Row>
              <Col>
                <Row>
                  <div className="text-left" id="one-time-app-footer"></div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </body>
    </>
  );
}
