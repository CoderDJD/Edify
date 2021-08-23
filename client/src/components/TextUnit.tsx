import * as React from "react";
import { Circle } from "react-feather";
import PropTypes, { InferProps } from "prop-types";

export default function TextUnit({
  icon,
  text,
  color,
}: InferProps<typeof TextUnit.propTypes>) {
  return (
    <article className={`flex gap-2 items-center text-${color}`}>
      {icon}
      <h4 className={`text-base text-${color} overflow-scroll`}>{text}</h4>
    </article>
  );
}

TextUnit.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

TextUnit.defaultProps = {
  icon: <Circle />,
  text: "Text Unit",
  color: "accent-default",
};
