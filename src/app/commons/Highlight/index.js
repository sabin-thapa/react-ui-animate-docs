import React from "react";
import { useNavigation } from "react-auth-navigation";

export const Highlight = ({ children, link }) => {
  const { navigation } = useNavigation();
  const { navigate } = navigation;

  return (
    <div
      onClick={() => {
        link && navigate(link);
      }}
      className={link ? "highlight link" : "highlight"}
    >
      {children}
    </div>
  );
};
