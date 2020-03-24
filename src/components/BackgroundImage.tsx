import React from "react";
import background from "../assets/background.svg";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background: url(${background}) no-repeat bottom;
    position: absolute;
    width: 100%;
    height: 400px;
    background-size: cover;

    @media (max-width: 576px) {
      height: 600px;
    }
  }
`;

export const BackgroundImage = () => (
  <Styles>
    <div className="jumbo"></div>
  </Styles>
);
