import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// Custom Components
import CNavbar, { CNavbarBlueBlurNoOp } from "../../components/NavbarHome";
import TopPreferences from "../../components/TopPreferences";
import UniqueFeatures from "../../components/UniqueFeatures";
import Safety from "../../components/Safety";

export default function Home() {
  return (
    <>
      <CNavbarBlueBlurNoOp />
      <Container>
        <Safety />
      </Container>
    </>
  );
}
