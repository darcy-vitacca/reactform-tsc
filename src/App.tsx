import React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { useForm } from "react-hook-form";

import Routes from "./util/routes";
import NavBar from "./components/navbar";

interface Profile {
  firstName: string;
  lastName: string;
  age: number;
}
const App: React.FunctionComponent<{}> = () => {
  console.log(Routes);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          {/* maps over our routes util specified */}

          {Routes.map((route, index) => {
            console.log(route);
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                //render allows to pass custom components
                render={(props: RouteComponentProps<any>) => (
                  //don't understand this route.component
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
