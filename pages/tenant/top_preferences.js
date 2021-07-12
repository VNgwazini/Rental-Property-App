import Router from "next/router";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// Custom Components
import NavbarHome from "../../components/NavbarHome";
import TopPreferences from "../../components/TopPreferences";

export default function Home(props) {
  return (
    <>
      <NavbarHome />
      <Container>
        <TopPreferences />
      </Container>
    </>
  );
}
