import React, { Props } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`
  .container {
  }
`;

export const Layout = (props: Props<React.ReactNode>) => {
  return (
    <Styles>
      <Container className="container">{props.children}</Container>
    </Styles>
  );
};
