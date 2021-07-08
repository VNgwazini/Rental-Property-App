import Container from "react-bootstrap/Container";
// Custom Components
import NavbarHome from "../../components/NavbarHome";
import NewOffers from "../../components/NewOffers";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <Container>
        <NewOffers />
      </Container>
    </>
  );
}
