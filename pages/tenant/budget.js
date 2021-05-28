import { useEffect, useContext } from "react";
import Router from "next/router";
import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlur, CNavbarBlueBlurNoOp } from "../../components/NavbarHome";
import Budget from "../../components/Budget";

import BedroomsBathrooms from "../../components/BedroomsBathroom";
import StateContext from "../StateContext";

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
      <CNavbarBlueBlurNoOp />
      <Container>
        <Budget />
      </Container>
    </>
  );
}
