import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Code,
  Section,
  withSubHeading,
} from "../../commons";

export const Clamp = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>clamp</Title>
        <Paragraph>
          <Highlight>clamp</Highlight> function clamps a numeric value between
          an upper and lower bound.
        </Paragraph>

        <Code>{`function clamp(value: number, lowerbound: number, upperbound: number)`}</Code>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          The returned value is clamped between lowerbound 10 and upperbound
          100.
        </Paragraph>

        <Code>{`const x = clamp(value, 10, 100);`}</Code>
      </Section>
    </>
  );
});
