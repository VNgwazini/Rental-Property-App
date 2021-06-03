import { useEffect, useContext } from "react";
import Router from "next/router";
import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlur, CNavbarBlueBlurNoOp } from "../../components/NavbarHome";
import Budget from "../../components/Budget";

import BedroomsBathrooms from "../../components/BedroomsBathroom";

export default function Home() {

  return (
    <>
      <CNavbarBlueBlurNoOp />
      <Container>
        <Budget />
      </Container>
    </>
  );
}
