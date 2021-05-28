import { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Router from "next/router";
// Custom Components
import { CNavbarBlueBlurNoOp } from "../../components/NavbarHome";
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
        <BedroomsBathrooms />
      </Container>
    </>
  );
}
