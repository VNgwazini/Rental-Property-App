import Container from "react-bootstrap/Container";
// Custom Components
import {NavbarHome } from "../components/NavbarHome";
import HowDidItGo from "../components/HowDidItGo";

export default function Home() {
  return (
    <>
      <NavbarHome/>
      <Container>
        <HowDidItGo/>
      </Container>
    </>
  );
}
