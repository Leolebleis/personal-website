import React from "react";

export const Repo = (props: Props) => (
  <div>
    <a href={props.repo.html_url} target="_blank">{props.repo.name}</a>
    <p>{props.repo.description}</p>
  </div>
);

interface Props {
  repo: {
    name: string;
    description: string;
    html_url: string;
  };
}
