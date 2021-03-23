import React from "react";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

export default class Login extends React.Component {
  state = {
    username: null,
    password: null,
    login: false,
    data: null,
    error: false,
  };

  componentDidMount() {
    this.collectStore();
  }
  collectStore() {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.login) {
      this.setState({ login: true, data: store });
    }
  }

  login = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/auth", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ error: false });
          res.json().then((res) => {
            localStorage.setItem(
              "login",
              JSON.stringify({
                login: true,
                data: res.token,
              })
            );
            this.collectStore();
          });
        } else {
          this.setState({ error: true });
        }
      })
      .catch((error) => console.log("Error detected: " + error));
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({ login: false, data: null });
  };

  render() {
    return (
      <div>
        Main Page:
        <br />
        <br />
        Login:
        {!this.state.login ? (
          <form onSubmit={this.login}>
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
            <button>Login</button>
          </form>
        ) : (
          <div>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        )}
        {this.state.error ? <div>Invalid credentials</div> : null}
        {this.state.login ? (
          <div>
            <br />
            <br />
            <UserPage />
            <br />
            <br />
            <AdminPage />
          </div>
        ) : null}
      </div>
    );
  }
}
