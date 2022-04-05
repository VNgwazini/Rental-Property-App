import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// Custom Components
import CNavbar from "../components/NavbarHome";
import NavbarHome from "../components/NavbarHome";
import Masthead from "../components/Masthead";
import About from "../components/About";
import Howitworks from "../components/Howitworks";
import BarkSteps from "../components/BarkSteps";
import Whyrentbarker from "../components/Whyrentbarker";
import GetStarted from "../components/GetStarted";
import SeeWhy from "../components/SeeWhy";
import FadeIn from 'react-fade-in';

export default function Home() {

  return (
    <>
      <NavbarHome />
      <FadeIn>
        <Masthead />
        <Container>
          <About />
        </Container>
        <Container>
          <Howitworks />
        </Container>
        <Container>
          <BarkSteps />
        </Container>
        <Container>
          <Whyrentbarker />
        </Container>
        <Container>
          <GetStarted />
        </Container>
        <Container>
          <SeeWhy />
        </Container>
      </FadeIn>
    </>
  );
}
