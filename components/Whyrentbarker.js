import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link"


export default function WhyDemoCompany() {
  //text-center my-6
  return (
    <>
      <section className="mx-auto my-4">
        <Container>
          <Row className="why-Rectangle text-left my-4 mx-auto">
            <Col lg="2">
              <div className="text-center why-rent-image-align col-lg-12 col-md-10">
                <img
                  src="/img/043-sign.png"
                  alt="043-sign.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col lg="10" className="mt-4">
              <Row>
                <h6>
                  Veniam ut do sint dolore anim consectetur ea non non.
                </h6>
              </Row>
              <Row>
                <p>
                  Pariatur pariatur voluptate nulla minim commodo Lorem reprehenderit sunt nulla ullamco nostrud laboris commodo. Anim aliquip aute ea sit nostrud ut tempor sit irure. In deserunt occaecat occaecat incididunt. Ex amet culpa veniam pariatur nostrud ea proident sit. Elit sint ex non laboris deserunt consequat. Deserunt eu fugiat anim dolor anim amet occaecat dolore mollit incididunt. Sit qui ut pariatur pariatur enim minim aliqua ad.
                </p>
              </Row>
            </Col>
          </Row>
          <Row className="why-Rectangle text-left my-4 mx-auto">
            <Col lg="2">
              <div className="text-center why-rent-image-align col-lg-12 col-md-10">
                <img
                  src="/img/023-browser.png"
                  alt="023-browser.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col lg="10" className="mt-4">
              <Row>
                <h6>
                  Ea aliqua sint sit enim exercitation laborum ea do deserunt Lorem esse id sint.
                </h6>
              </Row>
              <Row>
                <p>
                  Dolor dolore velit ullamco irure tempor Lorem. Magna sunt pariatur consectetur id officia voluptate eiusmod velit. Exercitation do quis cupidatat cupidatat in fugiat quis do tempor. Laboris ut aliquip incididunt excepteur aute duis dolore. Ipsum anim ipsum exercitation anim. Non anim Lorem qui nostrud ad excepteur anim et cupidatat voluptate. Sint id consectetur eu ea.
                </p>
              </Row>
            </Col>
          </Row>
          <Row className="why-Rectangle text-left my-4 mx-auto">
            <Col lg="2">
              <div className="text-center why-rent-image-align col-lg-12 col-md-10">
                <img
                  src="/img/009-chat.png"
                  alt="009-chat.png"
                  className="img-fluid img-thumbnail remove-icon-outline"
                />
              </div>
            </Col>
            <Col lg="10" className="mt-4">
              <Row>
                <h6>
                  Lorem est excepteur reprehenderit amet amet veniam ipsum reprehenderit ad enim cillum culpa et.
                </h6>
              </Row>
              <Row>
                <p>
                  Amet consectetur nulla pariatur est consequat eu ullamco ipsum tempor ipsum. Aliquip non do sint in consectetur. Id reprehenderit et et id est non. Nisi deserunt laborum nostrud voluptate qui cupidatat esse id pariatur reprehenderit. Ipsum sit irure aute eu aliquip.
                </p>
              </Row>
            </Col>
          </Row>
          <Row className="why-Rectangle text-left my-4 mx-auto">
            <Col lg="2">
              <div className="text-center why-rent-image-align col-lg-12 col-md-10">
                <img
                src="/img/042-credit-card.png"
                alt="042-credit-card.png"
                className="img-fluid img-thumbnail remove-icon-outline"
              />
            </div>
              </Col>
              <Col lg="10" className="mt-4">
              <Row>
                <h6>
                  Ut culpa mollit aute id sit mollit in ullamco.
                </h6>
              </Row>
              <Row>
                <p>
                  Aute ea veniam duis voluptate consequat mollit cupidatat. Reprehenderit commodo cillum aliqua sint. Est sint consequat cillum non fugiat qui minim. Ex commodo culpa proident fugiat dolore esse. Id excepteur commodo officia proident esse nisi aliquip elit officia proident cupidatat voluptate. Id consectetur labore exercitation nisi dolor veniam ullamco occaecat pariatur aute enim laboris. Pariatur labore qui sunt id Lorem minim do fugiat adipisicing in veniam.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mx-auto section-heading">
            <Col></Col>
            <Col>
              <Link href="tenant/top_preferences" passHref>
                <button className="btn btn-primary start-barking-btn-blue">
                  Start Demo
                </button>
              </Link>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}