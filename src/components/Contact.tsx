import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import MyForm from "./MyForm";
import styled from "styled-components";

const Styles = styled.div`
  .shadow {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.22) 10px 10px 10px;
      transform: translate3d(-3px, -3px, 0px);
    }
  }
`;

class Contact extends React.Component {
  render() {
    return (
      <Styles>
        <Container className="mt-5">
          <Row className="d-flex justify-content-center mt-2">
            <Col className="col-lg-8">
              <h2>Contact me</h2>
              <Card className="shadow" border="light">
                <MyForm />
              </Card>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}

export default Contact;
