import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const Products = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the account number as state to the Productadd page
    history.push("/product-add", { accountNumber }); // Passing account number as state
  };

  return (
    <Container>
      <h3>Enter Bank Account</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBankAccount">
          <div className="col-md-3 mb-3">
            <Form.Label>Bank Account Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter account number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
              style={{
                border: "1px solid #005580",
              }}
            />
          </div>
        </Form.Group>
        <Button
          type="submit"
          style={{
            backgroundColor: "#005580",
            borderColor: "#005580",
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Products;
