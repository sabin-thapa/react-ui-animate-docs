import React, { useState } from "react";
import {
  AnimatedBlock,
  useAnimatedValue,
  interpolate,
  useMeasure,
} from "react-ui-animate";
import { FaSearch } from "react-icons/all";

export const AnimatedSearch = () => {
  const animation = useAnimatedValue(0);
  const [height, setHeight] = useState(0);
  const bind = useMeasure(({ height }) => {
    setHeight(height);
  }, []);

  return (
    <div>
      <AnimatedBlock
        style={{
          ...styles.container,
          transform: interpolate(
            animation.value,
            [0, 0.2, 1],
            ["scale(1)", "scale(0.9)", "scale(1)"]
          ),
          marginTop: interpolate(animation.value, [0, 1], [200, 100]),
          padding: interpolate(animation.value, [0, 1], [0, 10]),
          height: interpolate(animation.value, [0, 1], [height, 200]),
          backgroundColor: interpolate(
            animation.value,
            [0, 1],
            ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]
          ),
          boxShadow: interpolate(
            animation.value,
            [0, 1],
            ["0px 2px 4px rgba(0,0,0,0)", "0px 2px 4px rgba(0,0,0,0.14)"]
          ),

          border: interpolate(
            animation.value,
            [0, 1],
            ["1px solid rgba(222,222,222,0)", "1px solid rgba(222,222,222,1)"]
          ),
        }}
      >
        <div {...bind()} style={styles.searchContainer}>
          <span style={styles.searchIcon}>
            <FaSearch />
          </span>
          <input
            style={styles.searchBar}
            type="text"
            placeholder="Quick Access"
            onFocus={() => (animation.value = 1)}
          />
          <AnimatedBlock
            style={{
              ...styles.cancel,
              width: interpolate(animation.value, [0, 1], [0, 95]),
              opacity: animation.value,
            }}
            onClick={() => (animation.value = 0)}
          >
            Cancel
          </AnimatedBlock>
        </div>
      </AnimatedBlock>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFF",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.14)",
    borderRadius: 10,
    border: "1px solid #E1E1E1",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    margin: "0px auto",
  },
  searchIcon: {
    position: "absolute",
    fontSize: 20,
    left: 10,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#A1A1A1",
  },
  searchBar: {
    flex: 1,
    padding: 10,
    paddingLeft: 40,
    fontSize: 20,
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    outline: "none",
    border: "1px solid #E1E1E1",
    color: "#353535",
    display: "block",
    width: "100%",
  },
  cancel: {
    width: 100,
    fontFamily: "Arial",
    fontSize: 20,
    color: "#353535",
    textAlign: "center",
    cursor: "pointer",
    overflow: "hidden",
  },
};
