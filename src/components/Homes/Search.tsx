import React, { Component } from "react";

type acceptedProps = {
  sessionToken: any;
};



class Search extends Component<acceptedProps, valueTypes> {
  constructor(props: any) {
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
    };
  }

  

  render() {
    return ();
  }
}

export default Search;
