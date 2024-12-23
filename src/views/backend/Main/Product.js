import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Card from "../../../components/Card";
import { QRCode } from "react-qrcode-logo";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import axios from "axios";
import { generateEMVQRCode } from "../../../services/qr-generator"; // Adjust the path as needed

const Products = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [merchantData, setMerchantData] = useState(""); // Start with null
  const [qrCodeData, setQrCodeData] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // Step 1: Enter Account, Step 2: Display Merchant Info

  const qrCodeRef = useRef();

  // useEffect to log merchant data whenever it changes
  useEffect(() => {
    if (merchantData) {
      console.log("Updated merchant data:", merchantData); // This will log when merchantData changes
    }
  }, [merchantData]);

  // Fetch merchant details via API
  const handleAccountSubmit = async (e) => {
    e.preventDefault();

    if (accountNumber.trim()) {
      setError(""); // Reset previous errors
      try {
        const response = await axios.post(
          "http://localhost:3000/api/getaccount",
          { account_number: accountNumber }
        );

        console.log("Response data:", response.data); // Log the full response

        // Set the merchant data based on the API response
        setMerchantData(response.data);
        console.log(merchantData);
        // Move to the next step (display merchant info)
        setStep(2);
      } catch (err) {
        setError(
          err.response?.data?.message || "Error fetching merchant details."
        );
      }
    } else {
      setError("Account number is required.");
    }
  };

  // Generate QR Code using `generateEMVQRCode`
  const handleGenerate = () => {
    if (!merchantData) {
      setError("Merchant data is missing.");
      return;
    }

    try {
      const qrFields = [
        { id: "00", value: "01" }, // Payload Format Indicator
        { id: "01", value: "12" }, // Point of Initiation Method (Dynamic)
        {
          id: "28", // Merchant Account Information
          value: Object.entries(merchantData.merchantAccountInfo || {}).map(
            ([tag, value]) => ({ id: tag, value })
          ),
        },
        { id: "52", value: merchantData.merchantCategoryCode || "0000" },
        { id: "53", value: merchantData.transactionCurrency || "ETB" },
        { id: "58", value: merchantData.countryCode || "ET" },
        { id: "59", value: merchantData.merchantName || "Unknown Merchant" },
        { id: "60", value: merchantData.merchantCity || "Unknown City" },
      ];

      if (merchantData.transactionAmount) {
        qrFields.push({ id: "54", value: merchantData.transactionAmount });
      }

      const qrString = generateEMVQRCode(qrFields);
      console.log("Generated QR String:", qrString); // Log generated QR code string
      setQrCodeData(qrString); // Set QR code data
    } catch (error) {
      setError("Failed to generate QR code.");
    }
  };

  // Download QR code as image
  const handleDownloadImage = async () => {
    if (qrCodeRef.current) {
      const image = await toPng(qrCodeRef.current);
      const link = document.createElement("a");
      link.href = image;
      link.download = "QRCode.png";
      link.click();
    }
  };

  // Download QR code as PDF
  const handleDownloadPDF = async () => {
    if (qrCodeRef.current) {
      const image = await toPng(qrCodeRef.current);
      const pdf = new jsPDF();
      pdf.addImage(image, "PNG", 10, 10, 180, 180);
      pdf.save("QRCode.pdf");
    }
  };

  return (
    <Container fluid>
      {step === 1 ? (
        <Form onSubmit={handleAccountSubmit}>
          <h3>Enter Bank Account</h3>
          <Form.Group controlId="formBankAccount">
            <div className="col-md-3 mb-3">
              <Form.Label>Bank Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
                style={{ border: "1px solid #005580" }}
              />
            </div>
          </Form.Group>
          <Button
            type="submit"
            style={{ backgroundColor: "#005580", borderColor: "#005580" }}
          >
            Submit
          </Button>
          {error && <p className="text-danger">{error}</p>}
        </Form>
      ) : (
        <Row>
          <Col lg="6">
            <Card>
              <Card.Body>
                <h5 className="font-weight-bold mb-3">Merchant Information</h5>
                <Form className="row g-3">
                  <div className="col-md-6 mb-3">
                    <Form.Label>Merchant Account</Form.Label>
                    <Form.Control
                      type="text"
                      readOnly
                      value={merchantData?.merchantAccount || "N/A"} // Fallback to "N/A"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Label>Merchant Tin</Form.Label>
                    <Form.Control
                      type="text"
                      readOnly
                      value={merchantData?.merchantTin || "N/A"} // Fallback to "N/A"
                    />
                  </div>
                  <Button
                    style={{
                      backgroundColor: "#005580",
                      borderColor: "#005580",
                    }}
                    onClick={handleGenerate}
                  >
                    Generate QR Code
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <Card.Body>
                <h5 className="font-weight-bold mb-3">QR Code Preview</h5>
                {qrCodeData && (
                  <div ref={qrCodeRef} style={{ padding: "10px" }}>
                    <QRCode value={qrCodeData} />
                  </div>
                )}
                {qrCodeData && (
                  <div className="mt-3">
                    <Button
                      style={{ marginRight: "10px" }}
                      onClick={handleDownloadImage}
                    >
                      Download as Image
                    </Button>
                    <Button onClick={handleDownloadPDF}>Download as PDF</Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Products;
