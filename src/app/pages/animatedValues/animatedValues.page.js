import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Code,
  Section,
  NextPrevButton,
} from "../../commons";

export const AnimatedValues = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>Animated Values</Title>

        <Paragraph>
          Animated Values are the fundamental concepts behind{" "}
          <Highlight>react-ui-animate</Highlight>. They carry animated data,
          providing easy way to drive animations. There are mainly two kinds of
          animated values in React UI Animate. One is{" "}
          <Highlight>useAnimatedValue()</Highlight> and other one is{" "}
          <Highlight>useMountedValue()</Highlight>.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>useAnimatedValue()</SecondaryTitle>

        <Paragraph>Description</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>useMountedValue()</SecondaryTitle>

        <Paragraph>Description</Paragraph>
      </Section>

      <NextPrevButton
        left={{ text: "Getting Started", to: "/docs/getting-started" }}
        right={{ text: "Interpolation", to: "/docs/interpolation" }}
      />
    </>
  );
};
