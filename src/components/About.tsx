import React from "react";
import pictureofme from "../assets/pictureofme.jpg";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";

const Styles = styled.div`
  .picture {
    max-width: 300px;
    max-height: auto;

    @media (min-width: 576px) {
      position: absolute;
      bottom: auto;
      top: auto;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    @media (max-width: 576px) {
      width: 250px;
    }
  }

  .text {
    position: relative;
  }

  .shadow {
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
      <Styles>
        <Container className="my-5">
          <Row className="justify-content-center h-100">
            <Col className="col-12 col-md-4">
              <img
                className="rounded picture shadow mx-auto d-block mb-4 mb-md-0"
                src={pictureofme}
                alt="Me!"
              />
            </Col>
            <Col className="col-12 col-md-5 text">
              <Card body border="light" className="shadow rounded">
                <h2>About me</h2>
                <p>
                  I grew up in France, in the beautiful region of Alsace, where
                  I rapidly took interest in computers and technology. After
                  graduating high school, I left to study Economics at the
                  London-based University College London, while never forgetting
                  my life-long passion for technology.
                </p>
                <p>
                  Now, I work as a Junior Developer, with a keen interest in
                  APIs, platform-agnostic microservices and an ambition to learn
                  more about machine learning.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}
