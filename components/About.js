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
              <h1>About DemoCompany</h1>
              <p className="about-paragraph-heading">
                DemoCompany is Non commodo deserunt id nostrud sit amet quis nostrud. 
                Eiusmod non Lorem ut esse quis Lorem. Id officia irure ad enim culpa. 
                Ut labore irure exercitation proident ad est..
              </p>
              <p className="about-paragraph-heading">
                DemoCompany is Esse aute elit dolore ad cupidatat aute duis sint. 
                Eu magna dolor minim consectetur labore laborum aliqua dolore duis nulla eu sunt pariatur consectetur. 
                Culpa laboris velit occaecat dolore fugiat qui enim ut veniam. 
                Commodo labore dolor et fugiat enim anim adipisicing esse velit. 
                Ipsum sit reprehenderit minim consectetur quis aliqua laborum aute adipisicing ullamco tempor qui..
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
