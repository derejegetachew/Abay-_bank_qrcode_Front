import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout1 from "../layouts/backend/Layout1";
import BlankLayout from "../layouts/BlankLayout";
import ProtectedRoute from "../middleware/protected";
import { useSelector } from "react-redux";

const LayoutsRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

  return (
    <Switch>
      {/* Redirect to /auth/sign-in if not authenticated */}
      {!isAuthenticated && <Redirect exact from="/" to="/auth/sign-in" />}

      <Route path="/auth" component={BlankLayout} />
      <ProtectedRoute
        path="/"
        component={Layout1}
        isAuthenticated={isAuthenticated}
      />
    </Switch>
  );
};

export default LayoutsRoute;
