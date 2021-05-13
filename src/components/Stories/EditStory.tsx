import React, { Component } from "react";
import APIURL from "../../helpers/environment";

type valueTypes = {
  showModal: boolean;
  story: string;
};

type acceptedProps = {
  story: any;
  index: any;
  sessionToken: any;
  getStories: any;
  showModal: () => void;
};

class EditStory extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      showModal: true,
      story: this.props.story.story,
    };
  }

  updateStory = async () => {
    try {
      const response = await fetch(
        `${APIURL}/stories/update/${this.props.story.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            story: this.state.story,
          }),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      this.props.getStories();
      this.props.showModal();
    } catch (err) {
      console.log(err);
    }
  };

  deleteStories = () => {
    fetch(`${APIURL}/stories/delete/${this.props.story.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Story Deleted", data);
      });
    this.props.showModal();
  };

  render() {
    return (
      <>
        <div className="justify-center items-center flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-6xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* header */}
              <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Edit Story</h3>
              </div>
              {/* body */}
              <div className="relative p-6 flex-auto">
                <label htmlFor="street1">
                  Story
                  <input
                    type="text"
                    name="story"
                    id="story"
                    className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={this.state.story}
                    onChange={(e) => this.setState({ story: e.target.value })}
                  />
                </label>
              </div>
              {/* footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border blue-Gray-200 rounded-b">
                <button
                  className="text-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    this.props.showModal();
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={(e) => {
                    {
                      this.updateStory(), this.setState({ showModal: false });
                    }
                  }}
                >
                  Save Updates
                </button>
                <button
                  type="submit"
                  className="text-white bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => {
                    this.deleteStories(), this.setState({ showModal: false });
                  }}
                >
                  Delete Story
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  }
}

export default EditStory;
