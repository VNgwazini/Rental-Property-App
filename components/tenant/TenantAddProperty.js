import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useImmerReducer } from "use-immer";
import TenantAptListing from "../../components/tenant/TenantAptListing";
import Form from "react-bootstrap/Form";
import NextBtn from "../NextBtn";
import { BsFillImageFill, BsTrash } from "react-icons/bs";
import MAutocomplete from "../../components/AutoComplete";

function TenantAddProperty(props) {
  const google_api_key = "AIzaSyCd1s474sblIZOod6DINv12n1SQKOEyaMw";
  const [propertyURL, setPropertyURL] = useState(null);
  const [inputAddress, setInputAddress] = useState(null);
  const [generatedAddress, setGeneratedAddress] = useState(null);
  const [btnAddProperty, onBtnAddProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [emptyString, setEmptyString] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [selectedObject, setSelectedObject] = useState();

  function Header(props) {
    return (
      <>
        <section className="mt-5 pt-3">
          <header className="my-5 py-3">
            <h3 className="text-center"> Add your properties</h3>
            <p className="text-center">
              Please input up to 5 properties you would like to compete for you
            </p>
          </header>
        </section>
      </>
    );
  }

  function AutcompleteSelectedObject(obj) {
    setSelectedObject(obj);
    if (obj) {
      const str =
        obj.street_address + ", " + obj.city + " " + obj.state + " " + obj.zip;

      setStreetAddress(str);
    } else {
      setStreetAddress("");
    }
  }
  function AddProperty() {
    const handleSubmit = (e) => {
      if (properties.length <= 4 && selectedObject) {
        setProperties((prevState) => {
          prevState.push({
            title: selectedObject.name,
            address: selectedObject.street_address,
            phone: selectedObject.phone,
          });
          return prevState;
        });
        // workaround to trigger refresh/re-render of JSX
        setEmptyString(" " + emptyString);
      }
    };

    return (
      <>
        <section>
          <Container fluid>
            <Row className="shadow mx-4 mt-5">
              <Col lg="3">
                <Button>
                  <BsFillImageFill size={200} />
                </Button>
              </Col>
              <Col lg="6">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Paste Property Address:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="https://example.com"
                      disabled
                    />
                  </Form.Group>
                  <MAutocomplete
                    setSelectedObject={AutcompleteSelectedObject}
                  />
                  {/* <Form.Group controlId="formBasicPassword">
                    <Form.Label>Input address here:</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group> */}
                </Form>
              </Col>
              <Col lg="3">
                <h3>Property Address</h3>

                <p>{streetAddress}</p>
              </Col>
            </Row>
            <Row>
              <Col className="pr-4">
                <div className="float-right mt-3 mr-3">
                  <Button variant="primary" onClick={handleSubmit}>
                    ADD PROPERTY
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }

  // property listing
  function Property(props) {
    return (
      <section>
        <Container fluid>
          <Row className="shadow mx-4 mt-5">
            <Col lg="3">
              <BsFillImageFill size={200} />
            </Col>
            <Col lg="6">
              <h2>{props.title}</h2>
              {props.address}
              <br />
              {props.phone}
            </Col>
            <Col lg="3" className="py-5 float-right">
              {/* TODO make trash icon delete respective property */}
              <BsTrash size={35} className="float-right" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    // JSX starts here
    <>
      <Header />
      {/*<AddProperty />*/}
      <AddProperty />
      {properties.map((obj, index) => (
        <Property
          title={obj.title}
          address={obj.address}
          phone={obj.phone}
          key={index}
        />
      ))}
      {emptyString}
    </>
  );
}

export default TenantAddProperty;
