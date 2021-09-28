import { useEffect } from "react";

export const useDocTitle = (title) => {
  useEffect(() => {
    document.title = `Dunbel  | ${title}`;
  }, [title]);
};
