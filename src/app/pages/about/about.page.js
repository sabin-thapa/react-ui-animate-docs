import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Section,
  Box,
  NextPrevButton,
} from "../../commons";

import { AnimatedSearch, BalloonSlider, HamburderMenu } from "../../examples";

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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: "20px",
            columnGap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f1f1f1",
              height: 500,
              borderRadius: 10,
            }}
          >
            <div
              style={{
                color: "#a1a1a1",
                margin: 20,
                position: "absolute",
              }}
            >
              Animated Search Bar
            </div>
            <AnimatedSearch />
          </div>

          <div
            style={{
              backgroundColor: "#f1f1f1",
              height: 500,
              borderRadius: 10,
            }}
          >
            <div
              style={{
                color: "#a1a1a1",
                margin: 20,
                position: "absolute",
              }}
            >
              Custom Animated Balloon Slider
            </div>
            <BalloonSlider />
          </div>

          <div
            style={{
              backgroundColor: "#f1f1f1",
              height: 500,
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "#a1a1a1",
                position: "absolute",
                left: 20,
                top: 20,
              }}
            >
              Hamburger Menu
            </div>
            <HamburderMenu />
          </div>
        </div>

        <NextPrevButton
          right={{ text: "Getting Started", to: "/docs/getting-started" }}
        />
      </Section>
    </>
  );
};
