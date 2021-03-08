import React from "react";
import { RouteComponentProps } from "react-router";

import IPage from "../interfaces/page";

const Step3: React.FunctionComponent<IPage & RouteComponentProps<any>> = (props) => {
  return (
    <div className="container text-center">
      <h1>Step3</h1>
    </div>
  );
};

export default Step3;
