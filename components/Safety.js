import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Router from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";
import StateContext from "../pages/StateContext";
import DispatchContext from "../pages/DispatchContext";

export default function Safety() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const router = useRouter();

  const [electric_key_entry, setElectricKeyEntry] = useState();
  const [gated_garage_access, setGatedGarageAccess] = useState();
  const [gated_community, setGatedCommunity] = useState();
  const [low_crime_rate, setLowCrimeRate] = useState();
  const [minimum_criminal_history, setMinimalCriminalHistory] = useState();
  const [controlled_access, setControlledAccess] = useState();
  const [concierge, setConcierge] = useState();
  const [on_site_security, setOnSiteSecurity] = useState();
  const [courtyard_pet_potty_areas, setCourtyardPetPottyAreas] = useState();
  const [video_cameras, setVideoCameras] = useState();
  const handleSubmit = async () => {
    axios
      .put("tenant-preferences/" + appState.tenantPreferencesID, {
        headers: {
          Authorization: "Bearer " + appState.token,
        },
        electric_key_entry: electric_key_entry,
        gated_garage_access: gated_garage_access,
        gated_community: gated_community,
        low_crime_rate: low_crime_rate,
        minimum_criminal_history: minimum_criminal_history,
        controlled_access: controlled_access,
        concierge: concierge,
        on_site_security: on_site_security,
        courtyard_pet_potty_areas: courtyard_pet_potty_areas,
        video_cameras: video_cameras,
      })
      .then((response) => {
        // Handle success.
        Router.push("bedrooms_bathrooms");
      })
      .catch((error) => {
        // Handle error.
        console.log(error);
        Router.push("bedrooms_bathrooms");
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <>
      <section className="unique-features-Rectangle">
        <Container>
          <Col></Col>
          <Col>
            <div className="text-center paragraph-heading">
              <h1 id="unique_features_header">Safety</h1>
              <Form className="unique-features-row-align">
                <Row>
                  <Col lg="4" sm="6" xs="6"></Col>
                  <Col lg="4" sm="3" xs="3" id="must-have">
                    <div className="text-center unique-features-row-align">
                      <h6 className="unique-have-header">Must have</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <h6 className="unique-have-header">Nice to have</h6>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">Electric key entry</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="electric_key_entry"
                          value="must"
                          onClick={(e) => {
                            setElectricKeyEntry(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="electric_key_entry"
                          value="nice"
                          onClick={(e) => {
                            setElectricKeyEntry(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">Gated garage access</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="garage_access_gated"
                          value="must"
                          onClick={(e) => {
                            setGatedGarageAccess(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="garage_access_gated"
                          value="nice"
                          onClick={(e) => {
                            setGatedGarageAccess(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">Gated community</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="community_gated"
                          value="must"
                          onClick={(e) => {
                            setGatedCommunity(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="community_gated"
                          value="nice"
                          onClick={(e) => {
                            setGatedCommunity(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">Low crime rate</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="low_crime_rate"
                          value="must"
                          onClick={(e) => {
                            setLowCrimeRate(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="low_crime_rate"
                          value="nice"
                          onClick={(e) => {
                            setLowCrimeRate(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">
                        Tenants with minimum criminal history
                      </h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="min_crime_history"
                          value="must"
                          onClick={(e) => {
                            setMinimalCriminalHistory(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="min_crime_history"
                          value="nice"
                          onClick={(e) => {
                            setMinimalCriminalHistory(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">Controlled Access</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="controlled_access"
                          value="must"
                          onClick={(e) => {
                            setControlledAccess(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="controlled_access"
                          value="nice"
                          onClick={(e) => {
                            setControlledAccess(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">Concierge</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="concierge"
                          value="must"
                          onClick={(e) => {
                            setConcierge(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="concierge"
                          value="nice"
                          onClick={(e) => {
                            setConcierge(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">On-site security</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="on_site_security"
                          value="must"
                          onClick={(e) => {
                            setOnSiteSecurity(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="on_site_security"
                          value="nice"
                          onClick={(e) => {
                            setOnSiteSecurity(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">
                        Courtyard pet potty areas?
                      </h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="courtyard_pet_potty"
                          value="must"
                          onClick={(e) => {
                            setCourtyardPetPottyAreas(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="courtyard_pet_potty"
                          value="nice"
                          onClick={(e) => {
                            setCourtyardPetPottyAreas(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6 className="unique-have">Video cameras</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="video_cameras"
                          value="must"
                          onClick={(e) => {
                            setVideoCameras(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="video_cameras"
                          value="nice"
                          onClick={(e) => {
                            setVideoCameras(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row className="section-heading">
                  <Col
                    lg="6"
                    sm="5"
                    xs="5"
                    className="text-right mx-auto"
                  ></Col>
                </Row>
                <Row className="my-4 button-group" role="group">
                  <Col>
                    <ButtonGroup>
                      <Link href="bedrooms_bathrooms" passHref>
                        <Button
                          variant="outline-primary"
                          href="lease_length"
                          className="mr-4"
                          style={{
                            whiteSpace: "nowrap",
                            borderRadius: ".25rem !important",
                            color: "#092748",
                          }}
                        >
                          SKIP THIS STEP
                        </Button>
                      </Link>
                      <Button
                        variant="primary"
                        style={{
                          whiteSpace: "nowrap",
                          borderRadius: ".25rem !important",
                        }}
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="section-heading"></div>
                </Row>
              </Form>
            </div>
          </Col>
          <Col></Col>
        </Container>
      </section>
    </>
  );
}
