import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Code,
  Section,
} from "../../commons";

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
        <SecondaryTitle>Examples and Demos</SecondaryTitle>
        <Paragraph></Paragraph>
      </Section>
    </>
  );
};
