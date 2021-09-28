import { useEffect } from "react";

export const useDisableScroll = (bool) => {
  useEffect(() => {
    document.body.style.overflow = bool ? "hidden" : "auto";
  }, [bool]);
};
