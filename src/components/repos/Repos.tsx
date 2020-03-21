import React from "react";
import { Repo } from "../repo/Repo";

const user = "Leolebleis";

class Repos extends React.Component {
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
      <React.Fragment>
        <h2>Check out my projects</h2>
        <div>
          {repos.map(repo => (
            <Repo repo={repo} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

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

export default Repos;
