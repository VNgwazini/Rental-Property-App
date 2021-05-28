import { useEffect, useContext } from "react";
import Router from "next/router";
import StateContext from "../StateContext";

import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlueNoOp } from "../../components/NavbarHome";
import Budget from "../../components/Budget";
import AboutYourself from "../../components/AboutYourself";

export default function Home() {
  const appState = useContext(StateContext);
  /*
  if (!appState.loggedIn) {
    useEffect(() => {
      Router.replace("/signup");
    }, []);

    return <></>;
  }
  */
  return (
    <>
      <CNavbarBlueNoOp />
      <Container>
        <AboutYourself />
      </Container>
    </>
  );
}
