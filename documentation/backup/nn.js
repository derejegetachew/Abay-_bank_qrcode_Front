import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { QRCode } from "react-qrcode-logo";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

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

  const qrCodeRef = useRef(); // Reference to the QR code div
  const [qrCodeData, setQrCodeData] = useState("");

  // Function to handle "Generate" button click
  const handleGenerate = (e) => {
    e.preventDefault();

    // Collecting form data
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

    console.log("Form Data to be converted to QR:", data); // Debugging line

    const qrCodeString = JSON.stringify(data); // Convert the form data to a JSON string
    setQrCodeData(qrCodeString); // Update the state to trigger the QR code generation

    // Reset form fields after submission
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
  };

  // Function to handle downloading the QR code as a JPG image
  const handleDownloadImage = async () => {
    if (qrCodeRef.current) {
      const image = await toPng(qrCodeRef.current);
      const link = document.createElement("a");
      link.href = image;
      link.download = "QRCode.png";
      link.click();
    }
  };

  // Function to handle downloading the QR code as a PDF
  const handleDownloadPDF = async () => {
    if (qrCodeRef.current) {
      const image = await toPng(qrCodeRef.current);
      const pdf = new jsPDF();
      pdf.addImage(image, "PNG", 10, 10, 180, 180); // Adjust the dimensions as needed
      pdf.save("QRCode.pdf");
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg="6">
          <Card>
            <Card.Body>
              <h5 className="font-weight-bold mb-3">Basic Information</h5>
              <Form className="row g-3">
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantAccount">
                    Merchant Account
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantAccount"
                    placeholder="Enter Merchant Account"
                    ref={merchantAccountRef}
                    style={{ border: "1px solid #005580" }}
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
                    style={{ border: "1px solid #005580" }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantBank">Merchant Bank</Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantBank"
                    placeholder="Enter Merchant Bank"
                    ref={merchantBankRef}
                    style={{ border: "1px solid #005580" }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="mcc">Merchant Category Code</Form.Label>
                  <Form.Control
                    type="text"
                    id="mcc"
                    placeholder="Enter Merchant Category Code"
                    ref={mccRef}
                    style={{ border: "1px solid #005580" }}
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
                    style={{ border: "1px solid #005580" }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantName">Merchant Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantName"
                    placeholder="Enter Merchant Name"
                    ref={merchantNameRef}
                    style={{ border: "1px solid #005580" }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantCity">Merchant City</Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantCity"
                    placeholder="Enter Merchant City"
                    ref={merchantCityRef}
                    style={{ border: "1px solid #005580" }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="merchantPhone">
                    Merchant Phone
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="merchantPhone"
                    placeholder="Enter Merchant Phone"
                    ref={merchantPhoneRef}
                    style={{ border: "1px solid #005580" }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Label htmlFor="storeLabel">Store Label</Form.Label>
                  <Form.Control
                    type="text"
                    id="storeLabel"
                    placeholder="Enter Store Label"
                    ref={storeLabelRef}
                    style={{ border: "1px solid #005580" }}
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
                    style={{ border: "1px solid #005580" }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <Button
                    style={{
                      backgroundColor: "#005580",
                      borderColor: "#005580",
                    }}
                    onClick={handleGenerate}
                  >
                    Generate QR Code
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Preview QR Code and Download Options */}
        <Col lg="6">
          <Card>
            <Card.Body>
              <h5 className="font-weight-bold mb-3">QR Code Preview</h5>
              {qrCodeData && (
                <div ref={qrCodeRef}>
                  <QRCode
                    value={qrCodeData}
                    logoImage="image/abay.jpg"
                    logoWidth={50}
                    bgColor="#FFFFFF"
                    fgColor="#005580"
                  />
                </div>
              )}
              {qrCodeData && (
                <div className="mt-3">
                  <Button
                    style={{ marginRight: "10px", backgroundColor: "#005580" }}
                    onClick={handleDownloadImage}
                  >
                    Download as JPG
                  </Button>
                  <Button
                    style={{ backgroundColor: "#005580" }}
                    onClick={handleDownloadPDF}
                  >
                    Download as PDF
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Productadd;
