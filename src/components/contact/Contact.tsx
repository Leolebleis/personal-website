import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import MyForm from "../MyForm";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-8">
            <h2 className="mt-5">Contact me</h2>
            <Card className="w-100">
              <MyForm />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
