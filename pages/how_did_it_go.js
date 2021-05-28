import Container from "react-bootstrap/Container";
// Custom Components
import {CNavbarBlue } from "../components/NavbarHome";
import HowDidItGo from "../components/HowDidItGo";

export default function Home() {
  return (
    <>
      <CNavbarBlue/>
      <Container>
        <HowDidItGo/>
      </Container>
    </>
  );
}
