import * as React from "react";
import Home from "../assets/home";
import Create from "../assets/create";
import NavigationUnit from "../components/NavigationUnit";

const tabs = [
  { route: "/feed/", icon: <Home /> },
  { route: "/create/", icon: <Create /> },
];

export default function Navigator() {
  return (
    <div className="flex fixed inset-x-0 justify-around items-center bottom-0 w-full h-10 bg-dark-500 mt z-10">
      {tabs.map((tab, index) => {
        return (
          <NavigationUnit routeStr={tab.route} Icon={tab.icon} key={index} />
        );
      })}
    </div>
  );
}
