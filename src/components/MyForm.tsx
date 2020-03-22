import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .input {
  }
`;

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
      <Styles>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mbjkpdwv"
          method="POST"
        >
          <div className="md-form">
            <Row className="d-flex justify-content-center">
              <Col className="col-lg">
                <div className="input-group m-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Hello</span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Full name *"
                    type="text"
                    name="Fullname"
                  />
                </div>
                <div className="input-group m-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Hello</span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Email *"
                    type="email"
                    name="Email"
                  />
                </div>
                <div className="input-group m-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Hello</span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Subject *"
                    type="text"
                    name="Subject"
                  />
                </div>
                <div className="input-group m-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Hello</span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Message *"
                    type="text"
                    name="Message"
                  />
                </div>
              </Col>
            </Row>
          </div>

          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <div className="text-center">
              <button className="btn btn-primary m-2">Submit</button>
            </div>
          )}
          {status === "ERROR" && (
            <p className="text-center">Oops! There was an error.</p>
          )}
        </form>
      </Styles>
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
