import React from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const Main = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2 ">
          <Logo />
        </div>
        <div className="col-sm-9 col-md-9 col-lg-10 ">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
