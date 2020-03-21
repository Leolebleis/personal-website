import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import backgroundImage from "../assets/headerImage.jpg";
import { Layout } from "./Layout";

const Styles = styled.div`
  .jumbo {
    background: url(${backgroundImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 400px;
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

  .container {
    width: 100%;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
  }
`;

export const JumbotronComponent = () => (
  <Styles>
    <Jumbotron fluid className="jumbo">
      <div className="overlay" />
      <Layout>
        <Container className="container">
            <h2>Hi! Welcome to my site :)</h2>
            <p>Feel free to explore the different features on here!</p>
            <p>It is still a WiP...</p>
        </Container>
      </Layout>
    </Jumbotron>
  </Styles>
);
