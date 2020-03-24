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
      position: absolute;
      width: 90%;
      z-index: 0;
    }
  }

  .shadow {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.22) 10px 10px 10px;
      transform: translate3d(-3px, -3px, 0px);
    }
  }

  .text {
    @media (max-width: 576px) {
      z-index: 1;
      margin-top: 350px;
    }
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <Styles>
        <Container>
          <Row className="mb-5">
            <Col className="col-12 col-md-6 m-auto order-2 order-md-1">
              <Card body className="text shadow" border="light">
                <h2>Hi :)</h2>
                <h1 className="mb-2">My name is Léo Le Bleis.</h1>
                <p className="lead text-justify text-wrap text-left">
                  I am an economics graduate and a technologist. I am a software
                  developer living in London. I build web apps, and have
                  experience in:
                </p>
                <Container>
                  <Row>
                    <Col className="col-6">
                      <Row className=" m-2">
                        <img
                          className="mr-2"
                          style={{ width: "30px", height: "30px" }}
                          src={java}
                          alt="java"
                        />
                        <pre className="my-auto">Java</pre>
                      </Row>
                      <Row className="m-2">
                        <img
                          className="float-left mr-2"
                          style={{ width: "30px", height: "30px" }}
                          src={python}
                          alt="python"
                        />
                        <pre className="my-auto">Python</pre>
                      </Row>
                      <Row className="m-2">
                        <img
                          className="float-left mr-2"
                          style={{ width: "30px", height: "30px" }}
                          src={javascript}
                          alt="javascript"
                        />
                        <pre className="my-auto">Javascript</pre>
                      </Row>
                    </Col>
                    <Col className="col-6">
                      <Row className="m-2">
                        <img
                          className="float-left mr-2"
                          style={{ width: "30px", height: "30px" }}
                          src={spring}
                          alt="spring"
                        />
                        <pre className="my-auto">Spring</pre>
                      </Row>
                      <Row className="m-2">
                        <img
                          className="float-left mr-2"
                          style={{ width: "30px", height: "30px" }}
                          src={react}
                          alt="react"
                        />
                        <pre className="my-auto">React.js</pre>
                      </Row>
                      <Row className="m-2">
                        <img
                          className="float-left mr-2"
                          style={{ width: "30px", height: "30px" }}
                          src={mongodb}
                          alt="mongodb"
                        />
                        <pre className="my-auto">MongoDB</pre>
                      </Row>
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
