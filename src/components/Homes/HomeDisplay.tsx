import React, { Component } from "react";
import HomeCard from "./HomeCard";

type acceptedProps = {
  allHomes: any;
};

interface homeInterface {
  home: {};
}

class HomeDisplay extends Component<acceptedProps, homeInterface> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = { home: {} };
  }

  render() {
    return (
      <div className="container my-12 mx-auto px-4 md:px-12">
        <p>Home Display</p>
        {console.log(this.props)}
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {this.props.allHomes.map((home, index) => (
              <HomeCard home={home} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDisplay;
