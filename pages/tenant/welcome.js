import { useEffect, useContext } from "react";
import Router from "next/router";

import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlueNoOp } from "../../components/NavbarHome";
import Welcome from "../../components/Welcome";

export default function Home() {

  return (
    <>
      <CNavbarBlueNoOp />
      <Container>
        <Welcome />
      </Container>
    </>
  );
}
