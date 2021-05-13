import React, { Component } from "react";
import HomeDisplay from "./HomeDisplay";
import APIURL from "../../helpers/environment";

type valueTypes = {
  allHomes: any;
};

type acceptedProps = {
  sessionToken: any;
};

class HomeIndex extends Component<acceptedProps, valueTypes> {
  constructor(props: any) {
    super(props);
    this.state = { allHomes: [] };
  }

  getHomes = () => {
    fetch(`${APIURL}/homes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ allHomes: json });
      });
  };

  componentDidMount() {
    this.getHomes();
    console.log(this.props.sessionToken);
  }

  render() {
    return (
      <div>
        <div>
          <HomeDisplay
            allHomes={this.state.allHomes}
            sessionToken={this.props.sessionToken}
            getHomes={this.getHomes}
          />
        </div>
      </div>
    );
  }
}

export default HomeIndex;
