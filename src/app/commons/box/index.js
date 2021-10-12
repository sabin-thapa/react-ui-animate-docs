import React from "react";
import PropTypes from "prop-types";

export const Box = ({
  children,
  flexBox,
  flex,
  row,
  vertical,
  jCenter,
  jSpace,
  jEnd,
  alCenter,
  alStart,
  alEnd,
  p,
  pl,
  pr,
  pt,
  pb,
  m,
  ml,
  mr,
  mt,
  mb,
  cg = 0,
  rg = 0,
  className,
  style,
  ...rest
}) => {
  const padding = { pl: pl ?? p, pr: pr ?? p, pt: pt ?? p, pb: pb ?? p };
  const margin = { ml: ml ?? m, mr: mr ?? m, mt: mt ?? m, mb: mb ?? m };

  const cName = ["box"];
  if (flexBox) cName.push("flex");
  if (row) cName.push("horizontal");
  if (vertical) cName.push("vertical");
  if (jCenter) cName.push("j-center");
  if (jSpace) cName.push("j-space");
  if (jEnd) cName.push("j-end");
  if (alStart) cName.push("al-start");
  if (alCenter) cName.push("al-center");
  if (alEnd) cName.push("al-end");
  if (className) cName.push(className);

  return (
    <div
      {...rest}
      style={{
        ...style,
        padding: `${padding.pt}px ${padding.pr}px ${padding.pb}px ${padding.pl}px `,
        margin: `${margin.mt}px ${margin.mr}px ${margin.mb}px ${margin.ml}px `,
        flex: `${flex}`,
        columnGap: cg,
        rowGap: rg,
      }}
      className={cName.join(" ")}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.any,
  flexBox: PropTypes.bool,
  flex: PropTypes.number,
  vertical: PropTypes.bool,
  jCenter: PropTypes.bool,
  alCenter: PropTypes.bool,
  alStart: PropTypes.bool,
  alEnd: PropTypes.bool,
  p: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  m: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  className: PropTypes.string,
};

Box.defaultProps = {
  p: 0,
  m: 0,
};
