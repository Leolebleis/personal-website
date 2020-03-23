import React from "react";
import Card from "react-bootstrap/Card";

export const Repo = (props: Props) => (
  <div>
    <Card
      className="col-xs-6 m-2"
      style={{ width: "18rem", height: "15em" }}
    >
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.repo.name}</Card.Title>
        <pre>{props.repo.language}</pre>
        <p>{props.repo.description}</p>
        <div className="mt-auto align-bottom">
          <a
            className="btn btn-primary mt-auto"
            href={props.repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the repo
          </a>
        </div>
      </Card.Body>
    </Card>
  </div>
);

interface Props {
  repo: {
    name: string;
    description: string;
    html_url: string;
    language: string;
  };
}
