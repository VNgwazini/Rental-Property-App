import Container from "react-bootstrap/Container";
// Custom Components
import NavbarHome from "../../components/NavbarHome";
import UniqueFeatures from "../../components/UniqueFeatures";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <Container>
        <UniqueFeatures />
      </Container>
    </>
  );
}
