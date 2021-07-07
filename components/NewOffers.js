import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ProgressBar,
} from "react-bootstrap";

import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect } from "react";

import axios from "axios";

export default function NewOffers() {
  const router = useRouter();
  

  return (
    <>
      <section>
        <Container>
          <Col></Col>
          <Col>
            <div className="text-center paragraph-heading">
              <h1>Welcome!</h1>
              <h6 className="my-4 text-center">You have 6 new offers!</h6>
            </div>
          </Col>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "100%", margin: "30% auto -5% auto" }}>
                <Card.Img variant="top" src="/img/14-1.png" />
                <Card.Body>
                  <Card.Title>
                    <h3>Property Name</h3>
                  </Card.Title>
                  <Row>
                    <Col>
                      <h5
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "19px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.32px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                        }}
                      >
                        1234 S Main St, Los Angeles, CA
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} md={8} sm={8} xs={8}>
                      <ProgressBar variant="info" now={100} className="mb-4" />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                      <h6
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.27px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                          marginLeft: "-25px",
                        }}
                        className="mb-4"
                      >
                        100% MATCH
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                            whiteSpace: "nowrap",
                          }}
                        >
                          $ Avg. Net Monthly Cost
                        </h6>
                      </Row>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                          }}
                        >
                          $ Security Deposit
                        </h6>
                      </Row>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        style={{
                          width: "114px",
                          height: "44px",
                          whiteSpace: "nowrap",
                        }}
                        className="px-1"
                        s
                      >
                        VIEW OFFER
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "100%", margin: "30% auto -5% auto" }}>
                <Card.Img variant="top" src="/img/14-2.png" />
                <Card.Body>
                  <Card.Title>
                    <h3>Property Name</h3>
                  </Card.Title>
                  <Row>
                    <Col>
                      <h5
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "19px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.32px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                        }}
                      >
                        1234 S Main St, Los Angeles, CA
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} md={8} sm={8} xs={8}>
                      <ProgressBar variant="info" now={100} className="mb-4" />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                      <h6
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.27px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                          marginLeft: "-25px",
                        }}
                        className="mb-4"
                      >
                        100% MATCH
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                            whiteSpace: "nowrap",
                          }}
                        >
                          $ Avg. Net Monthly Cost
                        </h6>
                      </Row>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                          }}
                        >
                          $ Security Deposit
                        </h6>
                      </Row>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        style={{
                          width: "114px",
                          height: "44px",
                          whiteSpace: "nowrap",
                        }}
                        className="px-1"
                        s
                      >
                        VIEW OFFER
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "100%", margin: "30% auto -5% auto" }}>
                <Card.Img variant="top" src="/img/14-3.png" />
                <Card.Body>
                  <Card.Title>
                    <h3>Property Name</h3>
                  </Card.Title>
                  <Row>
                    <Col>
                      <h5
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "19px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.32px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                        }}
                      >
                        1234 S Main St, Los Angeles, CA
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} md={8} sm={8} xs={8}>
                      <ProgressBar variant="info" now={100} className="mb-4" />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                      <h6
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.27px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                          marginLeft: "-25px",
                        }}
                        className="mb-4"
                      >
                        100% MATCH
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                            whiteSpace: "nowrap",
                          }}
                        >
                          $ Avg. Net Monthly Cost
                        </h6>
                      </Row>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                          }}
                        >
                          $ Security Deposit
                        </h6>
                      </Row>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        style={{
                          width: "114px",
                          height: "44px",
                          whiteSpace: "nowrap",
                        }}
                        className="px-1"
                        s
                      >
                        VIEW OFFER
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "100%", margin: "30% auto -5% auto" }}>
                <Card.Img variant="top" src="/img/14-4.png" />
                <Card.Body>
                  <Card.Title>
                    <h3>Property Name</h3>
                  </Card.Title>
                  <Row>
                    <Col>
                      <h5
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "19px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.32px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                        }}
                      >
                        1234 S Main St, Los Angeles, CA
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} md={8} sm={8} xs={8}>
                      <ProgressBar variant="info" now={100} className="mb-4" />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                      <h6
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.27px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                          marginLeft: "-25px",
                        }}
                        className="mb-4"
                      >
                        100% MATCH
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                            whiteSpace: "nowrap",
                          }}
                        >
                          $ Avg. Net Monthly Cost
                        </h6>
                      </Row>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                          }}
                        >
                          $ Security Deposit
                        </h6>
                      </Row>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        style={{
                          width: "114px",
                          height: "44px",
                          whiteSpace: "nowrap",
                        }}
                        className="px-1"
                        s
                      >
                        VIEW OFFER
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "100%", margin: "30% auto -5% auto" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Property Name</h3>
                  </Card.Title>
                  <Row>
                    <Col>
                      <h5
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "19px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.32px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                        }}
                      >
                        1234 S Main St, Los Angeles, CA
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} md={8} sm={8} xs={8}>
                      <ProgressBar variant="info" now={100} className="mb-4" />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                      <h6
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.27px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                          marginLeft: "-25px",
                        }}
                        className="mb-4"
                      >
                        100% MATCH
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                            whiteSpace: "nowrap",
                          }}
                        >
                          $ Avg. Net Monthly Cost
                        </h6>
                      </Row>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                          }}
                        >
                          $ Security Deposit
                        </h6>
                      </Row>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        style={{
                          width: "114px",
                          height: "44px",
                          whiteSpace: "nowrap",
                        }}
                        className="px-1"
                        s
                      >
                        VIEW OFFER
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "100%", margin: "30% auto -5% auto" }}>
                <Card.Img variant="top" src="/img/14-1.png" />
                <Card.Body>
                  <Card.Title>
                    <h3>Property Name</h3>
                  </Card.Title>
                  <Row>
                    <Col>
                      <h5
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "19px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.32px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                        }}
                      >
                        1234 S Main St, Los Angeles, CA
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} md={8} sm={8} xs={8}>
                      <ProgressBar variant="info" now={100} className="mb-4" />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                      <h6
                        style={{
                          fontSize: "font-family: ProximaNova",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "0.27px",
                          color: "#092748",
                          whiteSpace: "nowrap",
                          marginLeft: "-25px",
                        }}
                        className="mb-4"
                      >
                        100% MATCH
                      </h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                            whiteSpace: "nowrap",
                          }}
                        >
                          $ Avg. Net Monthly Cost
                        </h6>
                      </Row>
                      <Row>
                        <h6
                          style={{
                            fontSize: "font-family: ProximaNova",
                            fontSize: "14px",
                            fontWeight: "500",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            letterSpacing: "0.23px",
                            color: "#092748",
                          }}
                        >
                          $ Security Deposit
                        </h6>
                      </Row>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        style={{
                          width: "114px",
                          height: "44px",
                          whiteSpace: "nowrap",
                        }}
                        className="px-1"
                        s
                      >
                        VIEW OFFER
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <div className="text-left section-heading"></div>
          </Row>
        </Container>
      </section>
    </>
  );
}
