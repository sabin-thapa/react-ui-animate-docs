import React from "react";
import PropTypes from "prop-types";

import { CopyBlock, tomorrow } from "react-code-blocks";

export const Code = ({ children, language = "jsx" }) => {
  return (
    <div className="demo-code">
      <CopyBlock
        language={language}
        text={children}
        theme={tomorrow}
        showLineNumbers={true}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

Code.propTypes = {
  children: PropTypes.string.isRequired,
};
