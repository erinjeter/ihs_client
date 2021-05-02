import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

type acceptedProps = {
  sessionToken: (newToken: string) => void;
};

type valueTypes = {
  login: boolean;
  setLogin: boolean;
  username: string;
  password: string;
  showModal: boolean;
};

class Auth extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      login: true,
      setLogin: false,
      username: "",
      password: "",
      showModal: false,
    };
  }

  authTernary = () => {
    return this.state.login ? (
      <Signup sessionToken={this.props.sessionToken} />
    ) : (
      <Login sessionToken={this.props.sessionToken} />
    );
  };

  loginToggle = (e: any) => {
    e.preventDefault();
    this.setState({ login: !this.state.login });
    this.setState({ username: "" });
    this.setState({ password: "" });
  };

  render() {
    return (
      <>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 type=button"
          onClick={(e) => this.setState({ showModal: true })}
        >
          Login/Signup
        </button>
        {this.state.showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-6xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/* header */}
                  <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Signup/Login</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={(e) => this.setState({ showModal: false })}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    </button>
                  </div>
                  {/* body */}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray500 text-lg leading-relaxed">
                      {this.authTernary()}
                      <button onClick={this.loginToggle}>
                        Already a member? Login
                      </button>
                    </p>
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-end p-6 border-t border-solid border blue-Gray-200 rounded-b">
                    <button
                      className="text-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => this.setState({ showModal: false })}
                    >
                      Close
                    </button>
                    {/* <button
                      className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      onClick={(e) => this.setState({ showModal: false })}
                    >
                      Save
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
}

export default Auth;
