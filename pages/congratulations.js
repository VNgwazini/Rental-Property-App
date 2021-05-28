import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// Custom Components
import {CNavbarBlue, CNavbarBlueNoOp } from "../components/NavbarHome";
import Congratulations from "../components/Congratulations";

export default function Home() {
  return (
    <>
      <CNavbarBlueNoOp/>
      <Container>
        <Congratulations/>
      </Container>
    </>
  );
}
