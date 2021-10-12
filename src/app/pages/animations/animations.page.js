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
        <Title>Interpolation</Title>

        <Paragraph>Description</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>interpolate()</SecondaryTitle>

        <Paragraph>Description</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>bInterpolate()</SecondaryTitle>

        <Paragraph>Description</Paragraph>
      </Section>

      <NextPrevButton
        left={{ text: "Animated Values", to: "/docs/animated-values" }}
        right={{ text: "Animated HOCs", to: "/docs/animated-hocs" }}
      />
    </>
  );
};
