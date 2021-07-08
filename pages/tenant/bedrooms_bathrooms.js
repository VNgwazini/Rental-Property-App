import { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Router from "next/router";
// Custom Components
import NavbarHome from "../../components/NavbarHome";
import BedroomsBathrooms from "../../components/BedroomsBathroom";

export default function Home() {

  return (
    <>
      <NavbarHome />
      <Container>
        <BedroomsBathrooms />
      </Container>
    </>
  );
}
