import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlueNoOp } from "../../components/NavbarHome";
import NewOffers from "../../components/NewOffers";

export default function Home() {
  return (
    <>
      <CNavbarBlueNoOp />
      <Container>
        <NewOffers />
      </Container>
    </>
  );
}
