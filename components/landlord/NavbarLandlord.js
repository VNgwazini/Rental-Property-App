import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavbarLandlord() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">DemoCompany</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">Properties</Nav.Link>
            <Nav.Link href="#link">Tenant Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
