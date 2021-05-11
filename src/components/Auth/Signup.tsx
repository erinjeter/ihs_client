import React, { Component } from "react";

type acceptedProps = {
  sessionToken: any;
};

type valueTypes = {
  username: string;
  password: string;
  email: string;
  permission: string;
  firstName: string;
  lastName: string;
  isResident: boolean;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
};

class Signup extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      permission: "",
      firstName: "",
      lastName: "",
      isResident: false,
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip: "",
    };
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:3000/user/create", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        permission: "standard",
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        isResident: this.state.isResident,
        street1: this.state.street1,
        street2: this.state.street2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
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
            type="text"
            placeholder="Email"
            name="username"
            required
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            type="text"
            placeholder="Password"
            name="username"
            required
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <input
            className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            type="text"
            placeholder="First Name"
            name="username"
            required
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <input
            className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            type="text"
            placeholder="Last Name"
            name="username"
            required
            value={this.state.lastName}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
          <input
            className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            type="text"
            placeholder="Street Address Line 1"
            name="street1"
            required
            value={this.state.street1}
            onChange={(e) => this.setState({ street1: e.target.value })}
          />
          <input
            className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            type="text"
            placeholder="Street Address Line 2"
            name="street2"
            required
            value={this.state.street2}
            onChange={(e) => this.setState({ street2: e.target.value })}
          />
          <input
            className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            type="text"
            placeholder="City"
            name="city"
            required
            value={this.state.city}
            onChange={(e) => this.setState({ city: e.target.value })}
          />
          <input
            className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            type="text"
            placeholder="Zip"
            name="zip"
            required
            value={this.state.zip}
            onChange={(e) => this.setState({ zip: e.target.value })}
          />
          <div>
            {/* Are you an Irvington resident? */}
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="checkbox"
              name="isResident"
              required
              onClick={(e) => this.setState({ isResident: true })}
            />
            <button
              type="submit"
              className="font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
