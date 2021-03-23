import React from "react";

export default class Register extends React.Component {
  state = {
    username: "",
    passwor: "",
    role: "ROLE_USER",
  };

  register = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/register", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        role: this.state.role,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ error: false });
          this.props.toggleRegister();
        } else {
          this.setState({ error: true });
        }
      })
      .catch((error) => console.log("Error detected: " + error));
  };

  render() {
    return (
      <div>
        <br />
        <br />
        Register:
        <form onSubmit={this.register}>
          Username:
          <input
            onChange={(event) => {
              this.setState({ username: event.target.value });
            }}
          />
          <br />
          <br />
          Password:
          <input
            type="password"
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <br />
          <br />
          Role:
          <div>
            <select
              value={this.state.role}
              onChange={(event) => {
                this.setState({ role: event.target.value });
              }}
            >
              <option selected>ROLE_USER</option>
              <option>ROLE_ADMIN</option>
            </select>
          </div>
          <br />
          <br />
          <button>Register</button>
          {this.state.error ? <div>An Error Occurred</div> : null}
        </form>
      </div>
    );
  }
}
