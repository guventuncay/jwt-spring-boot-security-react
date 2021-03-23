import React from "react";

export default class UserPage extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    let token = "basaramadık";
    if (localStorage.getItem("login") != null) {
      token = "Bearer " + JSON.parse(localStorage.getItem("login")).data;
    } else {
      console.log("not logged in");
    }
    //console.log(token);
    fetch("http://localhost:8080/hello-user", {
      method: "get",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((json) => {
            this.setState({ users: json });
          });
        }
      })
      .catch((error) => console.log("Error detected: " + error));
  }

  render() {
    return (
      <div>
        User Page
        <div>
          Users:{" "}
          {this.state.users ? (
            <div>
              {this.state.users.map((user) => (
                <div>
                  <div>Id:{user.id}</div>
                  <div>Username:{user.username}</div>
                  <div>Password:{user.password}</div>
                  <div>Role:{user.role}</div>
                </div>
              ))}
            </div>
          ) : (
            <div>Only users can access this source.</div>
          )}
        </div>
      </div>
    );
  }
}
