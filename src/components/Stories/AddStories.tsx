import React, { Component } from "react";
import APIURL from "../../helpers/environment";

type acceptedProps = {
  sessionToken: any;
  getStories: any;
};

type valueTypes = {
  story: any;
};

class AddStories extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      story: "",
    };
  }

  getStories = () => {
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
      });
  };

  addStory = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}/stories/create`, {
      method: "POST",
      body: JSON.stringify({
        story: this.state.story,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Story Added", data);
        this.getStories();
      });
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.addStory} className="mb-3">
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              name="story"
              required
              value={this.state.story}
              onChange={(e) => this.setState({ story: e.target.value })}
            />
            <button type="submit">Submit Story</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddStories;
