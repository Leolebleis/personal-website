import React from "react";
import Navbar from "react-bootstrap/Navbar";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


export const NavigationBar = () => (
  <React.Fragment>
    <Navbar>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#projects">
              Projects
            </a>
          </li>
          <li>
          <a className="nav-link" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
        <IconButton
          href="https://www.linkedin.com/in/leolebleis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://github.com/Leolebleis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </div>
    </Navbar>
  </React.Fragment>
);
