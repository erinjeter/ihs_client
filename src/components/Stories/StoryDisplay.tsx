import React, { Component } from "react";
import StoryCard from "./StoryCard";

type acceptedProps = {
  allStories: any;
  sessionToken: any;
  getStories: () => void;
};

interface storyInterface {
  story: {};
}

class StoryDisplay extends Component<acceptedProps, storyInterface> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = { story: {} };
  }

  render() {
    return (
      <div className="container my-12 mx-auto px-4 md:px-12 flex-row">
        <div className="-mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {this.props.allStories.map((story: any, index: any) => (
              <StoryCard
                story={story}
                index={index}
                sessionToken={this.props.sessionToken}
                getStories={this.props.getStories}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default StoryDisplay;
