import axios from "axios";
import { useFormik } from "formik";
import CNavbarDemo from "../components/NavbarHome";
import { Container, Form, FormGroup, Button } from "react-bootstrap";
import { useState } from "react";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function Login() {

  const [loginFailed, setLoginFailed] = useState(false);
  const loginFailedMsg = "Unable to login. Please check your email or password";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      axios
        .post("/auth/local", {
          identifier: values.email,
          password: values.password,
        })
        .then((response) => {
          appDispatch({
            type: "login",
            data: response.data.user,
            token: response.data.jwt,
          });
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
          setLoginFailed(true);
          appDispatch({
            type: "logout",
          });
        });
    },
  });

  return (
    <>
      <CNavbarDemo />
      <section className="mt-5">
        <Container className="pt-5 col-lg-4">
          <header>
            <h1>Login</h1>

            <p></p>
          </header>

          <Form noValidate>
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            {formik.errors.loggedIn ? (
              <div>{formik.errors.loggedIn}</div>
            ) : null}
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            {loginFailed ? <div>{loginFailedMsg}</div> : null}
            <Button
              variant="primary"
              type="submit"
              onClick={formik.handleSubmit}
            >
              Login
            </Button>{" "}
            <p>Or log in with:</p>
            <Button variant="outline-primary" block disabled>
              Google
            </Button>
            <Button variant="outline-primary" block disabled>
              Facebook
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
}
