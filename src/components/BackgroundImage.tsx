import React from "react";
import background from "../assets/background.svg";
import styled from "styled-components";

const Styles = styled.div`
  .background-image {
    position: absolute;
  }

  .background {
    z-index: -100;
    height: auto;
    width: auto;
    overflow: hidden;
  }
`;

export const BackgroundImage = () => (
  <Styles>
    <div className="background">
      <img
        className="background-image"
        src={background}
        alt="Triangular background"
      />
    </div>
  </Styles>
);
