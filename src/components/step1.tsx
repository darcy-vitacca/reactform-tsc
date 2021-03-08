import React from "react";
import { RouteComponentProps } from "react-router-dom";
import IPage from "../interfaces/page";

const Step1: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
  return (
    <div className="container text-center">
      <h1>Step1</h1>
    </div>
  );
}

export default Step1
