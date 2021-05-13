import React, { Component } from "react";
import APIURL from "../../helpers/environment";

type valueTypes = {
  showModal: boolean;
  homestreet1: any;
  homestreet2: any;
  homeType: any;
  photo: any;
  description: any;
  yearBuilt: any;
};

type acceptedProps = {
  home: any;
  index: any;
  sessionToken: any;
  getHomes: any;
  showModal: () => void;
};

class EditModal extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      showModal: true,
      homestreet1: this.props.home.homestreet1,
      homestreet2: this.props.home.homestreet2,
      homeType: this.props.home.homeType,
      photo: this.props.home.photo,
      description: this.props.home.description,
      yearBuilt: this.props.home.yearBuilt,
    };
  }

  updateHome = async () => {
    try {
      const response = await fetch(
        `${APIURL}/homes/update/${this.props.home.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            homes: {
              homestreet1: this.state.homestreet1,
              homestreet2: this.state.homestreet2,
              homeType: this.state.homeType,
              yearBuilt: this.state.yearBuilt,
              photo: this.state.photo,
              description: this.state.description,
            },
          }),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      this.props.getHomes();
      this.props.showModal();
    } catch (err) {
      console.log(err);
    }
  };

  deleteHomes = () => {
    fetch(`${APIURL}/delete/${this.props.home.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Home Deleted", data);
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
                <h3 className="text-3xl font-semibold">Edit Home</h3>
              </div>
              {/* body */}
              <div className="relative p-6 flex-auto">
                <label htmlFor="street1">
                  Street 1
                  <input
                    type="text"
                    name="home street line 1"
                    id="homestreetline1"
                    className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={this.state.homestreet1}
                    onChange={(e) =>
                      this.setState({ homestreet1: e.target.value })
                    }
                  />
                </label>
                <label htmlFor="street2">
                  Street 2
                  <input
                    type="text"
                    name="home street line 2"
                    id="homestreet2"
                    className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={this.state.homestreet2}
                    onChange={(e) =>
                      this.setState({ homestreet2: e.target.value })
                    }
                  />
                </label>
                <label htmlFor="homeType">
                  Home Type
                  <input
                    type="text"
                    name="home type"
                    id="homeType"
                    className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={this.state.homeType}
                    onChange={(e) =>
                      this.setState({ homeType: e.target.value })
                    }
                  />
                </label>
                <label htmlFor="yearBuilt">
                  Year Built
                  <input
                    type="text"
                    name="year built"
                    id="yearBuilt"
                    className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={this.state.yearBuilt}
                  />
                </label>
                <label htmlFor="Description">
                  Description
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={this.state.description}
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
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
                      this.updateHome(), this.setState({ showModal: false });
                    }
                  }}
                >
                  Save Updates
                </button>
                <button
                  type="submit"
                  className="text-white bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => {
                    this.deleteHomes(), this.setState({ showModal: false });
                  }}
                >
                  Delete Home
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

export default EditModal;
