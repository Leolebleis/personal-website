import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import backgroundImage from "../assets/headerImage.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${backgroundImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const JumbotronComponent = () => (
  <Styles>
    <Jumbotron fluid className="jumbo">
      <div className="overlay" />
      <Container>
        <h1>Welcome</h1>
        <p>Take a look at my website</p>
      </Container>
    </Jumbotron>
  </Styles>
);
