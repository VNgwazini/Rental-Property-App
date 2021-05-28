import { Container, Row, Col, Form, Button} from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';


export default function HowDidItGo() {
  const [review_1, set_review_1] = React.useState(0);

  return (
    <>
      <section className="offer-extended-header text-center">
        <Container className="how-did-it-go-Rectangle">
          <Form className="px-auto py-auto">
          <Row className="my-4">
              <Col>
                <h3>
                  How did it go?
                </h3>
              </Col>
            </Row>
            <Row className="my-4">
              <Col>
                <p>
                  Some say the leasing process is all about finding the right home. FakeCompany believes that the right home should find you! How was your experience? Please leave us a short review and tell us how we did.
                </p>
              </Col>
            </Row>
            <Row className="my-4">
              <Col>
                <h1>
                <Rating
                    name="review-1"
                    value={review_1}
                    onChange={(event, newValue) => {
                      set_review_1(newValue);
                    }}
                  />
                </h1>
              </Col>
            </Row>
            <Row className="my-4">
              <Col>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
              </Col>
            </Row>
            <Row className="my-4 text-left">
              <Col>
                <p>
                  May we quote you in our testimonials? We will only use your first name and the first letter of your last name. 
                </p>
              </Col>
            </Row>
            <Row className="mt-4 text-left">
              <Col lg="9">
                <Row>
                  <Col>
                    <input type="radio" name="may_we_qoute" value="yes" id="exampleFormControlTextarea1"/>
                    <label>&nbsp;&nbsp;&nbsp;Yes!</label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input type="radio" name="may_we_qoute" value="no" id="exampleFormControlTextarea1"/>
                    <label>&nbsp;&nbsp;&nbsp;No</label>
                  </Col>
                </Row>
              </Col>
              <Col className="my-auto text-left" lg="3">
                <button className="btn btn-primary how-did-it-go-btn-blue">
                SUBMIT REVIEW
              </button>
              </Col>
            </Row>
          </Form>
        </Container>
        </section>
    </>
  );
}
