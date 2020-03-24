import React from "react";
import pictureofme from "../assets/pictureofme.jpg";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";

const Styles = styled.div`
  .picture {
    max-width: 350px;
    max-height: auto;

    @media (max-width: 576px) {
      width: 250px;
    }

    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.22) 10px 10px 10px;
      transform: translate3d(-3px, -3px, 0px);
    }
  }
`;

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Styles>
          <Container>
            <Row>
              <Col className="col-12 col-md-6">
                <h2>About me</h2>
                <Card body>
                  <p>insert text here</p>
                </Card>
              </Col>
              <Col className="col-12 col-md-6">
                <img
                  className="rounded picture d-block mx-auto mt-2"
                  src={pictureofme}
                  alt="Me!"
                />
              </Col>
            </Row>
          </Container>
        </Styles>
      </div>
    );
  }
}
