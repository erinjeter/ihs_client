import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="App flex justify-between h-18 relative uppercase bg-black">
        <div className="p-4 md:block">
          <Link className="p-4 text-gray-500 hover:text-gray-200" to="/">
            ABOUT
          </Link>
          <Link className="p-4 text-gray-500 hover:text-gray-200" to="/">
            RESOURCES
          </Link>
          <Link className="p-4 text-gray-500 hover:text-gray-200" to="/">
            GET INVOLVED
          </Link>
          <Link className="p-4 text-gray-500 hover:text-gray-200" to="/">
            SEARCH HISTORIC HOMES
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
