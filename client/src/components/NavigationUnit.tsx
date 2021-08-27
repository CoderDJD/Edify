import * as React from "react";
import { Circle } from "react-feather";
import { useHistory } from "react-router-dom";
import PropTypes, { InferProps } from "prop-types";

export default function NavigationUnit({
  routeStr,
  Icon,
  route,
}: InferProps<typeof NavigationUnit.propTypes>) {
  const history = useHistory();
  return (
    <div className="flex flex-col cursor-pointer items-center justify-center p-2">
      <button
        className="focus:outline-none focus:ring"
        onClick={() => {
          history.push(routeStr.toString());
        }}
      >
        {Icon}
      </button>
      <h3 className="text-sm">{route}</h3>
    </div>
  );
}

NavigationUnit.propTypes = {
  routeStr: PropTypes.string.isRequired,
  Icon: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
};

NavigationUnit.defaultProps = {
  routeStr: "/dash",
  Icon: Circle,
};
