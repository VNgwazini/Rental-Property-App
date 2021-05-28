import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlueNoOp } from "../../components/NavbarHome";
import BarkerBrochure from "../../components/BarkerBrochure";

export default function Home() {
  return (
    <>
      <CNavbarBlueNoOp />
      <Container>
        <BarkerBrochure />
      </Container>
    </>
  );
}
