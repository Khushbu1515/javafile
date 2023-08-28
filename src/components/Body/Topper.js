import React from "react";
import { Headertext } from "./Headertext";
import { Box } from "./Box";
import "./Body.css";

export const Topper = () => {
  return (
    <div>
      <div className="Column">
        <div>
          <Headertext />
        </div>
        <br />
        <br />
        <br />
        <div className="colors">
          <Box />
        </div>
      </div>
    </div>
  );
};
