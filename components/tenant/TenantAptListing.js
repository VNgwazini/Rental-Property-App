import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
/*
1. Get JSON
2. If json not empty generate JSX
*/
function getProperties() {
  //json return
}

function jsxProperties(json) {
  // return jsx
  return <p>hi</p>;
}
export default function TenantAptListing() {
  const [address, setAddress] = useState("123 Main St., Dallas, TX 75225");
  return (
    <>
      <section>
        <Container fluid>
          <Row className="shadow mt-5 mx-4">
            <Col lg="3">
              <Image src="../public/img/houses.jpg" />
            </Col>
            <Col lg="7">
              <p>{address}</p>
              <p>(972)777-7777</p>
            </Col>
            <Col lg="2">
              <BsTrash size={40} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
