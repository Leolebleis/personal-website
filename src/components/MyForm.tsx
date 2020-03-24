import React from "react";
import { Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
      <div>
        <form
          noValidate
          autoComplete="off"
          onSubmit={this.submitForm}
          action="https://formspree.io/mbjkpdwv"
          method="POST"
        >
          <div className="md-form">
            <Row className="d-flex justify-content-center">
              <Col className="col-lg mt-3">
                <div className="input-group">
                  <TextField
                    fullWidth
                    className="mx-5 mt-2"
                    id="standard-basic"
                    name="Full name"
                    label="Full name"
                  />
                </div>
                <div className="input-group">
                  <TextField
                    fullWidth
                    className="mx-5 mt-2"
                    id="standard-basic"
                    name="Email"
                    label="Email"
                  />
                </div>
                <div className="input-group">
                  <TextField
                    fullWidth
                    className="mx-5 mt-2"
                    id="standard-basic"
                    name="Subject"
                    label="Subject"
                  />
                </div>
                <div className="input-group">
                  <TextField
                    fullWidth
                    className="mx-5 mt-2"
                    id="standard-basic"
                    name="Message"
                    label="Message"
                  />
                </div>
              </Col>
            </Row>
          </div>

          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <div className="text-center">
              <Button
                className="m-4"
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
              >
                Send
              </Button>
            </div>
          )}
          {status === "ERROR" && (
            <p className="text-center">Oops! There was an error.</p>
          )}
        </form>
      </div>
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
