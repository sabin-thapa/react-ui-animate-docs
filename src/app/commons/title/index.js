import React from "react";

export const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};

export const SubTitle = ({ children, type }) => {
  return (
    <>
      <code className="subtitle">{children}</code>
      {type && <span className="subtitle-type">{type}</span>}
    </>
  );
};
