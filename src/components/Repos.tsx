import React from "react";
import { Repo } from "./Repo";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Icon from "../assets/projects-code.svg";

const Styles = styled.div`
  .icon {
    width: 40px;
    height: 40px;
  }
`;

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
      <Styles className="bg-white p-5">
        <Container className="">
          <Row className="justify-content-center">
            <img src={Icon} alt="Screen with code icon" className="icon mb-3" />
          </Row>
          <Row className="justify-content-center">
            <h2 className="mb-2 text-center">Check out some of my projects</h2>
          </Row>

          <Row className="h-100 mb-2">
            {repos.map((repo, i) => (
              <Col className="col-12 col-md-4 " key={i}>
                <Repo repo={repo} />
              </Col>
            ))}
          </Row>
        </Container>
      </Styles>
    );
  }
}
