import React from "react";
import PropTypes from "prop-types";
import { CopyBlock, dracula } from "react-code-blocks";

import { Pre, Line, LineNo, LineContent } from "./styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

export const Code = ({ children, language = "jsx" }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
export const CodeOld = ({ children, language = "jsx" }) => {
  return (
    <div className="demo-code">
      <CopyBlock
        language={language}
        text={children}
        theme={dracula}
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
