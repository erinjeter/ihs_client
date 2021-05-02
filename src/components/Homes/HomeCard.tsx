import React, { Component } from "react";

type valueTypes = {
  homestreet1: string;
  homestreet2: string;
  homecity: string;
  homestate: string;
  homezip: string;
  homeType: string;
  photo: string;
  yearBuilt: string;
  description: string;
};

type acceptedProps = {
  home: any;
};

class HomeCard extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    console.log(this.props.home);
    console.log(this.props.home.homeType);
  }

  render() {
    return (
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://picsum.photos/600/400/?random"
          alt="Placeholder"
          className="block h-auto w-full"
        />
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg"></h1>
          <p className="text-grey-darker text-sm"></p>
          <p className="text-grey-darker text-sm">{this.props.home.homeType}</p>
        </header>
      </div>
    );
  }
}

export default HomeCard;
