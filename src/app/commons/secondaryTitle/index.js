import React from "react";

export const SecondaryTitle = ({ children, className, ...rest }) => {
  return (
    <h2 className={`title title--secondary ${className}`} {...rest}>
      {children}
    </h2>
  );
};
