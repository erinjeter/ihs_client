import React, { Component } from "react";
import HomeDisplay from "./HomeDisplay";

type valueTypes = {
  allHomes: any;
};

type acceptedProps = {
  sessionToken: string;
};

class HomeIndex extends Component<acceptedProps, valueTypes> {
  constructor(props: any) {
    super(props);
    this.state = { allHomes: [] };
  }

  getHomes = () => {
    fetch("http://localhost:3000/homes", {
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
          <HomeDisplay allHomes={this.state.allHomes} />
        </div>
      </div>
    );
  }
}

export default HomeIndex;
