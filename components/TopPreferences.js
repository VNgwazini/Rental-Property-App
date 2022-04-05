import { Row, Col, Container, Button } from "react-bootstrap";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import FadeIn from 'react-fade-in';

export default function TopPreferences() {

  const router = useRouter();
  const [location, setLocation] = useState(false);
  const handleLocation = (event) => {
    setLocation((location) => !location);
  };

  const [safety, setSafety] = useState(false);
  const handleSafety = (event) => {
    setSafety((safety) => !safety);
  };

  const [bdba, setBdba] = useState(false);
  const handleBdba = (event) => {
    setBdba((bdba) => !bdba);
  };

  const [lease_length, setLeaseLength] = useState(false);
  const handleLeaseLength = (event) => {
    setLeaseLength((lease_length) => !lease_length);
  };
  const [uniqeFeatures, setUniqueFeatures] = useState(false);
  const handleUniqueFeatures = (event) => {
    setUniqueFeatures((uniqeFeatures) => !uniqeFeatures);
  };

  const [budget, setBudget] = useState(false);
  const handleBudget = (event) => {
    setBudget((budget) => !budget);
  };

  const handleSubmit = async () => {
    axios
      .post("tenant-preferences", {
        headers: {
          Authorization: "Bearer ",
        },
        location: location,
        safety: safety,
        beds_baths: bdba,
        budget: budget,
        unique_features: uniqeFeatures,
        lease_length: lease_length,
        user: "",
      })
      .then((response) => {
        appDispatch({
          type: "tenantPreferencesID",
          tenantPreferencesID: response.data.id,
        });
        Router.push("unique_features");
        console.log(response.data)
      })
      .catch((error) => {
        // Handle error.
        Router.push("unique_features");
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <>
        <Container className="text-center" style={{marginTop: '70px'}}>
          <FadeIn>
            <h2>Top Preferences</h2>
            <p>
              Please tell us what made these properties of interest to you. Check
              all that apply.
            </p>
            <Row>
              <Col className="my-4">
                <div className="mx-auto text-center top-pref-Rectangle mt-4">
                  <a className=" stretched-link" onClick={handleLocation}></a>
                  <Row>
                    <Col>
                      {location ? (
                        <div>
                          <img
                            src="/img/group-2-check.png"
                            alt="group-2-check.png"
                            className="img-fluid img-thumbnail image-vertical-align remove-icon-outline"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <img
                          src="/img/039-real-estate.png"
                          alt="039-real-estate.png"
                          className="img-fluid img-thumbnail header-vertical-align remove-icon-outline"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <h5 className="header-vertical-align">Location</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="my-4">
                <div className="mx-auto text-center top-pref-Rectangle mt-4">
                  <a className=" stretched-link" onClick={handleSafety}></a>
                  <Row>
                    <Col>
                      {safety ? (
                        <div>
                          <img
                            src="/img/group-2-check.png"
                            alt="group-2-check.png"
                            className="img-fluid img-thumbnail image-vertical-align remove-icon-outline"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <img
                          src="/img/007-shield.png"
                          alt="007-shield.png"
                          className="img-fluid img-thumbnail header-vertical-align remove-icon-outline"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <h5 className="header-vertical-align">Safety</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="my-4">
                <div className="mx-auto text-center top-pref-Rectangle mt-4">
                  <a className=" stretched-link" onClick={handleBdba}></a>
                  <Row>
                    <Col>
                      {bdba ? (
                        <div>
                          <img
                            src="/img/group-2-check.png"
                            alt="group-2-check.png"
                            className="img-fluid img-thumbnail image-vertical-align remove-icon-outline"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <img
                          src="/img/022-real-estate.png"
                          alt="022-real-estate.png"
                          className="img-fluid img-thumbnail header-vertical-align remove-icon-outline"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <h5 className="header-vertical-align">Beds/Bathrooms</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="my-4">
                <div className="mx-auto text-center top-pref-Rectangle mt-4">
                  <a className=" stretched-link" onClick={handleLeaseLength}></a>
                  <Row>
                    <Col>
                      {lease_length ? (
                        <div>
                          <img
                            src="/img/group-2-check.png"
                            alt="group-2-check.png"
                            className="img-fluid img-thumbnail image-vertical-align remove-icon-outline"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <img
                          src="/img/039-interview.png"
                          alt="039-interview.png"
                          className="img-fluid img-thumbnail header-vertical-align remove-icon-outline"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <h5 className="header-vertical-align">Lease Length</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="my-4">
                <div className="mx-auto text-center top-pref-Rectangle mt-4">
                  <a
                    className=" stretched-link"
                    onClick={handleUniqueFeatures}
                  ></a>
                  <Row>
                    <Col>
                      {uniqeFeatures ? (
                        <div>
                          <img
                            src="/img/group-2-check.png"
                            alt="group-2-check.png"
                            className="img-fluid img-thumbnail image-vertical-align remove-icon-outline"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <img
                          src="/img/042-award.png"
                          alt="042-award.png"
                          className="img-fluid img-thumbnail header-vertical-align remove-icon-outline"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <h5 className="header-vertical-align">Unique Features</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="my-4">
                <div className="mx-auto text-center top-pref-Rectangle mt-4">
                  <a className="" onClick={handleBudget}>
                  <Row>
                    <Col>
                      {budget ? (
                        <div>
                          <img
                            src="/img/group-2-check.png"
                            alt="group-2-check.png"
                            className="img-fluid img-thumbnail image-vertical-align remove-icon-outline"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <img
                          src="/img/036-cash.png"
                          alt="036-cash.png"
                          className="img-fluid img-thumbnail header-vertical-align remove-icon-outline"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div>
                        <h5 className="header-vertical-align">Budget</h5>
                      </div>
                    </Col>
                  </Row>
                  </a>
                </div>
                <Link href="unique_features" passHref>
                  <Button
                    variant="light"
                    className="my-4 mr-4"
                    onClick={handleSubmit}
                    style={{
                      color: '#0b2f57',
                    }}
                  >
                    SKIP THIS STEP
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  className="my-4"
                  onClick={handleSubmit}
                >
                  SUBMIT
                </Button>{" "}
              </Col>
            </Row>
          </FadeIn>
        </Container>
    </>
  );
}
