import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Code,
  Section,
  Box,
  NextPrevButton,
} from "../../commons";
import { AnimatedSearch, HamburderMenu, BalloonSlider } from "../../examples";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>About React UI Animate</Title>

        <Paragraph>
          React UI Animate is a react library that allows for creating smooth
          animations and gesture interactions.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Motivation &amp; Library overview</SecondaryTitle>

        <Paragraph></Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Problems and Limitations</SecondaryTitle>

        <Paragraph></Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Examples</SecondaryTitle>

        <Paragraph>
          Here are some examples created using{" "}
          <Highlight
            external
            link="https://www.npmjs.com/package/react-ui-animate"
          >
            react-ui-animate
          </Highlight>
          .
        </Paragraph>

        <b>1. Animated Search Bar</b>

        <Box flexBox>
          <Box flex={1}>
            <Code>
              {`
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
    <AnimatedBlock
      style={{
        ...styles.container,
        transform: interpolate(
          animation.value,
          [0, 0.2, 1],
          ["scale(1)", "scale(0.9)", "scale(1)"]
        ),
        marginTop: interpolate(animation.value, [0, 1], [0, -100]),
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
            width: interpolate(animation.value, [0, 1], [0, 100]),
            opacity: animation.value,
          }}
          onClick={() => (animation.value = 0)}
        >
          Cancel
        </AnimatedBlock>
      </div>
    </AnimatedBlock>
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
    backgroundColor: "#ECEDF0",
    borderRadius: 10,
    outline: "none",
    border: "1px solid #E1E1E1",
    color: "#353535",
    display: "block",
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
`}
            </Code>
          </Box>

          <Box
            flex={1}
            flexBox
            alCenter
            jCenter
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <AnimatedSearch />
          </Box>
        </Box>

        <Box mt={20} />
        <b>2. Hamburger Menu</b>

        <Box flexBox>
          <Box flex={1}>
            <Code>
              {`
import React from "react";
import { AnimatedBlock, useAnimatedValue, interpolate } from "react-ui-animate";

const styles = {
  container: {
    cursor: "pointer",
  },
  menuitem: {
    width: 40,
    height: 4,
    background: "#353535",
    marginBottom: 6,
    transformOrigin: "center",
  },
};

export function HamburderMenu() {
  const animation = useAnimatedValue(0);
  return (
    <div
      style={styles.container}
      onMouseOver={() => (animation.value = 1)}
      onMouseOut={() => (animation.value = 0)}
    >
      <AnimatedBlock
        style={{
          ...styles.menuitem,
          transform: interpolate(
            animation.value,
            [0, 1],
            [
              "rotate(0deg) translate(0px, 0px)",
              "rotate(45deg) translate(4px, 0px)",
            ]
          ),
        }}
      />
      <AnimatedBlock
        style={{
          ...styles.menuitem,
          opacity: interpolate(animation.value, [0, 1], [1, 0]),
        }}
      />
      <AnimatedBlock
        style={{
          ...styles.menuitem,
          transform: interpolate(
            animation.value,
            [0, 1],
            [
              "rotate(0deg) translate(0px, 0px)",
              "rotate(-45deg) translate(12px, -13px)",
            ]
          ),
        }}
      />
    </div>
  );
}
`}
            </Code>
          </Box>

          <Box
            flex={1}
            flexBox
            alCenter
            jCenter
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <HamburderMenu />
          </Box>
        </Box>

        <Box mt={20} />
        <b>3. Custom Balloon Slider Animation</b>

        <Box flexBox>
          <Box flex={1}>
            <Code>
              {`
import { useRef } from "react";
import {
  AnimatedBlock,
  useAnimatedValue,
  interpolate,
  useDrag,
  clamp,
} from "react-ui-animate";

export function BalloonSlider() {
  const offsetLeft = useRef(0);
  const left = useAnimatedValue(0, { immediate: true });
  const isDown = useAnimatedValue(0);
  const balloonLeft = useAnimatedValue(left.value);
  const velocity = useAnimatedValue(0);

  const bind = useDrag(({ movementX, down, velocityX }) => {
    isDown.value = down ? 1 : 0;
    velocity.value = velocityX;
    const ballX = clamp(movementX + offsetLeft.current, 0, 290);
    if (down) {
      left.value = ballX;
    } else {
      offsetLeft.current = ballX;
    }
  });

  return (
    <div style={{ width: 300, position: "relative" }}>
      <AnimatedBlock
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "5px solid #b55ae6",
          position: "absolute",
          left: balloonLeft.value,
          translateX: -20,
          top: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          translateY: interpolate(isDown.value, [0, 1], [80, 0]),
          scale: isDown.value,
          opacity: isDown.value,
          rotate: interpolate(velocity.value, [-2, 2], [30, -30]),
        }}
      >
        {left.value}
      </AnimatedBlock>

      <div style={{ position: "relative", height: 20, marginTop: 100 }}>
        <AnimatedBlock
          {...bind()}
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "5px solid #3399ff",
            backgroundColor: "#fff",
            cursor: "grab",
            position: "absolute",
            top: 0,
            left: left.value,
            zIndex: 2,
            scale: interpolate(isDown.value, [0, 1], [1, 1.3]),
          }}
        />

        <div
          style={{
            width: 300,
            height: 4,
            backgroundColor: "#e1e1e1",
            position: "absolute",
            bottom: 8,
            left: 0,
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
}
`}
            </Code>
          </Box>

          <Box
            flex={1}
            flexBox
            alCenter
            jCenter
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <BalloonSlider />
          </Box>
        </Box>

        <NextPrevButton
          right={{ text: "Getting Started", to: "/docs/getting-started" }}
        />
      </Section>
    </>
  );
};
