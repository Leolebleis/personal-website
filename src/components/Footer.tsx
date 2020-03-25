import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import background from "../assets/background2.svg";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background: url(${background}) no-repeat bottom;
    width: 100%;
    height: 400px;
    background-size: cover;
    left: 0;
    position: absolute;
    z-index: -1;
    margin-top: -400px;

    @media (max-width: 576px) {
      height: 600px;
      margin-top: -600px;
    }
  }

  .img-vert {
    -moz-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
    filter: FlipV;
    -ms-filter: "FlipV";
  }
`;

export const Footer = () => {
  return (
    <Styles>
      <Container className="h-100">
        <Row className="mt-5 d-flex justify-content-center">
          <Col className="col-4 align-self-center lead">Follow me on:</Col>
          <Col className="col-4 align-self-center">
            <IconButton
              className="float-right"
              href="https://www.linkedin.com/in/leolebleis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              className="float-right"
              href="https://github.com/Leolebleis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Col>
        </Row>
        <footer>
          <hr />
          <div className="pb-3 mx-2">
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
            <div className="float-right">
              &copy; {new Date().getFullYear()}
              <a href="/"> Léo Le Bleis</a>
            </div>
          </div>{" "}
        </footer>
      </Container>
      <div className="jumbo img-vert"></div>
    </Styles>
  );
};
