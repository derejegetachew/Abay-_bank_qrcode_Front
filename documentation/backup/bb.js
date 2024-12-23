import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const Productadd = () => {
  // useRef hooks for accessing input values
  const merchantAccountRef = useRef();
  const merchantTinRef = useRef();
  const merchantBankRef = useRef();
  const mccRef = useRef();
  const currencyRef = useRef();
  const merchantNameRef = useRef();
  const merchantCityRef = useRef();
  const merchantPhoneRef = useRef();
  const storeLabelRef = useRef();
  const transactionAmountRef = useRef();

  // Function to handle "Generate" button click
  const handleGenerate = async (e) => {
    e.preventDefault();
    const data = {
      merchantAccount: merchantAccountRef.current.value,
      merchantTin: merchantTinRef.current.value,
      merchantBank: merchantBankRef.current.value,
      mcc: mccRef.current.value,
      currency: currencyRef.current.value,
      merchantName: merchantNameRef.current.value,
      merchantCity: merchantCityRef.current.value,
      merchantPhone: merchantPhoneRef.current.value,
      storeLabel: storeLabelRef.current.value,
      transactionAmount: transactionAmountRef.current.value,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/generate-qrcode",
        data
      );
      console.log("Response from server:", response);
      alert("Data Generated Successfully!");
      merchantAccountRef.current.value = "";
      merchantTinRef.current.value = "";
      merchantBankRef.current.value = "";
      mccRef.current.value = "";
      currencyRef.current.value = "";
      merchantNameRef.current.value = "";
      merchantCityRef.current.value = "";
      merchantPhoneRef.current.value = "";
      storeLabelRef.current.value = "";
      transactionAmountRef.current.value = "";
    } catch (error) {
      console.error("Error sending data:", error);
      alert("An error occurred while generating the data.");
    }

    // console.log("Generated Data:", data);
    // alert("Data Generated Successfully! Check the console.");
  };

  return (
    <Container fluid>
      <Row>
        <Col lg="12">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb p-0 mb-0">
                <li className="breadcrumb-item">
                  {/* <Link to="/product">Back to Products</Link> */}
                </li>
              </ol>
            </nav>
          </div>
        </Col>
        <Col lg="12" className="mb-3 d-flex justify-content-between">
          <h4 className="font-weight-bold">New Qrcode Generate</h4>
        </Col>
        <Col lg="12">
          <Card>
            <Card.Body>
              <h5 className="font-weight-bold mb-3">Basic Information</h5>
              <Form className="row g-3">
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantAccount">
                    Merchant Account Information
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantAccount"
                    placeholder="Enter Merchant Account Information"
                    ref={merchantAccountRef}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantTin">
                    Merchant Tin Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantTin"
                    placeholder="Enter Merchant Tin Number"
                    ref={merchantTinRef}
                    style={{
                      border: "1px solid #007", // Blue border
                    }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantBank">Merchant Bank</Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantBank"
                    placeholder="Enter Merchant Bank"
                    ref={merchantBankRef}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="mcc">Merchant Category Code</Form.Label>
                  <Form.Control
                    type="text"
                    id="mcc"
                    placeholder="Enter Merchant Category Code"
                    ref={mccRef}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="currency">
                    Transaction Currency
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="currency"
                    placeholder="Enter Transaction Currency"
                    ref={currencyRef}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantName">Merchant Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantName"
                    placeholder="Enter Merchant Name"
                    ref={merchantNameRef}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantCity">Merchant City</Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantCity"
                    placeholder="Enter Merchant City"
                    ref={merchantCityRef}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantPhone">
                    Merchant Phone Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantPhone"
                    placeholder="Enter Merchant Phone Number"
                    ref={merchantPhoneRef}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="storeLabel">Store Label</Form.Label>
                  <Form.Control
                    type="text"
                    id="storeLabel"
                    placeholder="Enter Store Label"
                    ref={storeLabelRef}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="transactionAmount">
                    Transaction Amount
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="transactionAmount"
                    placeholder="Enter Transaction Amount"
                    ref={transactionAmountRef}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Button variant="primary" onClick={handleGenerate}>
                    Generate
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Productadd;









