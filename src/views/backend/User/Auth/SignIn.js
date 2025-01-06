import React, { useState } from "react";

import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../../store/mode";
import { useHistory } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
// img
import logo from "../../../../assets/images/abaybank.jpg";
import darklogo from "../../../../assets/images/logo-dark.png";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const SignIn = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "") {
      setErrorMessage("Please provide a username");
      return;
    }
    if (password === "") {
      setErrorMessage("Please provide a password");
      return;
    }
    try {
      // setIsLoading(true);
      // const response = await axios.post(`http://localhost:3000/api/login`, {
      //   username,
      //   password,
      // });
      // const token = response.data.accessToken;
      // localStorage.setItem("token", token);
      // const decodedToken = jwtDecode(token);
      // console.log("derejeeee", decodedToken);

      history.push("/product");
    } catch (error) {
      let message =
        error.response?.data?.message ||
        "System connection problem, please try again";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="login-content">
        <Container className="h-100">
          <Row className="align-items-center justify-content-center h-80">
            <Col md="5">
              <Card className="p-3">
                <Card.Body>
                  <div className="auth-logo">
                    <img
                      src={logo}
                      className={`img-fluid rounded-normal ${
                        !props.darkMode ? "d-none" : ""
                      }`}
                      alt="logo"
                    />
                    <img
                      src={logo}
                      className={`img-fluid rounded-normal ${
                        props.darkMode ? "d-none" : ""
                      }`}
                      alt="logo"
                    />
                  </div>
                  <h5 className="mb-3 font-weight-bold text-center">
                    QR Code Generate System
                  </h5>
                  <p className="text-center text-secondary mb-4">
                    Welcome back
                  </p>
                  <div className="mb-5">
                    <p className="line-around text-secondary mb-0">
                      <span className="line-around-1">
                        Please use ERP Username and Password
                      </span>
                    </p>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg="12">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            Username
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter ERP username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg="12" className="mt-2">
                        <Form.Group>
                          <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      type="submit"
                      variant="btn btn-primary btn-block mt-2"
                      style={{ backgroundColor: "#005580" }}
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Log In"}
                    </Button>
                  </Form>
                  {errorMessage && (
                    <p className="text-danger mt-3">{errorMessage}</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default connect(mapStateToProps)(SignIn);
