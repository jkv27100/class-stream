import React from "react";
import Home from "./component/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./component/NotFound";
import PlayList from "./component/common/PlayList";
import PdfList from "./component/common/PdfList";

const Routes = (props) => {
  return (
    <Switch>
      {props.subject.map((sub) => (
        <Route
          key={sub.code}
          path={`/${sub.code}videos`}
          component={() => <PlayList code={sub.code} />}
        />
      ))}
      {props.subject.map((sub) => (
        <Route
          key={sub.code}
          path={`/${sub.code}pdf`}
          component={() => <PdfList code={sub.code} />}
        />
      ))}
      <Route path="/notfound" component={NotFound} />
      <Route
        path="/"
        exact
        component={() => <Home subject={props.subject} />}
      />
      <Redirect to="/notfound" />
    </Switch>
  );
};

export default Routes;
