import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

const Productadd = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="12">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb p-0 mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/product"></Link>
                    </li>
                  </ol>
                </nav>
              </div>
              {/* <Link to="/product" className="btn btn-primary btn-sm d-flex align-items-center justify-content-between ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </Link> */}
            </div>
          </Col>
          <Col lg="12" className="mb-3 d-flex justify-content-between">
            <h4 className="font-weight-bold d-flex align-items-center">
              New Qrcode Generate
            </h4>
          </Col>
          <Col lg="12">
            <Card>
              <Card.Body>
                <h5 className="font-weight-bold mb-3">Basic Information</h5>
                <Form className="row g-3">
                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text1"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Merchant Account Information
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text1"
                      placeholder="Enter Merchant Account Information"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text2"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Merchant Tin Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text2"
                      placeholder="Enter Merchant Tin Number"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text3"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Merchant Bank
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text3"
                      placeholder="Enter Merchant Bank"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text5"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Merchant Category Code
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text5"
                      placeholder="Enter Merchant Category Code"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text6"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Transaction Currency
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text6"
                      placeholder="Enter Transaction Currency"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text7"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Merchant Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text7"
                      placeholder="Enter Merchant Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text7"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Merchant City
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text7"
                      placeholder="Enter Merchant City"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text7"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Merchant Phone Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text7"
                      placeholder="Enter Merchant Number"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text7"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Store Label
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text7"
                      placeholder="Enter Store Label"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <Form.Label
                      htmlFor="Text7"
                      className="form-label font-weight-bold text-muted text-uppercase"
                    >
                      Transaction Amount
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="Text7"
                      placeholder="Enter Transaction Amount"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <button type="button" className="btn btn-primary">
                      Generate
                    </button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            <Card></Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Productadd;
