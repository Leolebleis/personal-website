import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";

export default class MyForm extends React.Component<{}, { status: string }> {
  constructor(props: any) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className="border border-white rounded "
        noValidate
        autoComplete="off"
        onSubmit={this.submitForm}
        action="https://formspree.io/mbjkpdwv"
        method="POST"
      >
        <div className="md-form border-white border">
          <Row className="d-flex justify-content-center">
            <Col className="col-lg">
              <div className="input-group">
                <TextField
                  fullWidth
                  className="mx-5 mt-2"
                  id="standard-basic"
                  name="full name"
                  label="Full name"
                />
              </div>
              <div className="input-group">
                <TextField
                  fullWidth
                  className="mx-5 mt-2"
                  id="standard-basic"
                  name="email"
                  label="Email"
                />
              </div>
              <div className="input-group">
                <TextField
                  fullWidth
                  className="mx-5 mt-2"
                  id="standard-basic"
                  name="subject"
                  label="Subject"
                />
              </div>
              <div className="input-group">
                <TextField
                  fullWidth
                  className="mx-5 mt-2"
                  id="standard-basic"
                  name="message"
                  label="Message"
                />
              </div>
            </Col>
          </Row>
        </div>
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="btn btn-large btn-primary my-4">
            <span className="align-middle">Send</span> <Icon className="align-middle ml-1">send</Icon>
          </button>
        )}
        {status === "ERROR" && (
          <p className="text-center">Oops! There was an error.</p>
        )}
      </form>
    );
  }

  submitForm(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
