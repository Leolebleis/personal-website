import React from "react";
import pictureofme from "../../assets/pictureofme.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .picture {
    border-radius: 8px;
    width: 40%;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.22) 10px 10px 43px;
      transform: translate3d(-3px, -3px, 0px);
    }
  }

  .wrapper {
    border: 1px solid black;
    overflow: hidden;
  }

  .text {
    border: 1px solid red;
    float: left; /* add this */
  }

  .picture-div {
    border: 1px solid green;
    overflow: hidden; /* if you don't want #second to wrap below #first */
  }
`;

class About extends React.Component<IAboutProps> {
  render() {
    return (
      <Styles>
        <div className="wrapper">
          <div className="text">
            <h2>About my site</h2>
            <p>Feel free to explore the different features on this site!</p>
            <p>This is the about page!</p>
          </div>
          <div className="picture-div">
            <img className="picture" src={pictureofme} alt="Me!" />
          </div>
        </div>
      </Styles>
    );
  }
}

export default About;

interface IAboutProps {}
