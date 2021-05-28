import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlueBlurNoOp } from "../../components/NavbarHome";
import UniqueFeatures from "../../components/UniqueFeatures";

export default function Home() {
  return (
    <>
      <CNavbarBlueBlurNoOp />
      <Container>
        <UniqueFeatures />
      </Container>
    </>
  );
}
