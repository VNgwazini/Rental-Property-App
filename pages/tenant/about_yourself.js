import { useEffect, useContext } from "react";
import Router from "next/router";

import Container from "react-bootstrap/Container";
// Custom Components
import NavbarHome from "../../components/NavbarHome";
import Budget from "../../components/Budget";
import AboutYourself from "../../components/AboutYourself";

export default function Home() {

  return (
    <>
      <NavbarHome />
      <Container>
        <AboutYourself />
      </Container>
    </>
  );
}
