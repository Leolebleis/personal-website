import React from "react";
import Card from "react-bootstrap/Card";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Col from "react-bootstrap/Col";

export const Repo = (props: Props) => (
  <Col className="col-12 col-sm-4 mt-2">
    <Card className="h-100">
      <Card.Body className="text-center d-inline-flex flex-column">
        <Card.Title>{props.repo.name}</Card.Title>
        <pre>{props.repo.language}</pre>
        <p>{props.repo.description}</p>
        <IconButton
          className="mt-auto"
          href={props.repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Card.Body>
    </Card>
  </Col>
);

interface Props {
  repo: {
    name: string;
    description: string;
    html_url: string;
    language: string;
  };
}
