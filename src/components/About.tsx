import React from "react";
import pictureOfMe from "../assets/pictureofme.jpg";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import aboutIcon from "../assets/about-rpg.svg";
import resume from "../assets/CV.pdf";

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

  .icon {
    max-width: 40px;
    max-height: 40px;
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
                src={pictureOfMe}
                alt="Me!"
              />
            </Col>
            <Col className="col-12 col-md-5 text">
              <Card body border="light" className="shadow rounded">
                <img
                  src={aboutIcon}
                  alt="Shield and sword icon"
                  className="icon float-left pr-1"
                />
                <h2>About me</h2>
                <p className="text-justify" style={{ fontSize: "1rem" }}>
                  I grew up in France, in the beautiful region of Alsace, where
                  I rapidly took interest in computers and technology. After
                  graduating high school, I left to study Economics at the
                  London-based University College London, while never forgetting
                  my life-long passion for technology.
                </p>
                <p className="text-justify" style={{ fontSize: "1rem" }}>
                  Now, I work as a Backend Developer, with a keen interest in
                  APIs, platform-agnostic microservices, and writing the best
                  software possible.
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="m-5 justify-content-center">
            <Col className="col-auto">
              <a
                className="btn btn-outline-info px-4 py-3"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download my CV
              </a>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}
