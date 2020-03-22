import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

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
    <Navbar>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-right">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles>
);
