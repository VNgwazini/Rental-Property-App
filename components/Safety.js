import {
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles
} from "@material-ui/core"
import FadeIn from 'react-fade-in';

export default function Safety() {

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
      .put("tenant-preferences/", {
        headers: {
          Authorization: "Bearer ",
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

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      boxShadow: '0 0px 5px 2px #d3d3d3',
    },
  });

  function createData(name, must, nice) {
    return { name, must, nice };
  }

  const rows = [
  createData('Electric key entry',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="electric_key_entry"
  value="must"
  onClick={(e) => {
    setElectricKeyEntry(e.target.value);
  }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="electric_key_entry"
  value="nice"
  onClick={(e) => {
    setElectricKeyEntry(e.target.value);
  }}
  />
  ),
  createData('Gated garage access',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="garage_access_gated"
  value="must"
  onClick={(e) => {
    setGatedGarageAccess(e.target.value);
  }}
  />,
  <Form.Check
    type="radio"
    aria-label="radio 1"
    name="garage_access_gated"
    value="nice"
    onClick={(e) => {
      setGatedGarageAccess(e.target.value);
    }}
  />
),
  createData('Gated community',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="community_gated"
  value="must"
  onClick={(e) => {
    setGatedCommunity(e.target.value);
  }}
  />,
  <Form.Check
    type="radio"
    aria-label="radio 1"
    name="community_gated"
    value="nice"
    onClick={(e) => {
      setGatedCommunity(e.target.value);
    }}
  />
),
  createData('Low crime rate',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="low_crime_rate"
  value="must"
  onClick={(e) => {
    setLowCrimeRate(e.target.value);
  }}
  />,
  <Form.Check
    type="radio"
    aria-label="radio 1"
    name="low_crime_rate"
    value="nice"
    onClick={(e) => {
      setLowCrimeRate(e.target.value);
    }}
  />
),
  createData('Tenants with minimum criminal history',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="min_crime_history"
  value="must"
  onClick={(e) => {
    setMinimalCriminalHistory(e.target.value);
  }}
  />,
  <Form.Check
    type="radio"
    aria-label="radio 1"
    name="min_crime_history"
    value="nice"
    onClick={(e) => {
      setMinimalCriminalHistory(e.target.value);
    }}
  />
),
  createData('Controlled Access',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="controlled_access"
  value="must"
  onClick={(e) => {
    setControlledAccess(e.target.value);
  }}
  />,
  <Form.Check
    type="radio"
    aria-label="radio 1"
    name="controlled_access"
    value="nice"
    onClick={(e) => {
      setControlledAccess(e.target.value);
    }}
  />
),
  createData('Concierge',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="concierge"
  value="must"
  onClick={(e) => {
    setConcierge(e.target.value);
  }}
  />,
  <Form.Check
    type="radio"
    aria-label="radio 1"
    name="concierge"
    value="nice"
    onClick={(e) => {
      setConcierge(e.target.value);
    }}
  />
),
  createData('On-site security',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="on_site_security"
  value="must"
  onClick={(e) => {
    setOnSiteSecurity(e.target.value);
  }}
  />,
  <Form.Check
    type="radio"
    aria-label="radio 1"
    name="on_site_security"
    value="nice"
    onClick={(e) => {
      setOnSiteSecurity(e.target.value);
    }}
  />
),
  createData('Courtyard pet potty areas',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="courtyard_pet_potty"
  value="must"
  onClick={(e) => {
    setCourtyardPetPottyAreas(e.target.value);
  }}
  />,
  <Form.Check
    type="radio"
    aria-label="radio 1"
    name="courtyard_pet_potty"
    value="nice"
    onClick={(e) => {
      setCourtyardPetPottyAreas(e.target.value);
    }}
  />
),
  createData('Video cameras',
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="video_cameras"
  value="must"
  onClick={(e) => {
    setVideoCameras(e.target.value);
  }}
  />,
  <Form.Check
    type="radio"
    aria-label="radio 1"
    name="video_cameras"
    value="nice"
    onClick={(e) => {
      setVideoCameras(e.target.value);
    }}
  />
),

  ];

  const classes = useStyles();

return (
  <>
  <FadeIn>
    <h2 className="text-center mb-4" style={{marginTop: '70px'}}>Safety</h2>
    <p className="text-center">Please select all that apply.</p>
    <TableContainer component={Paper} className="shadow">
    <Form
      id="safety-form"
    >
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="center">Must Have</TableCell>
          <TableCell align="center">Nice To Have</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
            <TableRow key={row.name}>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="center">{row.must}</TableCell>
            <TableCell align="center">{row.nice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Form>
  </TableContainer>
  <Row>
    <Col>
      <Button
          variant="primary"
          className="my-4 ml-4 float-right"
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>{" "}
        <Link href="safety" passHref>
        <Button
            variant="light"
            className="my-4 float-right"
            onClick={handleSubmit}
            style={{
              color: '#0b2f57',
            }}
          >
            SKIP THIS STEP
          </Button>
        </Link>
      </Col>
    </Row>
  </FadeIn>
    </>
  );
}
