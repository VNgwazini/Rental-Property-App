import { Container, Row, Col } from "react-bootstrap";

export default function Calltoaction() {
  return (
    <>
      <section className="call-to-action text-white text-center">
        <div className="overlay"></div>
        <Container>
          <Row>
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email..."
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-lg btn-primary"
                    >
                      Sign up!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
