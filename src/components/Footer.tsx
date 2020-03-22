import React from "react";

export const Footer = () => {
  return (
    <React.Fragment>
      <hr className="mt-5" />
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
      <div className="float-right">
        &copy; 2020
        <a href="/"> Léo Le Bleis</a>
        <br />
        <br />
        <br />
      </div>
    </React.Fragment>
  );
};
