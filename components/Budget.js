import { 
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core';


import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import axios from "axios";


import { Slider, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: '#0b2f57',
    boxShadow: '0 0px 5px 2px #d3d3d3',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Budget() {


  const [value, setValue] = useState([500, 2000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const muiTheme = createMuiTheme({
    overrides: {
      MuiSlider: {
        thumb: {
          color: "#f37b53",
          height: "21px",
          width: "21px",
          border: "1px solid #092748",
        },
        track: {
          color: "#f37b53",
          height: "14px",
        },
        rail: {
          color: "white",
          height: "14px",
          borderRadius: "7px",
          border: "solid 1px #979797",
        },
      },
    },
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios
        .put("tenant-preferences/", {
          headers: {
            Authorization: "Bearer ",
          },
          min_budget: value[0],
          max_budget: value[1],
        })
        .then((response) => {
          Router.push("lease_length");
        })
        .catch((error) => {
          console.log(error);
          Router.push("lease_length");
          console.log("An error occurred:", error.response);
        });
      //TODO first check if create account was successful, then check if create account was for tenant
    } catch (error) {
      console.log("An error occurred:", error.response);
    }
  };

  const classes = useStyles();

  return (
    <>
      <h2 className="text-center mb-4" style={{marginTop: '70px'}}>Budget</h2>
      <p className="text-center">Please select a price range you are comfortable with.</p>
      <Container>
      <Card className={classes.root}>
        <CardContent className="text-center mt-4 pt-4">
          <Row>
            <Col className="text-center">
                <Typography id="range-slider" gutterBottom></Typography>
                <ThemeProvider theme={muiTheme}>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                    min={300}
                    max={5000}
                  />
                </ThemeProvider>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>USD a month ($)</h6>
            </Col>
          </Row>
        </CardContent>
      </Card>
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
              backgroundColor: 'white !important'
            }}
          >
            SKIP THIS STEP
          </Button>
          </Link>
        </Col>
      </Row>
      </Container>
    </>
  );
}
