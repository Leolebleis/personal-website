import React from "react";
import background from "../assets/background2.svg";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background: url(${background}) no-repeat bottom;
    position: absolute;
    width: 100%;
    height: 600px;
    background-size: cover;

    z-index: -100;

    @media (max-width: 576px) {
      height: 800px;
    }
  }
`;

export const BackgroundImage = () => (
  <Styles>
    <div className= "jumbo" ></div>
  </Styles>
);