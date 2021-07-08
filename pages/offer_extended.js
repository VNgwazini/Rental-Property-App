import Container from "react-bootstrap/Container";
// Custom Components
import {NavbarHome } from "../components/NavbarHome";
import OfferExtended from "../components/OfferExtended";

export default function Home() {
  return (
    <>
      <NavbarHome/>
      <Container>
        <OfferExtended/>
      </Container>
    </>
  );
}