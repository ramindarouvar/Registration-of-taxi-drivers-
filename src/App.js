import React from "react";
import AdminPanel from "./components/adminPanel/AdminPanel";
import MainLayout from "./components/layouts/MainLayout";
import { Fragment } from "react/cjs/react.production.min";
import { Route } from "react-router-dom";
import { Switch, withRouter } from "react-router";
import FirstPage from "./components/common/FirstPage";

const App = () => {
  return (
    <Fragment>
      <MainLayout>
        <Switch>
          <Route
            path="/"
            render={() => {
              return <FirstPage />;
            }}
            exact
          />
          <Route path="/admin-panel" component={AdminPanel} exact />
        </Switch>
      </MainLayout>
    </Fragment>
  );
};

export default withRouter(App);
