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
import { CNavbarBlueNoOp } from "../../components/NavbarHome";
import TopPreferences from "../../components/TopPreferences";
// TODO ADD Authentication Checimport StateContext from "./StateContext";
import StateContext from "../StateContext";

export default function Home(props) {
  return (
    <>
      <CNavbarBlueNoOp />
      <Container>
        <TopPreferences />
      </Container>
    </>
  );
}
