import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Code,
  Section,
  withSubHeading,
  SubTitle,
} from "../../commons";

export const BInterpolate = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>bInterpolate</Title>
        <Paragraph>
          <Highlight>bInterpolate</Highlight> maps an animated value from input
          range <Highlight>[0, 1]</Highlight> to output range.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <br />

        <SubTitle type="[number|AnimatedValue]">Value</SubTitle>

        <Paragraph>
          Value from within input range [0, 1] that should be map into value
          from output range.
        </Paragraph>

        <SubTitle type="[number|string]">outputMin</SubTitle>

        <Paragraph>Minimum output value.</Paragraph>

        <SubTitle type="[number|string]">outputMax</SubTitle>

        <Paragraph>Maximun output value.</Paragraph>

        <SubTitle type="[object]">extrapolateConfig?</SubTitle>

        <Paragraph>
          Extrapolation config same as <Highlight>interpolate</Highlight>.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="returns" isSubHeading>
          Returns
        </SecondaryTitle>

        <Paragraph>
          <Highlight>bInterpolate</Highlight> returns the value after
          interpolation from within the output range.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          A basic mapping to convert a 0-1 range to a 0-100 range would be:
        </Paragraph>

        <Code>{`bInterpolate(value, 0, 100);`}</Code>
      </Section>
    </>
  );
});
