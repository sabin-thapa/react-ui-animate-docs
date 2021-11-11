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

export const Interpolate = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>interpolate</Title>
        <Paragraph>
          An interpolation maps input ranges to output ranges, typically using a
          linear interpolation but also supports easing functions. By default,
          it will extrapolate the curve beyond the ranges given, but you can
          also have it clamp the output value.{" "}
          <Highlight>interpolate</Highlight> function allows the Animated Value
          to map from input ranges to output ranges.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <br />

        <SubTitle type="[number|AnimatedValue]">Value</SubTitle>

        <Paragraph>
          Value from within input range that should be map into value from
          output range.
        </Paragraph>

        <SubTitle type="[number[]]">inputRange</SubTitle>

        <Paragraph>
          An array of <Highlight>numbers</Highlight> that contains points that
          indicate the range of the input value. Values in the input range
          should be increasing.
        </Paragraph>

        <SubTitle type="[number[]]">outputRange</SubTitle>

        <Paragraph>
          An array of <Highlight>numbers</Highlight> that contains points that
          indicate the range of the output value. It should have at least the
          same number of points as the input range.
        </Paragraph>

        <SubTitle type="[object]">extrapolateConfig?</SubTitle>

        <Paragraph>
          You can set the extrapolation by setting the{" "}
          <Highlight>extrapolate</Highlight>,
          <Highlight>extrapolateLeft</Highlight>, or{" "}
          <Highlight>extrapolateRight</Highlight> options. The default value is
          "extend" but you can use "clamp" to prevent the output value from
          exceeding outputRange. Example:
        </Paragraph>

        <Code>
          {`interpolate(value, [0, 100], [100, 500], {
  extrapolate: "clamp"
});`}
        </Code>
      </Section>

      <Section>
        <SecondaryTitle id="returns" isSubHeading>
          Returns
        </SecondaryTitle>

        <Paragraph>
          <Highlight>interpolate</Highlight> returns the value after
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

        <Code>{`interpolate(value, [0, 1], [0, 100]);`}</Code>
      </Section>
    </>
  );
});
