import React from "react";
import { Repo } from "./Repo";
import { Row, Container } from "react-bootstrap";

const user = "Leolebleis";

const convertResponseToJson = (response: any) => {
  if (response.status !== 200) {
    console.error(
      "There was a problem with the API response, status code:",
      response.status
    );
    return;
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
        <h2 className="mt-5">Check out my projects</h2>
        <Row>
          {repos.map(repo => (
            <Repo repo={repo} />
          ))}
        </Row>
      </Container>
    );
  }
}
