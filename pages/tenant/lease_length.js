import { useEffect, useContext } from "react";
import Router from "next/router";
import StateContext from "../StateContext";

import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlueBlurNoOp } from "../../components/NavbarHome";
import LeaseLength from "../../components/LeaseLength";

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
        <LeaseLength />
      </Container>
    </>
  );
}
