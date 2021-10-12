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

export const Animations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>Animations</Title>

        <Paragraph>Description</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Animated Value Animated Transition</SecondaryTitle>

        <Paragraph>useAnimatedValue</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Configuring Animations</SecondaryTitle>

        <Paragraph>Spring, Timing, Bezier curve, etc</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Interpolations</SecondaryTitle>

        <Paragraph>interpolate</Paragraph>
      </Section>

      <NextPrevButton
        left={{ text: "Animated Values", to: "/docs/animated-values" }}
        right={{ text: "Gestures", to: "/docs/gestures" }}
      />
    </>
  );
};
