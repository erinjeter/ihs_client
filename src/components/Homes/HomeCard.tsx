import React, { Component } from "react";
import EditModal from "./EditModal";

type valueTypes = {
  homestreet1: string;
  homestreet2: string;
  homecity: string;
  homestate: string;
  homezip: string;
  homeType: string;
  photo: any;
  yearBuilt: string;
  description: string;
  showModal: boolean;
};

type acceptedProps = {
  getHomes: () => void;
  home: any;
  index: any;
  sessionToken: any;
};

class HomeCard extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      homestreet1: "",
      homestreet2: "",
      homecity: "",
      homestate: "",
      homezip: "",
      homeType: "",
      photo: "",
      yearBuilt: "",
      description: "",
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
          <img src={this.props.home.photo} className="block h-auto w-full" />
          <header className="flex-col items-center justify-between space-y-2 leading-tight p-2 md:p-4">
            <h1 className="text-lg">{this.props.home.homestreet1}</h1>
            <p className="text-grey-darker text-sm">
              {this.props.home.homeType}
            </p>
            <p className="text-grey-darker text-sm">
              Built {this.props.home.yearBuilt}
            </p>
            <p className="text-grey-darker text-sm">
              {this.props.home.description}
            </p>
          </header>
          <button
            className="object-left-bottom bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 type=button"
            onClick={(e) => {
              this.updateOn();
            }}
          >
            Edit Home
          </button>
          {this.state.showModal ? (
            <EditModal
              home={this.props.home}
              index={this.props.index}
              sessionToken={this.props.sessionToken}
              getHomes={this.props.getHomes}
              showModal={this.updateOff}
            />
          ) : null}
        </>
      </div>
    );
  }
}

export default HomeCard;
