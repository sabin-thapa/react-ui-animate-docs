import React from "react";
import { useNavigation } from "react-auth-navigation";

export const Highlight = ({ children, link, external }) => {
  const { navigation } = useNavigation();
  const { navigate } = navigation;

  return (
    <div
      onClick={() => {
        if (link) {
          if (external) {
            window.open(link);
          } else {
            navigate(link);
          }
        }
      }}
      className={link ? "highlight link" : "highlight"}
    >
      {children}
    </div>
  );
};
