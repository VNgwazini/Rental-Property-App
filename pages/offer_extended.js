import Container from "react-bootstrap/Container";
// Custom Components
import {CNavbarBlueNoOp } from "../components/NavbarHome";
import OfferExtended from "../components/OfferExtended";

export default function Home() {
  return (
    <>
      <CNavbarBlueNoOp/>
      <Container>
        <OfferExtended/>
      </Container>
    </>
  );
}