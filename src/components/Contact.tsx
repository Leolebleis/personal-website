import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import MyForm from "./MyForm";
import styled from "styled-components";
import Icon from "../assets/contact-computer.svg";

const Styles = styled.div`
  .shadow {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.22) 10px 10px 10px;
      transform: translate3d(-3px, -3px, 0px);
    }
  }

  .icon {
    width: 40px;
    height: 40px;
  }
`;

class Contact extends React.Component {
  render() {
    return (
      <Styles>
        <Container className="my-5">
          <Row className="justify-content-center">
            <img src={Icon} alt="Computer icon" className="icon mb-3" />
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="col-md-8 text-center">
              <h2 className="mb-3">Contact me</h2>
              <Card className="shadow" border="light">
                <p className="lead mt-5 mx-5">
                  Why not get in touch?
                  <span role="img" aria-label="rocket emoji">
                    {" "}
                    🚀
                  </span>
                </p>
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
