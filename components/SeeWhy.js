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
        <h1>Dolor magna aliqua nostrud.</h1>
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
                  title={<h5>Lorem Ipsum</h5>}
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
                      Nisi qui anim labore pariatur. Reprehenderit deserunt est est in eiusmod eu laborum velit. Fugiat cupidatat officia Lorem mollit proident occaecat irure Lorem incididunt mollit. Ad aliquip ea ea exercitation occaecat commodo esse eiusmod consectetur Lorem ut nisi elit. Tempor eu esse aliqua exercitation laborum sint ex cillum consequat. Nulla enim pariatur id officia amet est qui.
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
                  title={<h5>Lorem Ipsum</h5>}
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
                    Anim quis velit Lorem voluptate nostrud officia excepteur officia aliqua amet anim dolore. Enim et ex elit non. Consectetur in non Lorem aute duis sint enim. Aliqua enim consequat consectetur in occaecat magna qui sunt commodo adipisicing qui tempor in cupidatat.
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
                  title={<h5>Lorem Ipsum</h5>}
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
                    Nisi fugiat magna dolore irure. Magna ea incididunt officia cillum proident qui sint minim irure. Ut mollit in do aute velit. Occaecat eu veniam ut sint duis do. Ex enim laborum enim enim ad voluptate. Exercitation veniam tempor ea culpa officia consectetur sunt enim. Enim labore est elit esse id cupidatat dolore dolor labore occaecat adipisicing elit aliqua consequat.
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
