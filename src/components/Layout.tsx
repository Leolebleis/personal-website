import React, { Props } from "react";
import Container from "react-bootstrap/Container";
import styled, { createGlobalStyle } from "styled-components";

const Styles = styled.div`
  .container {
  }
`;

export const Layout = (props: Props<React.ReactNode>) => {
  return (
    <Styles>
      <Container className="container" fluid>
        {props.children}
      </Container>
    </Styles>
  );
};
