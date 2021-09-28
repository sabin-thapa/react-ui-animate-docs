import { useState } from "react";

export const useInput = (fields) => {
  const [data, setData] = useState({
    ...fields,
  });
  const [error, setError] = useState({});

  const onChangeHandler = (name, value) => {
    return function (e) {
      e.persist();

      setError((prev) => {
        if (
          (value !== undefined && value !== null) ||
          (e?.target?.value !== undefined && e?.target?.value !== null)
        ) {
          return { ...prev, [name]: false };
        }
      });

      setData((prev) => {
        if (value === undefined || value === null) {
          return { ...prev, [name]: e.target.value };
        } else {
          return { ...prev, [name]: value };
        }
      });
    };
  };
  return { data, onChangeHandler, error, setError };
};
