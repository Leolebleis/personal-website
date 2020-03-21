import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    float: right;
  }
`;

export const Footer = () => {
  return (
    <Styles>
      <br />
      <hr />
      <div className="footer">
        &copy; 2020
        <a href="/"> Léo Le Bleis</a>
        <br />
        <br />
        <br />
      </div>
    </Styles>
  );
};
