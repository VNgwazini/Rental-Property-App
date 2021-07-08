import { useState, useEffect, useContext } from "react";
import Router from "next/router";
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Link from "next/link";
import { GoCalendar } from "react-icons/go";
import { Input, InputAdornment } from "@material-ui/core";
import axios from "axios";


export default function LeaseLength() {

  const [monthCount, setMonthCount] = useState(1);

  function minusCount() {
    if (monthCount > 1) {
      setMonthCount(monthCount - 1);
    }
  }

  function plusCount() {
    if (monthCount < 23) {
      setMonthCount(monthCount + 1);
    }
  }

  function handleMonthCount(e) {
    if (e.target.value > 0 && e.target.value < 23) {
      setMonthCount(e.target.value);
    }
  }

  useEffect(() => {
    return;
  }, [monthCount]);

  const handleSubmit = async (values) => {
    const response = await axios
      .put("tenant-preferences/", {
        headers: {
          Authorization: "Bearer ",
        },
        lease_length_mos: monthCount,
      })
      .then((response) => {
        Router.push("welcome");
      })
      .catch((error) => {
        console.log(error);
        Router.push("welcome");
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
        crossOrigin="anonymous"
      ></link>
        <h2 className="text-center mb-4" style={{marginTop: '70px'}}>Lease Length</h2>
        <p className="text-center">Please select your ideal lease length.</p>
          <Card className="shadow mt-4 ">
            <Card.Body>
              <Form
                className="bedrooms-bathrooms-btn-row-align"
                id="unique-features-form"
              >
                <Row>
                  <Col>
                    <>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <GoCalendar size={60} className="mr-4" />
                          <Button
                            onClick={minusCount}
                            onMouseDown={e => e.preventDefault()}
                            className="btn btn-light btn-xs"
                            id="minus-btn"
                            style={{
                              border: "1px solid #092748",
                              boxShadow: "none !important",
                              borderTopLeftRadius: "50%",
                              borderBottomLeftRadius: "50%",
                              height: "40px",
                              margin: "auto 0",
                              color: "#092748",
                              backgroundColor: "white",
                            }}
                          >
                            <i className="fa fa-minus"></i>
                          </Button>
                        </div>
                        <Input
                          type="tel"
                          id="qty_input"
                          className="form-control form-control-sm input-group"
                          defaultValue={monthCount}
                          value={monthCount}
                          onChange={handleMonthCount}
                          inputProps={{ min: "0", max: "10" }}
                          // min={1}
                          style={{
                            border: "1px solid #092748",
                            height: "40px",
                            margin: "auto 0",
                            color: "black !important",
                          }}
                          // endAdornment={
                          //   <InputAdornment
                          //     position="end"
                          //     style={{
                          //       marginTop: "-32px",
                          //       marginLeft: "20px",
                          //       color: "black !important"
                          //     }}
                          //   >
                          //     months
                          //   </InputAdornment>
                          // }
                        />
                        <div className="input-group-append">
                          <Button
                            onClick={plusCount}
                            onMouseDown={e => e.preventDefault()}
                            className="btn btn-light btn-xs"
                            id="plus-btn"
                            style={{
                              border: "1px solid #092748",
                              borderTopRightRadius: "50%",
                              borderBottomRightRadius: "50%",
                              height: "40px",
                              margin: "auto 0",
                              color: "#092748",
                              backgroundColor: "white",
                            }}
                          >
                            <i className="fa fa-plus"></i>
                          </Button>
                        </div>
                      </div>
                      <h6 className="text-center">Month(s)</h6>
                    </>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
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
