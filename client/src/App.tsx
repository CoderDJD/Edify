import * as React from "react";
import { lazy, Suspense } from "react";
import Navigator from "./util/Navigator";
import { Route } from "react-router-dom";
const Create = lazy(() => import("./packages/create"));
const Main = lazy(() => import("./packages/main"));

export default function App() {
  return (
    <Suspense fallback={<div className="bg-dark-400 w-screen h-screen"></div>}>
      <div className="bg-dark-400 w-screen h-screen">
        <Route component={Create} path="/create" />
        <Route component={Main} path="/feed" />
        <Navigator />
      </div>
    </Suspense>
  );
}
