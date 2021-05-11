import React, { Component } from "react";
import HomeCard from "./HomeCard";

type acceptedProps = {
  allHomes: any;
  sessionToken: any;
  getHomes: () => void;
};

interface homeInterface {
  home: {};
  // sessionToken: any;
}

class HomeDisplay extends Component<acceptedProps, homeInterface> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = { home: {} };
  }

  render() {
    return (
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="-mx-1 lg:-mx-4">
          <div className="space-x-4 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {this.props.allHomes.map((home: any, index: any) => (
              <HomeCard
                home={home}
                index={index}
                sessionToken={this.props.sessionToken}
                getHomes={this.props.getHomes}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDisplay;
