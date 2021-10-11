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
          providing easy way to drive animations.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>
          Animated transitions with Animated Value
        </SecondaryTitle>

        <Paragraph>
          <Highlight>useAnimatedValue</Highlight> is a hook that returns an
          object containing properties like: <Highlight>value</Highlight>,{" "}
          <Highlight>currentValue</Highlight>, etc.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Mounting and Unmounting Components</SecondaryTitle>

        <Paragraph>Description</Paragraph>
      </Section>

      <NextPrevButton
        left={{ text: "Getting Started", to: "/docs/getting-started" }}
        right={{ text: "Interpolation", to: "/docs/interpolation" }}
      />
    </>
  );
};
