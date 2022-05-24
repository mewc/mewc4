import React from "react";
import Home from "./view/containers/Home";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

//https://reacttraining.com/react-router/web/example/custom-link
function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={Home} path="/">
          <Home />
          <Redirect from="*" to="/" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default Router;
