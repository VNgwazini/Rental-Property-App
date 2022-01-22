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
  Slider,
} from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import FadeIn from 'react-fade-in'

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

export default function AboutYourself() {

  const [aboutSelf, setAboutSelf] = useState(null);
  const [volCom, setVolCol] = useState(null);
  const router = useRouter();

  const handleSubmit = async (values) => {
    const response = await axios
      .put("tenant-preferences/", {
        headers: {
          Authorization: "Bearer ",
        },
        tenant_about_self_info: aboutSelf,
        tenant_about_self_vol_com: volCom,
      })
      .then((response) => {
        Router.push("one_time_app");
      })
      .catch((error) => {
        Router.push("one_time_app");
        console.log("An error occurred:", error.response);
      });
  };

  const classes = useStyles();

  return (
    <>
    <FadeIn>
    <h2 className="text-center mb-4" style={{marginTop: '70px'}}>Tell us about yourself</h2>
      <p className="text-center">Deserunt cupidatat laboris ad excepteur esse dolor.</p>
      <body className="gradient-orange">
        <Card className={classes.root}>
          <CardContent className="text-center mt-4 pt-4">
          <img
            src="/img/group-3_1.png"
            alt="group-3_1.png"
            className="remove-icon-outline"
          />
          <p className="text-center">First & Last Name</p>
            <Row>
              <Col className="text-left">
                <label>
                <h6>
                  Pariatur ex qui ipsum enim laboris anim est.
                </h6>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                // rows="5"
                style={{
                  borderRadius: "3px",
                  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
                }}
                onChange={(e) => {
                  setAboutSelf(e.target.value);
                }}
                placeholder="Type Here..."
              >
              </textarea>
              </Col>
            </Row>
            <Row>
              <Col className="text-left">
                <label>
                <h6 className="mt-4">
                Et exercitation labore magna nulla elit anim culpa duis aliquip.
                </h6>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea2"
                // rows="5"
                style={{
                  borderRadius: "3px",
                  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
                }}
                onChange={(e) => {
                  setVolCol(e.target.value);
                }}
                placeholder="Type Here..."
              >
              </textarea>
              </Col>
            </Row>
            <Row>
              <Col className="text-left mt-4 mb-2">
                <h6>
                  Nisi id ipsum aliquip proident mollit in magna exercitation dolor officia?
                </h6>
              </Col>
            </Row>
            <Row>
              <Col className="text-left" lg={1} xs={3}>
                <img
                  src="/img/cloud-upload.png"
                  alt="cloud-upload.pngg"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </Col>
              <Col className="text-left">
                <input
                  type="file"
                  className="form-control-file my-auto"
                  id="exampleFormControlFile2"
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-left" lg={1} xs={3}>
                <img
                  src="/img/cloud-yes.png"
                  alt="cloud-yes.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </Col>
              <Col className="text-left">
                <input
                  type="file"
                  className="form-control-file my-auto"
                  id="exampleFormControlFile2"
                />
              </Col>
            </Row>
          </CardContent>
        </Card>
        <Row>
        <Col>
            <Link href="one_time_app" passHref>
              <Button
                variant="primary"
                className="my-4 float-right"
                onClick={handleSubmit}
              >
                Next
              </Button>
            </Link>
          </Col>
        </Row>
      </body>
    </FadeIn>
    </>
  );
}
