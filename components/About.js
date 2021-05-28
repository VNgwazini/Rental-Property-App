import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
export default function About() {
  return (
    <>
      <section className="text-center my-5">
        <Container className="py-5">
          <Row>
            <Col>
              <h1>About FakeCompany</h1>
              <p className="about-paragraph-heading">
                FakeCompany is the first online marketplace where properties
                compete for you before they even know your name! You shouldn’t
                have to waste your time and money filling out multiple
                applications and credit checks with your favorite properties in
                order to find the best deal.
              </p>
              <p className="about-paragraph-heading">
                FakeCompany is the first online marketplace where landlords
                compete for you before they even know your name! You shouldn’t
                have to waste your time and money filling out multiple
                applications and credit checks with your favorite properties in
                order to find the best deal. Let FakeCompany make landlords
                compete for you. All you have to do is sit back, relax, and let
                the offers roll in. This is an auction, where you are both the
                prize and winner.
              </p>

              <h4 className="about-paragraph-heading">
                <a href="#">Learn More</a>
              </h4>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
