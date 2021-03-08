import React from 'react'
import { RouteComponentProps } from 'react-router';
import IPage from "../interfaces/page";

const Step2: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
  return (
    <div className="container text-center">
      <h1>Step2</h1>
    </div>
  );
}

export default Step2

