import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link"
import { 
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: '#0b2f57',
    boxShadow: '0 0px 5px 2px #d3d3d3',
    marginTop: 50,
    marginBottom: 50,

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


export default function WhyDemoCompany() {
  
  const classes = useStyles();

  //text-center my-6
  return (
    <>
      <Card className={classes.root}>
        <CardContent className="text-left mt-4 pt-4">
          <Row>
            <Col lg={3} className="d-flex justify-content-center align-item-center">
            <img
                src="/img/043-sign.png"
                alt="043-sign.png"
                className="img-thumbnail remove-icon-outline p-4"
              />
            </Col>
            <Col>
            <h6>
              Veniam ut do sint dolore anim consectetur ea non non.
            </h6>
            <p>
              Pariatur pariatur voluptate nulla minim commodo Lorem reprehenderit sunt nulla ullamco nostrud laboris commodo. 
              Anim aliquip aute ea sit nostrud ut tempor sit irure. 
            </p>
            </Col>
          </Row>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className="text-left mt-4 pt-4">
          <Row>
            <Col lg={3} className="d-flex justify-content-center align-item-center">
            <img
                  src="/img/023-browser.png"
                  alt="023-browser.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
            </Col>
            <Col>
            <h6>
              Ea aliqua sint sit enim exercitation laborum ea do deserunt Lorem esse id sint.
            </h6>
            <p>
              Dolor dolore velit ullamco irure tempor Lorem. 
              Magna sunt pariatur consectetur id officia voluptate eiusmod velit. 
              Exercitation do quis cupidatat cupidatat in fugiat quis do tempor.
        </p>
            </Col>
          </Row>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className="text-left mt-4 pt-4">
          <Row>
            <Col lg={3} className="d-flex justify-content-center align-item-center">
            <img
                  src="/img/009-chat.png"
                  alt="009-chat.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
            </Col>
            <Col>
            <h6>
              Lorem est excepteur reprehenderit amet amet veniam ipsum reprehenderit ad enim cillum culpa et.
            </h6>
            <p>
              Amet consectetur nulla pariatur est consequat eu ullamco ipsum tempor ipsum. 
              Aliquip non do sint in consectetur. Id reprehenderit et et id est non. 
              Nisi deserunt laborum nostrud voluptate qui cupidatat esse id pariatur reprehenderit. 
        </p>
            </Col>
          </Row>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className="text-left mt-4 pt-4">
          <Row>
            <Col lg={3} className="d-flex justify-content-center align-item-center">
            <img
                src="/img/042-credit-card.png"
                alt="042-credit-card.png"
                className="img-fluid img-thumbnail remove-icon-outline"
              />
            </Col>
            <Col>
            <h6>
                  Ut culpa mollit aute id sit mollit in ullamco.
                </h6>
                <p>
                  Aute ea veniam duis voluptate consequat mollit cupidatat. 
                  Reprehenderit commodo cillum aliqua sint. 
                  Est sint consequat cillum non fugiat qui minim. 
                </p>
            </Col>
          </Row>
        </CardContent>
      </Card>
    </>
  );
}