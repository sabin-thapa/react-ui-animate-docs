import { useEffect, useRef } from "react";

export const useBreakPoints = (breakpoints, callback) => {
  const bps = Object.keys(breakpoints).map((v) => Number(v));

  const callbackRef = useRef();

  if (callbackRef.current === undefined) {
    callbackRef.current = callback;
  }

  useEffect(() => {
    if (bps.length < 2) {
      console.error(new Error("Use atleast two breakpoints"));
      return;
    }

    const getRange = (val) => {
      let narrow = [bps[0], bps[1]];

      for (let i = 1; i < bps.length; i++) {
        if (val <= bps[i]) {
          narrow = [bps[i - 1], bps[i]];
          break;
        }
      }

      return narrow;
    };

    const getCurrentBreakPoint = (width) => {
      const narrowed = getRange(width);
      const output = width <= narrowed[0] ? narrowed[0] : narrowed[1];

      callbackRef.current && callbackRef.current(breakpoints[String(output)]);
    };

    getCurrentBreakPoint(window.innerWidth);

    const resizeListener = () => {
      getCurrentBreakPoint(window.innerWidth);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [breakpoints, bps]);
};
