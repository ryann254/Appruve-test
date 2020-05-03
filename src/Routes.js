import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PricingPage from "./components/PricingPage";
import SuccessPage from "./components/SuccessPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PricingPage} />
        <Route path="/success" exact component={SuccessPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
