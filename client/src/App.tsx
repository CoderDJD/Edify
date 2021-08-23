import * as React from "react";
import { lazy, Suspense } from "react";
import Navigator from "./util/Navigator";
import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
const Create = lazy(() => import("./packages/create"));
const Main = lazy(() => import("./packages/main"));

function Slash() {
  return <Redirect to="/feed" />;
}

export default function App() {
  return (
    <Suspense fallback={<div className="bg-dark-400 w-screen h-screen"></div>}>
      <div className="bg-dark-400 w-screen h-screen">
        <Switch>
          {/* <Route component={Slash} path="/" /> */}
          <Route component={Create} path="/create" />
          <Route component={Main} path="/feed" />
        </Switch>
        <Navigator />
      </div>
    </Suspense>
  );
}
