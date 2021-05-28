import { Container, Row, Col, Button } from "react-bootstrap";
import Router from "next/router";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Link from "next/link";

// Custom Components
import TenantAddProperty from "../../components/tenant/TenantAddProperty";
import TenantAptListing from "../../components/tenant/TenantAptListing";
import { CNavbarBlueNoOp } from "../../components/NavbarHome";

import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

export default function AddProperties() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
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

  if (!appState.loggedIn) {
    useEffect(() => {
      //Router.push("/signup");
    }, []);
  } else {
  }
  return (
    //<>
    //{appState.loggedIn ? (
    <>
      <CNavbarBlueNoOp />
      <TenantAddProperty />
      <NextBtn />
    </>
    //) : null}
    //</>
  );
}
