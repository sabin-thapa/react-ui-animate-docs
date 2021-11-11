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
        <Title>Interpolate</Title>
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
          {`interpolate(value, [-300, -100, 0, 100, 101], [300, 0, 1, 0, 0], {
  extrapolate: "clamp"
});`}
        </Code>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
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

        <Paragraph>
          <Highlight>interpolate</Highlight> accepts an animated value as its
          first argument, array of numbers as its second argument namely input
          range and array of numbers with same length as second argument namely
          output range. It also supports multiple range segments as well, which
          is very much useful for different scenarios like dead zones and other
          handly tricks.
        </Paragraph>

        <Code>{`interpolate(value, [-300, -100, 0, 100, 101], [300, 0, 1, 0, 0]);`}</Code>

        <Paragraph>
          <Highlight>interpolate</Highlight> also supports mapping to strings,
          allowing you to animate colors as well as values with units. For
          example, if you wanted to change backgroundColor from red to black
          when value changes from 0 to 1, you could do:
        </Paragraph>

        <Code>{`interpolate(value, [0, 1], ["red", "black"]);`}</Code>

        <Paragraph>
          The default behavior of <Highlight>interpolate</Highlight> is that it
          will extrapolate the curve beyond the ranges given. You can clamp the
          value output value by passing extrapolation configuration object as
          4th argument of <Highlight>interpolate</Highlight> function. You can
          set the extrapolation by setting the{" "}
          <Highlight>extrapolate</Highlight>,{" "}
          <Highlight>extrapolateLeft</Highlight>, or
          <Highlight>extrapolateRight</Highlight> options. The default value is
          "extend" but you can use "clamp" to prevent the output value from
          exceeding outputRange.
        </Paragraph>

        <Code>{`interpolate(value, [-300, -100, 0, 100, 101], [300, 0, 1, 0, 0], {
  extrapolate: "clamp"
});`}</Code>
      </Section>
    </>
  );
});
