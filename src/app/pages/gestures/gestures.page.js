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

export const Gestures = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>Gestures</Title>

        <Paragraph>Description</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Sub title</SecondaryTitle>

        <Paragraph>Description</Paragraph>
      </Section>

      <NextPrevButton
        left={{ text: "Animated Values", to: "/docs/animated-values" }}
        right={{ text: "Animated HOCs", to: "/docs/animated-hocs" }}
      />
    </>
  );
};
