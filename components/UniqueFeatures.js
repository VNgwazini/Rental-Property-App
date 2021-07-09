import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { useRouter } from "next/router";
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

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, must, nice) {
    return { name, must, nice };
  }
  
  const rows = [
    createData('In-unit washer and dryer',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="washer_dryer"
    value="must"
    onClick={(e) => {
      setWasherDryer(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="washer_dryer"
  value="nice"
  onClick={(e) => {
    setWasherDryer(e.target.value);
  }}
/>
    ),
    createData('Heat and air conditioning',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="heat_air_conditioning"
    value="must"
    onClick={(e) => {
      setHeatAir(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="heat_air_conditioning"
  value="nice"
  onClick={(e) => {
    setHeatAir(e.target.value);
  }}
/>
    ),
    createData('Pets allowed',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="pets_allowed"
    value="must"
    onClick={(e) => {
      setPetsAllowed(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="pets_allowed"
  value="nice"
  onClick={(e) => {
    setPetsAllowed(e.target.value);
  }}
/>
    ),
    createData('Furnished',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="furnished"
    value="must"
    onClick={(e) => {
      setFurnished(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="furnished"
  value="nice"
  onClick={(e) => {
    setFurnished(e.target.value);
  }}
/>
    ),
    createData('Dishwasher',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="dishwasher"
    value="must"
    onClick={(e) => {
      setDishwasher(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="dishwasher"
  value="nice"
  onClick={(e) => {
    setDishwasher(e.target.value);
  }}
/>
    ),
    createData('Washer and dryer connections.',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="washer_dryer_connection"
    value="must"
    onClick={(e) => {
      setWasherDryerConnection(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="washer_dryer_connection"
  value="nice"
  onClick={(e) => {
    setWasherDryerConnection(e.target.value);
  }}
/>
    ),
    createData('Balcony/Patio',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="balcony_patio"
    value="must"
    onClick={(e) => {
      setBalconyPatio(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="balcony_patio"
  value="nice"
  onClick={(e) => {
    setBalconyPatio(e.target.value);
  }}
/>
    ),
    createData('Close to parking',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="close_to_parking"
    value="must"
    onClick={(e) => {
      setCloseToParking(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="close_to_parking"
  value="nice"
  onClick={(e) => {
    setCloseToParking(e.target.value);
  }}
/>
    ),
    createData('Utilities included',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="utilities_included"
    value="must"
    onClick={(e) => {
      setUtilitiesIncluded(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="utilities_included"
  value="nice"
  onClick={(e) => {
    setUtilitiesIncluded(e.target.value);
  }}
/>
    ),
    createData('Garage/covered parking',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="parking_covered"
    value="must"
    onClick={(e) => {
      setParkingCovered(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="parking_covered"
  value="nice"
  onClick={(e) => {
    setParkingCovered(e.target.value);
  }}
/>
    ),
    createData('Gated community',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="gated_community"
    value="must"
    onClick={(e) => {
      setGatedCommunity(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="gated_community"
  value="nice"
  onClick={(e) => {
    setGatedCommunity(e.target.value);
  }}
/>
    ),
    createData('Swimming pool',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="swimming_pool"
    value="must"
    onClick={(e) => {
      setSwimmingPool(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="swimming_pool"
  value="nice"
  onClick={(e) => {
    setSwimmingPool(e.target.value);
  }}
/>
    ),
    createData('Fitness center',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="fitness_center"
    value="must"
    onClick={(e) => {
      setFitnessCenter(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="fitness_center"
  value="nice"
  onClick={(e) => {
    setFitnessCenter(e.target.value);
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
      setGarageAccessGated(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="garage_access_gated"
  value="nice"
  onClick={(e) => {
    setGarageAccessGated(e.target.value);
  }}
/>
    ),
    createData('Access to public transportation',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="pub_transportation"
    value="must"
    onClick={(e) => {
      setPubTransportation(e.target.value);
    }}
  />,
      <Form.Check
      type="radio"
      aria-label="radio 1"
      name="pub_transportation"
      value="nice"
      onClick={(e) => {
        setPubTransportation(e.target.value);
      }}
    />
    ),
    createData('Hardwood floors',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="hardwood_floors"
    value="must"
    onClick={(e) => {
      setHardwoodFloors(e.target.value);
    }}
  />,
      <Form.Check
      type="radio"
      aria-label="radio 1"
      name="hardwood_floors"
      value="nice"
      onClick={(e) => {
        setHardwoodFloors(e.target.value);
      }}
    />
    ),
    createData('Carpet',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="carpet"
    value="must"
    onClick={(e) => {
      setCarpet(e.target.value);
    }}
  />,
  <Form.Check
  type="radio"
  aria-label="radio 1"
  name="carpet"
  value="nice"
  onClick={(e) => {
    setCarpet(e.target.value);
  }}
/>
    ),
    createData('Package lockers',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="package_lockers"
    value="must"
    onClick={(e) => {
      setPackageLockers(e.target.value);
    }}
  />,
      <Form.Check
      type="radio"
      aria-label="radio 1"
      name="package_lockers"
      value="nice"
      onClick={(e) => {
        setPackageLockers(e.target.value);
      }}
    />
    ),
    createData('Electric car charging stations',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="ev_chrg_station"
    value="must"
    onClick={(e) => {
      setEV(e.target.value);
    }}
  />,
      <Form.Check
      type="radio"
      aria-label="radio 1"
      name="ev_chrg_station"
      value="nice"
      onClick={(e) => {
        setEV(e.target.value);
      }}
    />
    ),
    createData('Wireless internet access',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="wifi"
    value="must"
    onClick={(e) => {
      setWifi(e.target.value);
    }}
  />,
      <Form.Check
      type="radio"
      aria-label="radio 1"
      name="wifi"
      value="nice"
      onClick={(e) => {
        setWifi(e.target.value);
      }}
    />
    ),
    createData('Secure building',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="secure_bldn"
    value="must"
    onClick={(e) => {
      setSecureBldn(e.target.value);
    }}
  />,
      <Form.Check
      type="radio"
      aria-label="radio 1"
      name="secure_bldn"
      value="nice"
      onClick={(e) => {
        setSecureBldn(e.target.value);
      }}
    />
    ),
    createData('Resident Parking',
    <Form.Check
    type="radio"
    aria-label="radio 1"
    name="resident_parking"
    value="must"
    onClick={(e) => {
      setResidentParking(e.target.value);
    }}
  />,
      <Form.Check
      type="radio"
      aria-label="radio 1"
      name="resident_parking"
      value="nice"
      onClick={(e) => {
        setResidentParking(e.target.value);
      }}
    />
    ),
  ];

  const classes = useStyles();
  return (
    <>
    <h2 className="text-center mb-4" style={{marginTop: '70px'}}>Unique Features</h2>
    <p className="text-center">Please select all that apply.</p>
    <TableContainer component={Paper} className="shadow">
    <Form
      id="unique-features-form"
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
    </>
  );
}
