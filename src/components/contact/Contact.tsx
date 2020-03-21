import React from "react";

class Contact extends React.Component<IContactProps> {
  render() {
    return (
      <div>
        <h2>Contact me</h2>
        <p>Feel free to explore the different features on this site!</p>
        <p>This is the contact page!</p>
      </div>
    );
  }
}

export default Contact;

interface IContactProps {
}
