import {
  Row,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Link from "next/link"


export default function GetStarted() {
  return (
    <>
      <section className="text-center section-heading get-started-Rectangle col-lg-12 col-md-10">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center" id="get-started-header">
                Get started!
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="text-left header-vertical-align">
              <Row>
                <Col lg="9">
                  <Form>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Paste in URL or Search Property Here "
                        aria-label="search"
                        aria-describedby="basic-addon2"
                        className="why-search-Rectangle"
                      />
                      <InputGroup.Append>
                        <InputGroup.Text
                          id="basic-addon2"
                          className="bg-white no-br"
                        >
                          <img
                            src="https://cdn.onlinewebfonts.com/svg/img_587.png"
                            alt="Magnifying glass"
                            className="img-fluid img-thumbnail remove-icon-outline home-search-bar-icon"
                          />
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form>
                </Col>
                <Col className="justify-content-center" lg="3">
                <Link href="tenant/top_preferences" passHref>
                 <button className="btn btn-primary home-search-btn-blue">
                    Start Faking
                  </button>
                </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
