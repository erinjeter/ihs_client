import React, { Component } from "react";
import AddStories from "./AddStories";
import StoryDisplay from "./StoryDisplay";
import APIURL from "../../helpers/environment";

type valueTypes = {
  allStories: any;
};

type acceptedProps = {
  sessionToken: any;
};

class StoryIndex extends Component<acceptedProps, valueTypes> {
  constructor(props: any) {
    super(props);
    this.state = { allStories: [] };
  }

  getStories = () => {
    console.log(this.props.sessionToken);
    fetch(`${APIURL}/stories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ allStories: json });
      });
  };

  componentDidMount() {
    this.getStories();
    console.log(this.props.sessionToken);
  }

  render() {
    return (
      <div>
        <div>
          <StoryDisplay
            allStories={this.state.allStories}
            sessionToken={this.props.sessionToken}
            getStories={this.getStories}
          />
          <AddStories
            sessionToken={this.props.sessionToken}
            getStories={this.getStories}
          />
        </div>
      </div>
    );
  }
}

export default StoryIndex;
