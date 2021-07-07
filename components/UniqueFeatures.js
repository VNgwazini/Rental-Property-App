import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";

export default function UniqueFeatures() {
  const router = useRouter();
  const [washer_dryer, setWasherDryer] = useState("none");
  const [heat_air_conditioning, setHeatAir] = useState("none");
  const [pets_allowed, setPetsAllowed] = useState("none");
  const [furnished, setFurnished] = useState("none");
  const [dishwasher, setDishwasher] = useState("none");
  const [washer_dryer_connection, setWasherDryerConnection] = useState("none");
  const [balcony_patio, setBalconyPatio] = useState("none");
  const [close_to_parking, setCloseToParking] = useState("none");
  const [utilities_included, setUtilitiesIncluded] = useState("none");
  const [parking_covered, setParkingCovered] = useState("none");
  const [gated_community, setGatedCommunity] = useState("none");
  const [swimming_pool, setSwimmingPool] = useState("none");
  const [fitness_center, setFitnessCenter] = useState("none");
  const [garage_access_gated, setGarageAccessGated] = useState("none");
  const [pub_transportation, setPubTransportation] = useState("none");
  const [hardwood_floors, setHardwoodFloors] = useState("none");
  const [carpet, setCarpet] = useState("none");
  const [package_lockers, setPackageLockers] = useState("none");
  const [ev_chrg_station, setEV] = useState("none");
  const [wifi, setWifi] = useState("none");
  const [secure_bldn, setSecureBldn] = useState("none");
  const [resident_parking, setResidentParking] = useState("none");

  const handleSubmit = async () => {
    axios
      .put("tenant-preferences/" ,{
        headers: {
          Authorization: "Bearer "
        },
        resident_parking: resident_parking,
        secure_bldn: secure_bldn,
        wifi: wifi,
        ev_chrg_station: ev_chrg_station,
        package_lockers: package_lockers,
        carpet: carpet,
        hardwood_floors: hardwood_floors,
        pub_transportation: pub_transportation,
        washer_dryer: washer_dryer,
        heat_air_conditioning: heat_air_conditioning,
        pets_allowed: pets_allowed,
        furnished: furnished,
        dishwasher: dishwasher,
        washer_dryer_connection: washer_dryer_connection,
        balcony_patio: balcony_patio,
        close_to_parking: close_to_parking,
        garage_access_gated: garage_access_gated,
        utilities_included: utilities_included,
        parking_covered: parking_covered,
        gated_community: gated_community,
        swimming_pool: swimming_pool,
        fitness_center: fitness_center,
        user: "",
      })
      .then((response) => {
        // Handle success.
        Router.push("safety");
      })
      .catch((error) => {
        // Handle error.
        console.log(error);
        Router.push("safety");
        console.log("An error occurred:", error.response);
      });
  };

  console.log();
  return (
    <>
      <section className="unique-features-Rectangle" id="unique-features">
        <Container>
          <Col>
            <div className="text-center paragraph-heading">
              <h1 id="unique_features_header">Unique Features</h1>
              <Form
                className="unique-features-row-align"
                id="unique-features-form"
              >
                <Row>
                  <Col lg="4" sm="6" xs="6"></Col>
                  <Col lg="4" sm="3" xs="3" id="must-have">
                    <div className="text-center unique-features-row-align">
                      <h4>Must have</h4>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <h4>Nice to have</h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>In-unit washer and dryer</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="washer_dryer"
                          value="must"
                          onClick={(e) => {
                            setWasherDryer(e.target.value);
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
                          name="washer_dryer"
                          value="nice"
                          onClick={(e) => {
                            setWasherDryer(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Heat and air conditioning</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="heat_air_conditioning"
                          value="must"
                          onClick={(e) => {
                            setHeatAir(e.target.value);
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
                          name="heat_air_conditioning"
                          value="nice"
                          onClick={(e) => {
                            setHeatAir(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Pets allowed</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="pets_allowed"
                          value="must"
                          onClick={(e) => {
                            setPetsAllowed(e.target.value);
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
                          name="pets_allowed"
                          value="nice"
                          onClick={(e) => {
                            setPetsAllowed(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Furnished</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="furnished"
                          value="must"
                          onClick={(e) => {
                            setFurnished(e.target.value);
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
                          name="furnished"
                          value="nice"
                          onClick={(e) => {
                            setFurnished(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Dishwasher</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="dishwasher"
                          value="must"
                          onClick={(e) => {
                            setDishwasher(e.target.value);
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
                          name="dishwasher"
                          value="nice"
                          onClick={(e) => {
                            setDishwasher(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Washer and dryer connections.</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="washer_dryer_connection"
                          value="must"
                          onClick={(e) => {
                            setWasherDryerConnection(e.target.value);
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
                          name="washer_dryer_connection"
                          value="nice"
                          onClick={(e) => {
                            setWasherDryerConnection(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Balcony/Patio</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="balcony_patio"
                          value="must"
                          onClick={(e) => {
                            setBalconyPatio(e.target.value);
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
                          name="balcony_patio"
                          value="nice"
                          onClick={(e) => {
                            setBalconyPatio(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Close to parking</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="close_to_parking"
                          value="must"
                          onClick={(e) => {
                            setCloseToParking(e.target.value);
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
                          name="close_to_parking"
                          value="nice"
                          onClick={(e) => {
                            setCloseToParking(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Utilities included</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="utilities_included"
                          value="must"
                          onClick={(e) => {
                            setUtilitiesIncluded(e.target.value);
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
                          name="utilities_included"
                          value="nice"
                          onClick={(e) => {
                            setUtilitiesIncluded(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Garage/covered parking</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="parking_covered"
                          value="must"
                          onClick={(e) => {
                            setParkingCovered(e.target.value);
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
                          name="parking_covered"
                          value="nice"
                          onClick={(e) => {
                            setParkingCovered(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Gated community</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="gated_community"
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
                          name="gated_community"
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
                      <h6>Swimming pool</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="swimming_pool"
                          value="must"
                          onClick={(e) => {
                            setSwimmingPool(e.target.value);
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
                          name="swimming_pool"
                          value="nice"
                          onClick={(e) => {
                            setSwimmingPool(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Fitness center</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="fitness_center"
                          value="must"
                          onClick={(e) => {
                            setFitnessCenter(e.target.value);
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
                          name="fitness_center"
                          value="nice"
                          onClick={(e) => {
                            setFitnessCenter(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Gated garage access</h6>
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
                            setGarageAccessGated(e.target.value);
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
                            setGarageAccessGated(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Access to public transportation</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="pub_transportation"
                          value="must"
                          onClick={(e) => {
                            setPubTransportation(e.target.value);
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
                          name="pub_transportation"
                          value="nice"
                          onClick={(e) => {
                            setPubTransportation(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Hardwood floors</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="hardwood_floors"
                          value="must"
                          onClick={(e) => {
                            setHardwoodFloors(e.target.value);
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
                          name="hardwood_floors"
                          value="nice"
                          onClick={(e) => {
                            setHardwoodFloors(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Carpet</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="carpet"
                          value="must"
                          onClick={(e) => {
                            setCarpet(e.target.value);
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
                          name="carpet"
                          value="nice"
                          onClick={(e) => {
                            setCarpet(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Package lockers</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="package_lockers"
                          value="must"
                          onClick={(e) => {
                            setPackageLockers(e.target.value);
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
                          name="package_lockers"
                          value="nice"
                          onClick={(e) => {
                            setPackageLockers(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Electric car charging stations</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="ev_chrg_station"
                          value="must"
                          onClick={(e) => {
                            setEV(e.target.value);
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
                          name="ev_chrg_station"
                          value="nice"
                          onClick={(e) => {
                            setEV(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Wireless internet access</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="wifi"
                          value="must"
                          onClick={(e) => {
                            setWifi(e.target.value);
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
                          name="wifi"
                          value="nice"
                          onClick={(e) => {
                            setWifi(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Secure building</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="secure_bldn"
                          value="must"
                          onClick={(e) => {
                            setSecureBldn(e.target.value);
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
                          name="secure_bldn"
                          value="nice"
                          onClick={(e) => {
                            setSecureBldn(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6" xs="6">
                    <div className="text-left unique-features-row-align">
                      <h6>Resident Parking</h6>
                    </div>
                  </Col>
                  <Col lg="4" sm="3" xs="3">
                    <div className="text-center unique-features-row-align">
                      <>
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          name="resident_parking"
                          value="must"
                          onClick={(e) => {
                            setResidentParking(e.target.value);
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
                          name="resident_parking"
                          value="nice"
                          onClick={(e) => {
                            setResidentParking(e.target.value);
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Container>
        <Container>
          <Row>
            <Col lg="12" className="pr-4 pb-3">
              <Button
                variant="primary"
                className="mt-4 mx-3 float-right"
                size="lg"
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>{" "}
              <Link href="safety" passHref>
                <Button
                  variant="outline-secondary"
                  className="mt-4 float-right"
                  size="lg"
                  onClick={handleSubmit}
                  style={{
                    color: '#092748'
                  }}
                >
                  SKIP THIS STEP
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
