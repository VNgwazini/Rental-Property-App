import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// Custom Components
import { CNavbarBlue } from "../../components/NavbarHome";
import AcceptOffer from "../../components/Offer";

export default function Home() {
  return (
    <>
      <CNavbarBlue />
      <Container>
        <AcceptOffer />
      </Container>
    </>
  );
}
