import React from "react";
import pictureofme from "../../assets/pictureofme.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .picture {
    border-radius: 8px;
    width: 400px;
  }

  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > tfoot > tr > td,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > thead > tr > th {
    border: 0;
  }
  .td {
    padding: 0;
  }

  .td-picture {
    text-align: center;
  }
`;

class About extends React.Component<IAboutProps> {
  render() {
    return (
      <div>
        <Styles>
          <table className="table">
            <tbody>
              <tr>
                <td className="td">
                  <h2>About my site...</h2>
                  <p>
                    Feel free to explore the different features on this site!
                  </p>
                  <p>This is the about page!</p>
                </td>
                <td className="td-picture">
                  <img className="picture" src={pictureofme} alt="Me!" />
                </td>
              </tr>
            </tbody>
          </table>
        </Styles>
      </div>
    );
  }
}

export default About;

interface IAboutProps {}
