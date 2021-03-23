import React from "react";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";

export default class App extends React.Component {
  state = {
    goToRegister: false,
  };

  toggleRegister = () => {
    this.setState({ goToRegister: false });
  };

  render() {
    if (this.state.goToRegister)
      return (
        <div className="App">
          <Register toggleRegister={this.toggleRegister} />
          <br />
          <button onClick={() => this.setState({ goToRegister: false })}>
            Back to Login
          </button>
        </div>
      );
    else
      return (
        <div className="App">
          <Login />
          <br />
          <button onClick={() => this.setState({ goToRegister: true })}>
            Click for Register
          </button>
        </div>
      );
  }
}
