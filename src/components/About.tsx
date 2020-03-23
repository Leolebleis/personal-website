import React from "react";
import pictureofme from "../assets/pictureofme.jpg";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import react from "../assets/react.svg";
import spring from "../assets/spring.svg";
import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import python from "../assets/python.svg";
import mongodb from "../assets/mongodb.svg";

const Styles = styled.div`
  .picture {
    max-width: 350px;
    max-height: 350px;

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
          <Row className="">
            <Col className="col-12 col-md-8">
              <Card body>
                <h2>Hi :)</h2>
                <h1 className="mb-2">My name is Léo Le Bleis.</h1>
                <p className="lead text-justify text-wrap text-left">
                  I am an economics graduate and a technologist. I am a software
                  developer living in London. I build web apps, and have
                  experience in:
                </p>
                <Container>
                  <Row>
                    <Col>
                      <img
                        className="float-left mr-2"
                        style={{ width: "30px" }}
                        src={java}
                        alt="java"
                      />
                      <p>Java</p>
                    </Col>
                    <Col>
                      <img
                        className="float-left mr-2"
                        style={{ width: "30px" }}
                        src={spring}
                        alt="spring"
                      />
                      <p>Spring</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img
                        className="float-left mr-2"
                        style={{ width: "30px" }}
                        src={python}
                        alt="python"
                      />
                      <p>Python</p>
                    </Col>
                    <Col className="">
                      <img
                        className="float-left mr-2"
                        style={{ width: "30px" }}
                        src={react}
                        alt="react"
                      />
                      <p>React</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img
                        className="float-left mr-2"
                        style={{ width: "30px" }}
                        src={javascript}
                        alt="javascript"
                      />
                      <p>Javascript</p>
                    </Col>
                    <Col>
                      <img
                        className="float-left mr-2"
                        style={{ width: "30px" }}
                        src={mongodb}
                        alt="mongodb"
                      />
                      <p>MongoDB</p>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col className="col-6 col-md-4 text-align">
              <img
                className="rounded picture d-block m-3 m-md-0"
                src={pictureofme}
                alt="Me!"
              />
            </Col>
          </Row>
        </Styles>
      </div>
    );
  }
}
