import { useEffect, useRef } from "react";
export const useComponentDidUpdate = (func, deps) => {
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    func();
  }, deps);
};
