import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Styles = styled.div`
  .navbar {
    background-color: transparent;
    width: 100%;
  }

  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: black;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Row>
      <Navbar>
        <Navbar.Collapse id="basic-navbar-nav">
          <Col className="d-flex justify-content-start">
            <Nav className="float-left">
              <Nav.Item>
                <Nav.Link href="/#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="d-flex justify-content-end">
          <IconButton
              className="mt-auto"
              href="https://www.linkedin.com/in/leolebleis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              className="mt-auto"
              href="https://github.com/Leolebleis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  </Styles>
);
