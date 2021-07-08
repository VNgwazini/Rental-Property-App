import { useEffect, useContext } from "react";
import Router from "next/router";

import Container from "react-bootstrap/Container";
// Custom Components
import NavbarHome from "../../components/NavbarHome";
import Welcome from "../../components/Welcome";

export default function Home() {

  return (
    <>
      <NavbarHome />
      <Container>
        <Welcome />
      </Container>
    </>
  );
}
