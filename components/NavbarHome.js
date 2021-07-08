import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import {
  Navbar,
} from "react-bootstrap";

export function CNavbar() {
  return (
    <>
      <Nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container-fluid">
          <Link href="/" passHref={true}>
            <Navbar.Brand>DemoCompany</Navbar.Brand>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <DefaultMenu />
          </div>
        </div>
      </Nav>
    </>
  );
}

export default function NavbarHome() {
  return (
<Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="color-nav">
  <Navbar.Brand href="/">DemoCompany</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Nav>
      <Nav.Link href="/login">
        Login
      </Nav.Link>
      <Nav.Link href="/signup">
        Signup
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
