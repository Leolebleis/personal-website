import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Footer = () => {
  return (
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
      <hr />
      <div className="mb-5 mx-2">
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
      </div>
    </Container>
  );
};
