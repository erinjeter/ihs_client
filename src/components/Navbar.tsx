import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

type acceptedProps = {
  token: any;
  logout: any;
};

class Navbar extends Component<acceptedProps, {}> {
  constructor(props: any) {
    super(props);
  }

  logoutButton = () => {
    return localStorage.getItem("sessionToken") === null ? (
      ""
    ) : (
      <button onClick={this.props.logout}>Logout</button>
    );
  };

  render() {
    return (
      <div className="App flex justify-between h-18 relative uppercase bg-black">
        <div className="p-4 md:block">
          <NavLink className="p-4 text-gray-500 hover:text-gray-200" to="/">
            ABOUT
          </NavLink>
          <NavLink
            className="p-4 text-gray-500 hover:text-gray-200"
            to="/stories"
          >
            IRVINGTON STORIES
          </NavLink>
          <NavLink
            className="p-4 text-gray-500 hover:text-gray-200"
            to="/homes"
          >
            HISTORIC HOMES
          </NavLink>
          <NavLink
            className="p-4 text-gray-500 hover:text-gray-200"
            to="/homes/create"
          >
            ADD HOMES
          </NavLink>
          <NavLink
            onClick={this.props.logout}
            className="p-4 text-gray-500 hover:text-gray-200"
            to="/"
          >
            Logout
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
