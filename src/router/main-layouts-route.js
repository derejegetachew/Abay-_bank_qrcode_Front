import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout1 from "../layouts/backend/Layout1";
import BlankLayout from "../layouts/BlankLayout";
import ProtectedRoute from "../middleware/protected";

const LayoutsRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const state = useSelector((state) => state);
  console.log("Entire state:", state);
  console.log("isAuthenticated:", isAuthenticated);

  return (
    <Switch>
      <Route path="/auth" component={BlankLayout} />
      <Route
        path="/"
        render={() =>
          isAuthenticated ? (
            <ProtectedRoute
              path="/"
              component={Layout1}
              isAuthenticated={isAuthenticated}
            />
          ) : (
            <Redirect to="/auth/sign-in" />
          )
        }
      />
    </Switch>
  );
};

export default LayoutsRoute;
