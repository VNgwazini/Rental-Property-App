import { useEffect, useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import { Button } from "react-bootstrap";

import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlueNoOp } from "../../components/NavbarHome";
import OneTimeApp from "../../components/OneTimeApp";

export default function Home() {

  return (
    <>
      <CNavbarBlueNoOp />
      <Container fluid id="gradient-orange">
        <OneTimeApp />
      </Container>
    </>
  );
}
