import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import MyForm from "./MyForm";

class Contact extends React.Component {
  render() {
    return (
        <Container className="mt-5">
          <Row className="d-flex justify-content-center mt-2">
            <Col className="col-lg-8">
              <h2>Contact me</h2>
              <Card>
                <MyForm />
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Contact;
