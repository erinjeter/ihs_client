import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import HomeIndex from "./Homes/HomeIndex";
import StoryIndex from "./Stories/StoryIndex";
import AddHomes from "./Homes/AddHomes";

type acceptedProps = {
  token: any;
  logout: any;
  protectedViews: any;
  protectedViewsHomes: any;
};

class Navbar extends Component<acceptedProps, {}> {
  constructor(props: any) {
    super(props);
  }

  logoutButton = () => {
    return localStorage.getItem("sessionToken") === null ? (
      ""
    ) : (
      <Link
        onClick={this.props.logout}
        className="p-4 text-gray-500 hover:text-gray-200"
        to="/"
      >
        Logout
      </Link>
    );
  };

  adminView = () => {
    return localStorage.getItem("permission") === "admin" ? (
      <Link
        className="p-4 text-gray-500 hover:text-gray-200"
        to="/homes/create"
      >
        ADD HOMES
      </Link>
    ) : (
      ""
    );
  };

  render() {
    return (
      <>
        <div className="App flex justify-between h-18 relative uppercase bg-black">
          <div className="p-4 md:block">
            <Link className="p-4 text-gray-500 hover:text-gray-200" to="/">
              HOME
            </Link>
            <Link
              className="p-4 text-gray-500 hover:text-gray-200"
              to="/stories"
            >
              IRVINGTON STORIES
            </Link>
            <Link className="p-4 text-gray-500 hover:text-gray-200" to="/homes">
              VIEW HOMES
            </Link>
            {this.adminView()}
            {this.logoutButton}
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path="/stories">
              <StoryIndex sessionToken={this.props.token} />
            </Route>
            <Route exact path="/homes/create">
              <AddHomes sessionToken={this.props.token} />
            </Route>
            <Route exact path="/test">
              {/* <HomeIndex sessionToken={this.props.token} /> */}
              {this.props.protectedViewsHomes}
            </Route>
            <Route exact path="/">
              {this.props.protectedViews()}
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default Navbar;
