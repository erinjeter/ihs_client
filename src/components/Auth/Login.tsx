import React, { Component } from "react";

type acceptedProps = {
  sessionToken: any;
};

type valueTypes = {
  username: string;
  password: string;
};

class Login extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.sessionToken(data.sessionToken);
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="mb-3">
          <input
            className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            type="text"
            placeholder="Username"
            name="username"
            required
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button
            type="submit"
            className="font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
