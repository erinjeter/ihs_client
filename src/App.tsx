import React, { Component } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import HomeIndex from "./components/Homes/HomeIndex";
import AddHomes from "./components/Homes/AddHomes";
import AddStories from "./components/Stories/AddStories";
import StoryIndex from "./components/Stories/StoryIndex";

type valueTypes = {
  sessionToken: any;
  permission: string;
};

class App extends Component<{}, valueTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      sessionToken: "",
      permission: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
    if (localStorage.getItem("permission")) {
      this.setState({ permission: localStorage.getItem("permission")! });
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem("sessionToken", newToken);
    this.setState({ sessionToken: newToken });
    console.log(this.state.sessionToken);
  };

  permissionUpdateToken = (newPermission: string) => {
    localStorage.setItem("permission", newPermission);
    this.setState({ permission: newPermission });
    console.log(this.state.permission);
  };

  clearToken() {
    localStorage.clear();
    this.setState({ sessionToken: "" });
    console.log("token cleared");
  }

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem("sessionToken") ? (
      <Hero />
    ) : (
      <Auth
        sessionToken={this.updateToken}
        permission={this.permissionUpdateToken}
      />
    );
  };

  protectedViewsHomes = () => {
    return this.state.sessionToken === localStorage.getItem("sessionToken") ? (
      <HomeIndex sessionToken={this.state.sessionToken} />
    ) : (
      <Auth
        sessionToken={this.updateToken}
        permission={this.permissionUpdateToken}
      />
    );
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar
            logout={this.clearToken.bind(this)}
            token={this.state.sessionToken}
            protectedViews={this.protectedViews}
            protectedViewsHomes={this.protectedViewsHomes}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
