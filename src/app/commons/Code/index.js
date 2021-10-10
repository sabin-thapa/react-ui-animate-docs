import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";

export const Code = ({ children }) => {
  useLayoutEffect(() => Prism.highlightAll(), []);
  return (
    <pre
      className="line-numbers"
      style={{
        borderRadius: 4,
        maxHeight: 500,
      }}
    >
      <code className="language-js">{children.trim()}</code>
    </pre>
  );
};

Code.propTypes = {
  children: PropTypes.string.isRequired,
};
