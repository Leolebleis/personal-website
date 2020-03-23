import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import MyForm from "./MyForm";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col className="col-lg-8">
              <h2 className="mt-5">Contact me</h2>
              <Card className="w-100">
                <MyForm />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
