import React from "react";
import { RouteComponentProps } from "react-router";
import IPage from "../interfaces/page";

const Result: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
  return (
    <div className="container text-center">
      <h1>Result</h1>
    </div>
  );
}

export default Result
