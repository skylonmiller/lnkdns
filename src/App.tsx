import React, { useEffect, lazy } from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { ResetCSS } from "@pancakeswap-libs/uikit";
import BigNumber from "bignumber.js";
import GlobalStyle from "./style/Global";

import history from "./routerHistory";

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

const App: React.FC = () => {
  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />

      <div>temp...</div>
    </Router>
  );
};

export default React.memo(App);
