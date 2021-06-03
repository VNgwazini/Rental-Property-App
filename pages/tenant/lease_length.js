import { useEffect, useContext } from "react";
import Router from "next/router";

import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlueBlurNoOp } from "../../components/NavbarHome";
import LeaseLength from "../../components/LeaseLength";

export default function Home() {

  return (
    <>
      <CNavbarBlueBlurNoOp />
      <Container>
        <LeaseLength />
      </Container>
    </>
  );
}
