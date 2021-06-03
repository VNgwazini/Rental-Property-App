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

export default function Budget() {


  const router = useRouter();
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

  return (
    <>
      <section className="budget-Rectangle">
        <Container>
          <Row>
            <Col>
              <Form>
                <Row>
                  <Col className="text-center">
                    <h1>Budget</h1>
                    <p>Please select a price range you are comfortable with.</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <>
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
                    </>
                  </Col>
                </Row>
                <Row className="my-4 button-group float-right" role="group">
                  <ButtonGroup>
                    <Link href="lease_length" passHref>
                      <Button
                        variant="outline-secondary"
                        href="lease_length"
                        className="mr-4"
                        size="lg"
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
                      size="lg"
                      onClick={handleSubmit}
                    >
                      SUBMIT
                    </Button>
                  </ButtonGroup>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
