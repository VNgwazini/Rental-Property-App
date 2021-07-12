import { Container, Row, Col, Button } from "react-bootstrap";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

// Custom Components
import TenantAddProperty from "../../components/tenant/TenantAddProperty";
import TenantAptListing from "../../components/tenant/TenantAptListing";
import NavbarHome from "../../components/NavbarHome";


export default function AddProperties() {
  const router = useRouter();

  function NextBtn() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <div className="float-right my-4">
                <Link href="top_preferences">
                  <Button size="lg">Next</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <NavbarHome />
      <TenantAddProperty />
      <NextBtn />
    </>
  );
}
