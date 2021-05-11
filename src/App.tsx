import React, { Component } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import HomeIndex from "./components/Homes/HomeIndex";
import AddHomes from "./components/Homes/AddHomes";
import AddStories from "./components/Stories/AddStories";
import StoryIndex from "./components/Stories/StoryIndex";

type valueTypes = {
  sessionToken: any;
};

class App extends Component<{}, valueTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      sessionToken: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("sessionToken")) {
      this.setState({ sessionToken: localStorage.getItem("sessionToken") });
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem("sessionToken", newToken);
    this.setState({ sessionToken: newToken });
    console.log(this.state.sessionToken);
  };

  clearToken() {
    localStorage.clear();
    this.setState({ sessionToken: "" });
    console.log("token cleared");
  }

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem("sessionToken") ? (
      <HomeIndex sessionToken={this.state.sessionToken} />
    ) : (
      <Auth sessionToken={this.updateToken} />
    );
  };

  protectedViewsTwo = () => {
    return this.state.sessionToken === localStorage.getItem("sessionToken") ? (
      <StoryIndex sessionToken={this.state.sessionToken} />
    ) : (
      <Auth sessionToken={this.updateToken} />
    );
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar
            logout={this.clearToken.bind(this)}
            token={this.state.sessionToken}
          />
          {this.protectedViews()}
          {this.protectedViewsTwo()}
          <Hero />
          <Route exact path="/homes/create">
            <AddHomes sessionToken={this.state.sessionToken} />
          </Route>
          <AddStories sessionToken={this.state.sessionToken} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
