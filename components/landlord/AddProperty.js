import NavbarLandlord from "./NavbarLandlord";
import Autosuggest from "react-autosuggest";

import {
  Form,
  Row,
  Col,
  Card,
  Media,
  Button,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";

import { Slider, Typography } from "@material-ui/core";
import { useState } from "react";

import AutoSuggest from "../AutoSuggest";
var isSynced = false;
function Header() {
  return (
    <>
      <section className="mt-5 pt-5">
        <Container>
          <Row>
            <Col lg="7">
              <h1>Add Apartment</h1>
            </Col>
            <Col lg="2">
              <Button variant="link" className="float-right">
                Cancel
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

function SyncListing() {
  const [value, setValue] = useState(false);

  const handleChange = (event) => {
    setValue(true);
    isSynced = true;
  };
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter URL"
          aria-label="Enter URL"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleChange}>
            SYNC LISTING
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {isSynced ? <Amenities /> : <></>}
    </>
  );
}

function Amenities() {
  const [preValues, setPreValues] = useState(true);
  const handleClick = (event, newValue) => {
    setPreValues(newValue);
  };
  return (
    <>
      <Media className="mt-5">
        <img
          width={215}
          height={124}
          className="mr-3"
          src="/img/houses.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <ul>
            <li>Property Address</li>
            <li>1 bd 1ba 589 sqft</li>
            <li>Price</li>
          </ul>
        </Media.Body>
      </Media>
      {preValues ? (
        <>
          <hr />
          <h2>Confirm Amenities</h2>
          <p>Complete and accurate details provides good tenant leads</p>

          <Form>
            <Form.Check type="checkbox" id="ac" label="A/C" />
            <Form.Check
              type="checkbox"
              id="central_heating"
              label="Central Heating"
            />
            <Form.Check
              type="checkbox"
              id="hard_floors"
              label="Hardwood Floors"
            />
            <Form.Check
              type="checkbox"
              id="offstreet_parking"
              label="Off-street Parking"
            />
            <Form.Check
              type="checkbox"
              id="covered_parking"
              label="Covered Parking"
            />
            <Form.Check type="checkbox" id="dishwasher" label="Dishwasher" />
            <Form.Check
              type="checkbox"
              id="onsite_laundry"
              label="On-site Laundry"
            />
            <Form.Check
              type="checkbox"
              id="laundry_in_unit"
              label="Laundry in unit"
            />
            <Form.Check
              type="checkbox"
              id="stainless_steel_appliances"
              label="Stainless steel appliances"
            />
          </Form>
          <p>
            <GrAddCircle />
            <Button variant="link">Add Another Apartment</Button>
          </p>
        </>
      ) : (
        ""
      )}
      <Button variant="primary" className="mt-3" onClick={handleClick}>
        Continue
      </Button>
    </>
  );
}
function ApartmentDetails() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "50rem" }}>
                <Card.Body>
                  <h2>Apartment Details</h2>
                  <SyncListing />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

function valuetext(value) {
  return `${value}°C`;
}

function TenantCriteria() {
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <section className="mt-5">
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "50rem" }}>
                <Card.Body>
                  <Card.Title as="h1">Tenant Criteria</Card.Title>
                  <h4>Credit Range</h4>
                  <Typography id="range-slider" gutterBottom></Typography>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                  <p>Monthly Income Range</p>
                  <ul>
                    <li className="d-inline-block">
                      <Button variant="outline-dark">2x</Button>
                    </li>
                    <li className="d-inline ml-2">
                      <Button variant="outline-dark">2.5x</Button>
                    </li>
                    <li className="d-inline ml-2">
                      <Button variant="outline-dark">3x</Button>
                    </li>
                    <li className="d-inline ml-2">the monthly rent</li>
                  </ul>

                  <Form>
                    <Form.Check
                      type="checkbox"
                      id="evictions"
                      label="No evictions"
                    />
                  </Form>
                  <Button variant="primary" className="mt-3">
                    Submit Listing
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default function AddProperty() {
  return (
    <>
      <NavbarLandlord />
      <Header />
      <ApartmentDetails />
      <TenantCriteria />
      <p></p>
    </>
  );
}
