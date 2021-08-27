import Navigator from "./util/Navigator";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
const Main = lazy(() => import("./packages/main"));
const Create = lazy(() => import("./packages/create"));

export default function App() {
  return (
    <Suspense fallback={<div className="bg-dark-400 w-screen h-screen"></div>}>
      <div className="bg-dark-400 w-screen h-screen">
        <Switch>
          <Route component={Main} path="/" />
          <Route component={Create} path="/create" />
        </Switch>
        <Navigator />
      </div>
    </Suspense>
  );
}
