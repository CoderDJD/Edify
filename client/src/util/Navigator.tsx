import * as React from "react";
import Home from "../assets/home";
import Create from "../assets/create";
import NavigationUnit from "../components/NavigationUnit";

const tabs = [
  { route: "/", icon: <Home />, name: "Home" },
  { route: "/create", icon: <Create />, name: "Request" },
];

export default function Navigator() {
  return (
    <div className="flex fixed inset-x-0 justify-around items-center bottom-0 w-full h-15 bg-dark-500 mt z-10">
      {tabs.map((tab, index) => {
        return (
          <NavigationUnit
            routeStr={tab.route}
            Icon={tab.icon}
            route={tab.name}
            key={index}
          />
        );
      })}
    </div>
  );
}
