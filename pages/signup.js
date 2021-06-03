import { useFormik } from "formik";
import { useRouter } from "next/router";
import Alert from "react-bootstrap/Alert";
import Router from "next/router";
import CNavbar, { CNavbarBlue } from "../components/NavbarHome";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.fullname) {
    errors.fullname = "Name required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function Signup() {
  const router = useRouter();
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState("tenant");
  const [tenantChecked, setTenantChecked] = useState(false);
  const [propertyManagerChecked, setPropertyManagerChecked] = useState(false);
  const [ownerChecked, setOwnerChecked] = useState(false);
  const [landlord, setLandlord] = useState(0);
  const [radioState, setRadioState] = useState("tenant");

  const [createAccFailed, setCreateAccFailed] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullname: "",
    },
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  // get value of radio buttons
  function handleCheckboxes(e) {
    setRadioState(e.target.value);
  }

  // monitor selection of radiobutton and use it update user type
  useEffect(() => {
    radioState == "" ? setUserType("tenant") : setUserType(radioState);
    return;
  }, [radioState]);

  // monitor to see if landlord/pro is selected via odd number
  useEffect(() => {
    if (landlord % 2 == 0) {
      setUserType("tenant");
    }
    return;
  }, [landlord]);

  function handleLandlord() {
    setLandlord(landlord + 1);
  }

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("auth/local/register", {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
        username: values.email,
        type: userType,
      });
      appDispatch({
        type: "login",
        data: response.data.user,
        token: response.data.jwt,
      });
      Router.push("tenant/add_properties");
      //TODO first check if create account was successful, then check if create account was for tenant
    } catch (error) {
      Router.push("tenant/add_properties");
      //console.log("An error occurred:", error.response);
      if (error.response) {
        setCreateAccFailed(
          error.response.data.message[0]["messages"][0].message
        );
      }
    }
  }
  return (
    <>
      <CNavbarBlue />
      <section className="mt-5 pt-5">
        <Container className="col-lg-4">
          <header>
            <h1>Create Account</h1>

            <p>
              You've worked hard to become a renter any landlord would want.
              Now, they’ll know it and compete to make you want them too.
            </p>
          </header>
          {createAccFailed ? (
            <Alert variant="danger">{createAccFailed}</Alert>
          ) : null}
          <Form>
            <Form.Group>
              {formik.errors.fullname ? (
                <div>{formik.errors.fullname}</div>
              ) : null}
              <Form.Control
                type="text"
                placeholder="Fullname"
                name="fullname"
                id="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <br />
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I’m a landlord or property professional"
                onChange={handleLandlord}
              />
            </Form.Group>
            <div className={landlord % 2 != 0 ? "" : "d-none"}>
              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10 }}>
                  <Form.Check
                    id="owner"
                    type="radio"
                    label="Owner"
                    name="user_type"
                    value="owner"
                    onChange={handleCheckboxes}
                  />
                  <Form.Check
                    type="radio"
                    id="property_manager"
                    label="Property Manager"
                    name="user_type"
                    value="property_manager"
                    onChange={handleCheckboxes}
                  />
                  <Form.Check
                    type="radio"
                    id="agent"
                    label="Agent"
                    name="user_type"
                    value="agent"
                    onChange={handleCheckboxes}
                  />
                </Col>
              </Form.Group>
            </div>
            <Button
              variant="primary"
              type="submit"
              onClick={formik.handleSubmit}
              block
            >
              Create Account
            </Button>{" "}
            <p>Or log in with:</p>
            <Button variant="outline-primary" disabled block>
              Google
            </Button>
            <Button variant="outline-primary" disabled block>
              Facebook
            </Button>
          </Form>
        </Container>
      </section>
    </>
  )
}
