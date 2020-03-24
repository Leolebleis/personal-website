import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import logo from "../assets/logo.svg";
import react from "../assets/stack/react.svg";
import spring from "../assets/stack/spring.svg";
import java from "../assets/stack/java.svg";
import javascript from "../assets/stack/javascript.svg";
import python from "../assets/stack/python.svg";
import mongodb from "../assets/stack/mongodb.svg";
import styled from "styled-components";

const Styles = styled.div`
  .picture {
    height: 600px;
    @media (max-width: 576px) {
      height: 400px;
    }
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <Styles>
        <Container>
          <Row className="mb-5 h-100 justify-content-center">
            <Col className="col-12 col-md-6 m-auto order-2 order-md-1">
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
            <Col className="col-12 col-md-4 order-1 order-md-2 m-auto">
              <img
                className="picture mx-auto d-block"
                src={logo}
                alt="Artistic rendering of me coming out of a telephone, humaaans style"
              />
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}
