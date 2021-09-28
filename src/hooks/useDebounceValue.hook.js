import React from "react";

export const useDebounceValue = (value) => {
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    const handler = setTimeout(function () {
      setSearchValue(value);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return searchValue;
};
