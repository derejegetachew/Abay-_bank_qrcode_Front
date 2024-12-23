import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [accountNumber, setAccountNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Bank Account Number:', accountNumber);
    };

    return (
        <Container fluid>
            <Row>
                <Col lg="12">
                    <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                        <h4 className="font-weight-bold">Enter Bank Account Number</h4>
                    </div>

                    <Row>
                        <Col lg="6" className="mx-auto">
                            <div className="card card-block card-stretch">
                                <div className="card-body">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="accountNumber">
                                            <Form.Label>Bank Account Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your bank account number"
                                                value={accountNumber}
                                                onChange={(e) => setAccountNumber(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="w-100 mt-3">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Products
