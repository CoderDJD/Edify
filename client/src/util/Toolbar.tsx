import * as React from "react";
import Logo from "../assets/logo";
export default function Toolbar() {
  return (
    <div
      className="flex w-full p-3 h-8 justify-between items-center"
      style={{ marginTop: 10 }}
    >
      <article className="flex items-center justify-center space-x-2">
        <Logo width="32" />
        <h2>Edify</h2>
      </article>
    </div>
  );
}
