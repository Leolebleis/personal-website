import React from "react";
import Card from "react-bootstrap/Card";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

const Styles = styled.div`
  .shadow {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.22) 10px 10px 10px;
      transform: translate3d(-3px, -3px, 0px);
    }
  }

  .card-body {
    min-height: 150px;
  }
`;

export const Repo = (props: Props) => (
  <Styles>
    <Card border="light" className="shadow mt-4 card-body">
      <Card.Body style={{ padding: 0 }} className="text-center">
        <Card.Title>{props.repo.name}</Card.Title>
        <pre>{props.repo.language}</pre>
        <p>{props.repo.description}</p>
      </Card.Body>
      <Card.Footer className="text-center">
        <IconButton
          className=""
          href={props.repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Card.Footer>
    </Card>
  </Styles>
);

interface Props {
  repo: {
    name: string;
    description: string;
    html_url: string;
    language: string;
  };
}
