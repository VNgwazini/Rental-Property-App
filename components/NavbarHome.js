import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function DefaultMenu() {
  return (
    <>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="btn btn-primary navbar-btn-white" href="tenant/top_preferences">
            Find Tenants
          </a>
        </li>
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link">Login</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/signup">
            <a className="nav-link">Signup</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
export default function CNavbar() {
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

export function CNavbarBlue() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
        <div className="container-fluid navbar-blue-Rectangle">
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
      </nav>
    </>
  );
}

export function CNavbarBlueNoOp() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container-fluid navbar-blue-Rectangle">
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
        </div>
      </nav>
    </>
  );
}

export function CNavbarBlueBlurNoOp() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top background-blur"
        id="mainNav"
      >
        <div className="container-fluid navbar-blue-Rectangle">
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
        </div>
      </nav>
    </>
  );
}

export function CNavbarWhite() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top nav-item-blue"
        id="mainNav"
      >
        <div className="container-fluid">
          <Navbar.Brand href="/">DemoCompany</Navbar.Brand>
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="btn btn-primary navbar-btn-white" href="">
                  Find Tenants
                </a>
              </li>
              <li className="nav-item">
                <Link href="login">
                  <a className="nav-link">Login</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="signup">
                  <a className="nav-link">Signup</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export function CNavbarBlur() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top background-blur"
        id="mainNav"
      >
        <div className="container-fluid navbar-blue-Rectangle">
          <Navbar.Brand href="/">DemoCompany</Navbar.Brand>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            disabled
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="btn btn-primary navbar-btn-white" href="">
                  Find Tenants
                </a>
              </li>
              <li className="nav-item">
                <Link href="login">
                  <a className="nav-link">Login</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="signup">
                  <a className="nav-link">Signup</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
