import React, { Component } from "react";
import APIURL from "../../helpers/environment";

type acceptedProps = {
  sessionToken: any;
};

type valueTypes = {
  homestreet1: any;
  // homestreet2: any;
  homecity: any;
  homestate: any;
  homezip: any;
  homeType: any;
  photo: any;
  description: any;
  yearBuilt: any;
  picture: any;
};

class AddHomes extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      homestreet1: "",
      // homestreet2: "",
      homecity: "",
      homestate: "",
      homezip: "",
      homeType: "",
      photo: "",
      description: "",
      yearBuilt: "",
      picture: "",
    };
  }

  addHome = (e: any) => {
    fetch(`${APIURL}/homes/create`, {
      method: "POST",
      body: JSON.stringify({
        homestreet1: this.state.homestreet1,
        // homestreet2: this.state.homestreet2,
        homecity: this.state.homecity,
        homestate: this.state.homestate,
        homezip: this.state.homezip,
        homeType: this.state.homeType,
        yearBuilt: this.state.yearBuilt,
        photo: this.state.photo,
        description: this.state.description,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Home Added", data);
      });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.addHome} className="mb-3">
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              placeholder="Street 1 Line 1"
              name="street1"
              value={this.state.homestreet1}
              onChange={(e) => this.setState({ homestreet1: e.target.value })}
            />
            {/* <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              name="street2"
              placeholder="Street Line 2"
              required
              value={this.state.homestreet2}
              onChange={(e) => this.setState({ homestreet2: e.target.value })}
            /> */}
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              name="city"
              placeholder="City"
              required
              value={this.state.homecity}
              onChange={(e) => this.setState({ homecity: e.target.value })}
            />
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              name="state"
              placeholder="State"
              required
              value={this.state.homestate}
              onChange={(e) => this.setState({ homestate: e.target.value })}
            />
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              name="zip"
              placeholder="Zip"
              required
              value={this.state.homezip}
              onChange={(e) => this.setState({ homezip: e.target.value })}
            />
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              name="homeType"
              placeholder="Home Type"
              required
              value={this.state.homeType}
              onChange={(e) => this.setState({ homeType: e.target.value })}
            />
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              name="yearBuilt"
              placeholder="Year Built"
              required
              value={this.state.yearBuilt}
              onChange={(e) => this.setState({ yearBuilt: e.target.value })}
            />
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              name="picture"
              placeholder="Image"
              value={this.state.picture}
              onChange={(e) => this.setState({ picture: e.target.value })}
            />
            <input
              className="p-3 m-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              type="text"
              name="description"
              placeholder="Description"
              required
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
            <button type="submit">Add Home</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddHomes;
