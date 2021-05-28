import { Row, Col, Container } from "react-bootstrap";

export default function AddApartment() {
  return (
    <>
      <section className="text-center paragraph-heading">
        <Container>
          <Row>
            <Col>
              <div className="text-right col-lg-12 col-md-10">
                <h1 className="text-left">
                  Add Apartment
                </h1>
              </div>
            </Col>
            <Col>
              <div className="col-lg-12 col-md-10">
                <button className="btn btn-primary">
                  Cancel
                </button>
              </div>
            </Col>
          </Row>
          <Row>
              <Col>
                <div className="text-left">
                  <img src="/img/group.png" alt="group.png" className="img-fluid img-thumbnail" />
                </div>
              </Col>
              <Col>
                <h4>
                  Apartment Details  
                </h4>
              </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}