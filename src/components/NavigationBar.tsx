import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Styles = styled.div`
  .no-padding {
    padding: 10px;

    @media (max-width: 576px) {
      padding: 8px;
    }
  }
`;

function HideOnScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: any) {
  return (
    <Styles>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ background: "transparent", boxShadow: "none" }}>
          <Toolbar>
            <Container>
              <Row className="h-100">
                <Col className="col-8 no-padding my-auto">
                  <Button
                    className="no-padding"
                    style={{
                      textTransform: "none",
                      fontSize: 12,
                      minWidth: "0px"
                    }}
                    href="/#home"
                  >
                    Home
                  </Button>
                  <Button
                    className="no-padding"
                    style={{
                      textTransform: "none",
                      fontSize: 12,
                      minWidth: "0px"
                    }}
                    href="/#about"
                  >
                    About
                  </Button>
                  <Button
                    className="no-padding"
                    style={{
                      textTransform: "none",
                      fontSize: 12,
                      minWidth: "0px"
                    }}
                    href="/#projects"
                  >
                    Projects
                  </Button>
                  <Button
                    className="no-padding"
                    style={{
                      textTransform: "none",
                      fontSize: 12,
                      minWidth: "0px"
                    }}
                    href="/#contact"
                  >
                    Contact
                  </Button>
                </Col>
                <Col className="col-4 my-auto">
                  <IconButton
                    className="float-right no-padding"
                    href="https://www.linkedin.com/in/leolebleis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    className="float-right no-padding"
                    href="https://github.com/Leolebleis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Col>
              </Row>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Styles>
  );
}

export class NavigationBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HideAppBar />
      </React.Fragment>
    );
  }
}
