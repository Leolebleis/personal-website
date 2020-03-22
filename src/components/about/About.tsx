import React from "react";
import pictureofme from "../../assets/pictureofme.jpg";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import react from "../../assets/react.svg";
import spring from "../../assets/spring.svg";
import java from "../../assets/java.svg";
import javascript from "../../assets/javascript.svg";
import python from "../../assets/python.svg";
import mongodb from "../../assets/mongodb.svg";

const Styles = styled.div`
  .picture {
    max-width: 100%;
    height: auto;

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
            <Row className="d-flex justify-content-center">
              <Col className="col-lg-6">
                <Card body>
                  <h2>Hi :)</h2>
                  <h1 className="mb-2">My name is Léo Le Bleis.</h1>
                  <p className="lead text-justify text-wrap text-left">
                    I am an economics graduate and a technologist. I am a
                    software developer living in London. I build web apps, and
                    have experience in:
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
              <Col className="col-lg-4">
                <img className="rounded picture" src={pictureofme} alt="Me!" />
              </Col>
            </Row>
          </Container>
        </Styles>
      </div>
    );
  }
}
