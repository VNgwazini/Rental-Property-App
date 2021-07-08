import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import axios from "axios";

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core"

import {
  Container,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";

export default function BedroomsBathrooms() {

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

  const handleSubmit = async (values) => {
    try {
      const response = await axios
        .put("tenant-preferences/", {
          headers: {
            Authorization: "Bearer ",
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

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  useEffect(() => {}, []);

  return (
    <>
      <h2 className="text-center mb-4" style={{marginTop: '70px'}}>Bedrooms & Bathrooms</h2>
      <p className="text-center">Please select all that apply.</p>
    <Card className={classes.root}>
      <CardContent>
              <Form
                className="bedrooms-bathrooms-btn-row-align"
                id="unique-features-form"
              >
                <Row>
                  <Col lg="2" sm="12" xs="12">
                      <h6 className="my-4">Bedrooms:</h6>
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                  </Col>
                </Row>
                <Row>
                  <Col lg="2" sm="12" xs="12">
                      <h6 className="my-4">Bathrooms:</h6>
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                  </Col>
                  <Col>
                      <></>
                  </Col>
                </Row>
                <Row>
                  <Col lg="2" sm="12" xs="12">
                      <h6 className="my-4">Size:</h6>
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                    <span>
                      <p>300-500 sq. ft.</p>
                    </span>
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                    <span>
                      <p>550-750 sq. ft.</p>
                    </span>
                  </Col>
                  <Col>
                      <>
                        <Button
                          variant="primary"
                          className="my-1 bedrooms-bathrooms-btn-white"
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
                    <span>
                      <p>800+ sq. ft. </p>
                    </span>
                  </Col>
                  <Col>
                      <></>
                  </Col>
                </Row>
              </Form>        
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
              variant="outline-secondary"
              className="my-4 float-right"
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
    </>
  );
}
