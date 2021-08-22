import * as React from "react";
import PropTypes, { InferProps } from "prop-types";

export default function InputUnit({
  cb,
  pholder,
}: InferProps<typeof InputUnit.propTypes>) {
  return (
    <input
      className="bg-dark-300 focus:outline-none focus:ring focus:ring-accent-default focus:ring-opacity-50 rounded-sm p-2 text-white mt-1 font-main"
      placeholder={pholder}
      onChange={(e) => {
        cb(e.target.value);
      }}
    ></input>
  );
}

InputUnit.propTypes = {
  pholder: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
};

InputUnit.defaultProps = {
  pholder: "Something",
  cb: console.log(),
};
