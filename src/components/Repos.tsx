import React from "react";
import { Repo } from "./Repo";
import { Row, Col, Container } from "react-bootstrap";

const user = "Leolebleis";

const convertResponseToJson = (response: any) => {
  if (response.status !== 200) {
    console.error(
      "There was a problem with the API response, status code:",
      response.status
    );
    const repos = [
      {
        name: response.status + "!",
        description: "There was an issue with the github API.",
        html_url: "https://github.com/Leolebleis/",
        language: "French"
      },
      {
        name: response.status + "!",
        description: "There was an issue with the github API.",
        html_url: "https://github.com/Leolebleis/",
        language: "French"
      },
      {
        name: response.status + "!",
        description: "There was an issue with the github API.",
        html_url: "https://github.com/Leolebleis/",
        language: "French"
      },
      {
        name: response.status + "!",
        description: "There was an issue with the github API.",
        html_url: "https://github.com/Leolebleis/",
        language: "French"
      }
    ];
    return repos;
  }

  return response.json();
};

export default class Repos extends React.Component {
  state = {
    repos: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${user}/repos?sort=pushed`)
      .then(convertResponseToJson)
      .then(response =>
        this.setState({
          repos: response,
          loading: false
        })
      )
      .catch(error =>
        this.setState({
          loading: false,
          error: true
        })
      );
  }

  render() {
    const repos = this.state.repos;
    return (
      <Container>
        <Row>
          <h2 className="mt-2 ml-3">Check out some of my projects</h2>
        </Row>

        <Row className="h-100 mb-2">
          {repos.map((repo, i) => (
            <Col className="d-flex col-12 col-md-4" key={i}>
              <Repo repo={repo} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
