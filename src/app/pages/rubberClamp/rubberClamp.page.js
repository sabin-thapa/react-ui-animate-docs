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

export const RubberClamp = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>rubberClamp</Title>
        <Paragraph>
          <Highlight>rubberClamp</Highlight> calculates the rubberbanding effect
          from a given position value, two bounds min, max and an elasticity
          constant.
        </Paragraph>

        <Code>{`function rubberClamp(value: number, lowerbound: number, upperbound: number, constant: number = 0.15)`}</Code>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          The returned value is clamped between lowerbound 10 and upperbound 100
          and rubberbanding effect is calculated below 10 and above 100.
        </Paragraph>

        <Code>{`const x = rubberClamp(value, 10, 100);`}</Code>
      </Section>
    </>
  );
});
