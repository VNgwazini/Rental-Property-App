import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

export default function SeeWhy() {
  const [review_1, set_review_1] = React.useState(0);
  const [review_2, set_review_2] = React.useState(0);
  const [review_3, set_review_3] = React.useState(0);

  return (
    <>
      <section className="text-center section-heading">
        <h1>See why tenants love us</h1>
      </section>
      <section>
        <Container className="see-why-container">
          <Row>
            <Col className="my-4">
              <Card>
                <CardHeader
                  avatar={
                    <img
                      src="/img/group-3_1.png"
                      alt="group-3_1.png"
                      className="img-fluid img-thumbnail remove-icon-outline see-why-user-icons"
                    />
                  }
                  title={<h5>Amanda Norman</h5>}
                  subheader={
                    <Rating
                      name="review-1"
                      value={review_1}
                      onChange={(event, newValue) => {
                        set_review_1(newValue);
                      }}
                    />
                  }
                />
                <CardContent>
                  <h6>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      DemoCompany helped me find the home of my dreams in such a
                      short amount of time.
                    </Typography>
                  </h6>
                </CardContent>
              </Card>
            </Col>
            <Col className="my-4">
              <Card>
                <CardHeader
                  avatar={
                    <img
                      src="/img/group-3_1.png"
                      alt="group-3_1.png"
                      className="img-fluid img-thumbnail remove-icon-outline see-why-user-icons"
                    />
                  }
                  title={<h5>Scott Norman</h5>}
                  subheader={
                    <Rating
                      name="review-2"
                      value={review_2}
                      onChange={(event, newValue) => {
                        set_review_2(newValue);
                      }}
                    />
                  }
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h6"
                  >
                    The DemoCompany process was so easy. Whoever designed this
                    website should get a raise! Very user friendly and they
                    could not have picked a better color scheme than navy and
                    burnt orange.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col className="my-4">
              <Card>
                <CardHeader
                  avatar={
                    <img
                      src="/img/group-3_1.png"
                      alt="group-3_1.png"
                      className="img-fluid img-thumbnail remove-icon-outline see-why-user-icons"
                    />
                  }
                  title={<h5>Mitch Abergel</h5>}
                  subheader={
                    <Rating
                      name="review-3"
                      value={review_3}
                      onChange={(event, newValue) => {
                        set_review_3(newValue);
                      }}
                    />
                  }
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h6"
                  >
                    Just moved to Dallas and had the best experience because of
                    DemoCompany! So glad I stumbled upon this gem.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
