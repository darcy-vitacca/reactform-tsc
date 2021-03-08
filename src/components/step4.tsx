import React from "react";
import { RouteComponentProps } from "react-router";

import IPage from "../interfaces/page";

const Step4: React.FunctionComponent<IPage & RouteComponentProps<any>> = (props) => {
  return (
    <div className="container text-center">
      <h1>Step4</h1>
    </div>
  );
};

export default Step4;
