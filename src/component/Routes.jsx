import React from "react";
import Subjects from "./Subjects";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import PlayList from "./common/PlayList";
import PdfList from "./common/PdfList";
import Home from "./Home";
import Login from "../Login";
import Admin from "./Admin";

const Routes = (props) => {
  return (
    <Switch>
      {props.subject.map((sub) => (
        <Route
          exact
          key={sub.code}
          path={`/${sub.code}videos`}
          component={() => (
            <PlayList
              code={sub.code}
              subName={sub.sub}
              UrlData={props.UrlData}
              isFetched={props.isFetched}
            />
          )}
        />
      ))}
      {props.subject.map((sub) => (
        <Route
          exact
          key={sub.code}
          path={`/${sub.code}pdf`}
          component={() => <PdfList subName={sub.sub} code={sub.code} />}
        />
      ))}
      <Route
        exact
        path="/subjects"
        component={() => <Subjects subject={props.subject} />}
      />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login}></Route>
      {localStorage.getItem("isLoggedIn") ? (
        <Route exact path="/admin" component={Admin} />
      ) : (
        <Redirect to="/login" /> //admin route protected
      )}
      <Route path="/notfound" component={NotFound} />
      <Redirect to="/notfound" />
    </Switch>
  );
};

export default Routes;
