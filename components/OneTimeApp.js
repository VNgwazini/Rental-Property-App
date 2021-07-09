import Router from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { 
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core';


export default function OneTimeApp() {
  const handleSubmit = () => {
    Router.push("offers");
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

  return (
    <>
    <h2 className="text-center mb-4" style={{marginTop: '70px'}}>One-Time Application</h2>
    <p className="text-center">
      Culpa pariatur aliqua non consequat commodo mollit ad quis laborum. 
      Do dolor pariatur irure ipsum duis amet et dolore duis. 
    </p>
      <Card className={classes.root}>
        <CardContent className="text-center mt-4 pt-4">
          <Row>
            <Col className="text-center">
            <img
              src="/img/noun-security-2839857.png"
              alt="noun-security-2839857.png"
              className="img-thumbnail remove-icon-outline"
            />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Your privacy and satisfaction are our highest priority. 
                 User data is encrypted via [insert well known security company here].</p>
            </Col>
          </Row>
        </CardContent>
      </Card>
      <Row>
        <Col className="my-4">
          <Button
            className="float-right"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
}
