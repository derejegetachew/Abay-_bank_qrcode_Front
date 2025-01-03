import React, { useState } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card";
import { connect } from "react-redux";
import { getDarkMode } from "../../../../store/mode";
import { useHistory, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
//img
import logo from "../../../../assets/images/abaybank.jpg";
import darklogo from "../../../../assets/images/logo-dark.png";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const SignIn = (props) => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
      setIsLoading(true);
      // const branch_list = await Addis_Branch_List();
      const response = await axios.post(`/http://localhost:3000/api/login`, {
        username,
        password,
      });
      const token = response.data.accessToken;
      localStorage.setItem("token", token);
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      // const allowedBranchCodes = branch_list.map((branch) => branch.fc_code);
      // allowedBranchCodes.push("000");
      // if (!allowedBranchCodes.includes(decodedToken.user.branch_code)) {
      //   let message = "Your branch is not allowed to login to this system";
      //   setErrorMessage(message);
      //   return;
      // }
      // console.log(allowedBranchCodes);
      navigate("/dashboards/dashboard1");
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
                      className={`img-fluid  rounded-normal  ${
                        !props.darkMode ? "d-none" : ""
                      }`}
                      alt="logo"
                    />
                    <img
                      src={logo}
                      className={`img-fluid  rounded-normal  ${
                        props.darkMode ? "d-none" : ""
                      }`}
                      alt="logo"
                    />
                  </div>
                  <h5 className="mb-3 font-weight-bold text-center">
                    QR Code Generate system{" "}
                  </h5>
                  <p className="text-center text-secondary mb-4">
                    well come back
                  </p>
                  <div className="mb-5">
                    <p className="line-around text-secondary mb-0">
                      <span className="line-around-1">
                        {" "}
                        Please use ERP Username and Password
                      </span>
                    </p>
                  </div>
                  <Form>
                    <Row>
                      <Col lg="12">
                        <Form.Group>
                          <Form.Label className="text-secondary">
                            User name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter ERP usernam"
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
                            valu={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      type="submit"
                      onClick={() => history.push("/")}
                      variant="btn btn-primary btn-block mt-2"
                      style={{ backgroundColor: "#005580" }}
                    >
                      Log In
                    </Button>
                  </Form>
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
