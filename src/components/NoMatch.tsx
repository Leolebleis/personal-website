import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Icon from "../assets/404-spaceship.svg";

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
    width: 100px;
    height: 100px;

    z-index: 100;
  }
`;

export const NoMatch = () => (
  <Styles>
    <Container>
      <Row className="justify-content-center m-5">
        <Col className="col-12 col-md-6">
          <Card body border="light" className="shadow rounded">
            <Row className="mb-5 m-3">
              <Col>
                <h1>404!</h1>
                <p className="lead">It seems you've lost your way, adventurer...</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <img src={Icon} alt="Spaceship icon for 404" className="icon m-3" />
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  </Styles>
);
