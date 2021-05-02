import React, { Component } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import HomeIndex from "./components/Homes/HomeIndex";

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

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem("sessionToken") ? (
      <HomeIndex sessionToken={this.state.sessionToken} />
    ) : (
      <Auth sessionToken={this.updateToken} />
    );
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {this.protectedViews()}
          <Hero />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
