import React from "react";

export default class AdminPage extends React.Component {
  state = {
    admins: null,
  };

  componentDidMount() {
    let token = "basaramadık";
    if (localStorage.getItem("login") != null) {
      token = "Bearer " + JSON.parse(localStorage.getItem("login")).data;
    } else {
      console.log("not logged in");
    }
    //console.log(token);
    fetch("http://localhost:8080/hello-admin", {
      method: "get",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((json) => {
            this.setState({ admins: json });
          });
        }
      })
      .catch((error) => console.log("Error detected: " + error));
  }

  render() {
    return (
      <div>
        Admin Page
        <div>
          Admins :{" "}
          {this.state.admins ? (
            <div>
              {this.state.admins.map((user) => (
                <div>
                  <div>Id:{user.id}</div>
                  <div>Username:{user.username}</div>
                  <div>Password:{user.password}</div>
                  <div>Role:{user.role}</div>
                </div>
              ))}
            </div>
          ) : (
            <div>Only admins can access this source.</div>
          )}
        </div>
      </div>
    );
  }
}
