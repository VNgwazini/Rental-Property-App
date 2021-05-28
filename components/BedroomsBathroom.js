import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import axios from "axios";

import StateContext from "../pages/StateContext";
import DispatchContext from "../pages/DispatchContext";

import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { set } from "lodash";

export default function BedroomsBathrooms() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [studio, setStudio] = useState(false);
  const [oneBed, setOneBed] = useState(false);
  const [twoBed, setTwoBed] = useState(false);
  const [threePlusBed, setThreePlusBed] = useState(false);
  const [numBedrooms, setNumBedrooms] = useState(false);
  const clearBedrooms = () => {
    setStudio(false);
    setOneBed(false);
    setTwoBed(false);
    setThreePlusBed(false);
  };
  /* Bedrooms */

  const handleBed = (e) => {
    clearBedrooms();
    const v = e.target.value;
    switch (v) {
      case "0":
        setNumBedrooms(0);
        setStudio(true);
        break;
      case "1":
        setNumBedrooms(1);
        setOneBed(true);
        break;
      case "2":
        setNumBedrooms(2);
        setTwoBed(true);
        break;
      case "3+":
        setNumBedrooms(3);
        setThreePlusBed(true);
        break;
    }
  };

  /* Bathrooms */
  const [oneBa, setOneBa] = useState(false);
  const [twoBa, setTwoBa] = useState(false);
  const [threePlusBa, setThreePlusBa] = useState(false);
  const [numBathrooms, setNumBathrooms] = useState(false);

  const clearBa = () => {
    setOneBa(false);
    setTwoBa(false);
    setThreePlusBa(false);
  };
  const handleBa = (e) => {
    clearBa();
    const v = e.target.value;
    switch (v) {
      case "1":
        setNumBathrooms(1);
        setOneBa(true);
        break;
      case "2":
        setNumBathrooms(2);
        setTwoBa(true);
        break;
      case "3+":
        setNumBathrooms(3);
        setThreePlusBa(true);
        break;
    }
  };

  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);
  const [bdBaSize, setBdBaSize] = useState(false);

  var size;
  const clearSize = () => {
    setSmall(false);
    setMedium(false);
    setLarge(false);
  };
  const handleSize = (e) => {
    clearSize();
    const v = e.target.value;
    switch (v) {
      case "s":
        setBdBaSize("s");
        setSmall(true);
        break;
      case "m":
        setBdBaSize("m");
        setMedium(true);
        break;
      case "l":
        setBdBaSize("l");
        setLarge(true);
        break;
    }
  };
  const router = useRouter();
  const savePageState = () => {
    if (appState.serverStateID) {
      const response = axios
        .put("onboarding-states/" + appState.serverStateID, {
          headers: {
            Authorization: "Bearer " + appState.token,
          },
          user: appState.user.id,
          route: router.route,
        })
        .then((response) => {})
        .catch((error) => {
          console.log(error);
          console.log("An error occurred:", error.response);
        });
    } else {
      const response = axios
        .post("onboarding-states", {
          headers: {
            Authorization: "Bearer " + appState.token,
          },
          user: appState.user.id,
          route: router.route,
        })
        .then((response) => {
          appDispatch({
            serverStateID: response.data.id,
          });
        })
        .catch((error) => {
          console.log(error);
          console.log("An error occurred:", error.response);
        });
    }
  };
  const handleSubmit = async (values) => {
    try {
      const response = await axios
        .put("tenant-preferences/" + appState.tenantPreferencesID, {
          headers: {
            Authorization: "Bearer " + appState.token,
          },
          bedrooms: numBedrooms,
          bathrooms: numBathrooms,
          bd_ba_size: bdBaSize,
        })
        .then((response) => {
          console.log(response);
          Router.push("budget");
        })
        .catch((error) => {
          console.log(error);
          Router.push("budget");
          console.log("An error occurred:", error.response);
        });
      //TODO first check if create account was successful, then check if create account was for tenant
    } catch (error) {
      console.log("An error occurred:", error.response);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <section className="unique-features-Rectangle" id="unique-features">
        <Container>
          <Col></Col>
          <Col>
            <div className="text-center paragraph-heading">
              <h1 id="unique_features_header">Bedrooms & Bathrooms</h1>
              <p>Please select all that apply.</p>
              <Form
                className="bedrooms-bathrooms-btn-row-align"
                id="unique-features-form"
              >
                <Row>
                  <Col lg="2" sm="12" xs="12">
                    <div className="text-left bedrooms-bathrooms-btn-row-align">
                      <h6>Bedrooms:</h6>
                    </div>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="bedrooms"
                          id="bedrooms"
                          value={0}
                          active={studio}
                          onClick={handleBed}
                        >
                          Studio
                        </Button>
                      </>
                    </div>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="bedrooms"
                          id="bedrooms"
                          onClick={handleBed}
                          value="1"
                          active={oneBed}
                        >
                          1
                        </Button>
                      </>
                    </div>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="bathrooms"
                          id="bedrooms"
                          value="2"
                          onClick={handleBed}
                          active={twoBed}
                        >
                          2
                        </Button>
                      </>
                    </div>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="bathrooms"
                          id="bedrooms"
                          value="3+"
                          onClick={handleBed}
                          active={threePlusBed}
                        >
                          3+
                        </Button>
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="2" sm="12" xs="12">
                    <div className="text-left bedrooms-bathrooms-btn-row-align">
                      <h6>Bathrooms:</h6>
                    </div>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="bathrooms"
                          id="bathrooms"
                          value="1"
                          active={oneBa}
                          onClick={handleBa}
                        >
                          1
                        </Button>
                      </>
                    </div>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="bathrooms"
                          id="bathrooms"
                          value="2"
                          active={twoBa}
                          onClick={handleBa}
                        >
                          2
                        </Button>
                      </>
                    </div>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="bathrooms"
                          id="bathrooms"
                          value="3+"
                          active={threePlusBa}
                          onClick={handleBa}
                        >
                          3+
                        </Button>
                      </>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <></>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="2" sm="12" xs="12">
                    <div className="text-left bedrooms-bathrooms-btn-row-align">
                      <h6>Size:</h6>
                    </div>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="size"
                          id="size"
                          value="s"
                          active={small}
                          onClick={handleSize}
                        >
                          Small
                        </Button>
                      </>
                    </div>
                    <span>
                      <p>300-500 sq. ft.</p>
                    </span>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="size"
                          id="size"
                          value="m"
                          active={medium}
                          onClick={handleSize}
                        >
                          Medium
                        </Button>
                      </>
                    </div>
                    <span>
                      <p>550-750 sq. ft.</p>
                    </span>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <>
                        <Button
                          variant="primary"
                          className="bedrooms-bathrooms-btn-white"
                          type="button"
                          data-toggle="button"
                          name="size"
                          id="size"
                          value="l"
                          active={large}
                          onClick={handleSize}
                        >
                          Large
                        </Button>
                      </>
                    </div>
                    <span>
                      <p>800+ sq. ft. </p>
                    </span>
                  </Col>
                  <Col lg="2" sm="6" xs="6">
                    <div className="text-center bedrooms-bathrooms-btn-row-align">
                      <></>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="10">
                    <div className="bedrooms-bathrooms-btn-row-align">
                      <Button
                        variant="primary"
                        className="mt-2 mx-4 float-right"
                        size="lg"
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </Button>
                      <Link href="budget" passHref>
                        <Button
                          variant="outline-primary"
                          className="mt-2 float-right"
                          size="lg"
                        >
                          SKIP THIS STEP
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className="text-left section-heading"></div>
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
