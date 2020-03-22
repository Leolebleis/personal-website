import React from "react";
import Card from "react-bootstrap/Card";

export const Repo = (props: Props) => (
  <div>
    <Card
      className="col-xs-6 mx-2 mt-2"
      style={{ width: "18rem", height: "15em" }}
    >
      <Card.Body className="text-center d-flex flex-column">
        <Card.Title>{props.repo.name}</Card.Title>
        <pre>{props.repo.language}</pre>
        <p>{props.repo.description}</p>
        <div className="mt-auto">
          <a
            className="btn btn-primary"
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
