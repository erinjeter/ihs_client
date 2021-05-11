import React, { Component } from "react";
import EditStory from "./EditStory";

type valueTypes = {
  story: string;
  showModal: boolean;
};

type acceptedProps = {
  getStories: () => void;
  story: any;
  index: any;
  sessionToken: any;
};

class StoryCard extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      story: "",
      showModal: false,
    };
  }

  updateOn = () => {
    this.setState({ showModal: true });
  };

  updateOff = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="overflow-hidden rounded-lg shadow-lg">
        <>
          <header className="flex-col items-center justify-between leading-tight p-2 md:p-4">
            <h3 className="text-grey-darker text-sm">
              Story: {this.props.story.story}
            </h3>
          </header>
          <button
            className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 type=button"
            onClick={(e) => {
              this.updateOn();
            }}
          >
            Edit Story
          </button>
          {this.state.showModal ? (
            <EditStory
              story={this.props.story}
              index={this.props.index}
              sessionToken={this.props.sessionToken}
              getStories={this.props.getStories}
              showModal={this.updateOff}
            />
          ) : null}
        </>
      </div>
    );
  }
}

export default StoryCard;
