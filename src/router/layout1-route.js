import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Dashbord from "../views/backend/Main/Dashbord";
import Product from "../views/backend/Main/Product";
import Productadd from "../views/backend/Main/Productadd";

const Layout1Route = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          {/* Main routes */}
          <Route path="/" exact component={Dashbord} />
          <Route path="/product" component={Product} />
          <Route path="/product-add" component={Productadd} />

          {/* Redirect to dashboard if the route is not found */}
          <Redirect to="/" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Layout1Route;
