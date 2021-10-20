import React from "react";

export const SecondaryTitle = ({
  children,
  className,
  isSubHeading,
  ...rest
}) => {
  const cName = ["title", "title--secondary"];
  if (isSubHeading) cName.push("subheading");
  if (className) cName.push(className);

  return (
    <h2 className={cName.join(" ")} {...rest}>
      {children}
    </h2>
  );
};
