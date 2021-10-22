import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Code,
  Section,
  NextPrevButton,
  withSubHeading,
  SubTitle,
} from "../../commons";

export const UseAnimatedValue = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>useAnimatedValue</Title>

        <Paragraph>
          <Highlight>useAnimatedValue</Highlight> is a hook that returns an
          object containing properties like: <Highlight>.value</Highlight>,{" "}
          <Highlight>.currentValue</Highlight>, etc. Animated Value objects
          serve as references to pieces of shared animation data that can be
          accessed and modified using their <Highlight>.value</Highlight>{" "}
          property. It is important to remember that
          <Highlight>.value</Highlight> property must be used to modify or to
          read data. <Highlight>useAnimatedValue</Highlight> is similar to{" "}
          <Highlight>useRef</Highlight>, it also stores the data until the
          component is unmounted, does not lose data on other state changes and
          data modification is done without re-render.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <SubTitle type="[number|boolean|string|AnimatedValue]">
          initialValue
        </SubTitle>

        <Paragraph>Description</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="returns" isSubHeading>
          Returns
        </SecondaryTitle>

        <Paragraph>Description</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>Description</Paragraph>

        <Code>
          {`import { AnimatedBlock, useAnimatedValue } from "react-ui-animate";

export default function () {
  const opacity = useAnimatedValue(0); // It initializes opacity object with value 0.

  return (
    <div>
      {/* AnimatedBlock component can read useAnimatedValue() */}
      <AnimatedBlock
        style={{
          opacity: opacity.value, // using opacity with value property
          width: 100,
          padding: 20,
          background: "#39F",
        }}
      >
        ANIMATED
      </AnimatedBlock>

      {/* Assigning value to 1 auto animates from initialized value 0 to 1 smoothly */}
      <button onClick={() => (opacity.value = 1)}>Animate Me</button>
    </div>
  );
}`}
        </Code>

        <NextPrevButton
          left={{ text: "Gestures", to: "/docs/gestures" }}
          right={{ text: "useMountedValue", to: "/docs/use-mounted-value" }}
        />
      </Section>
    </>
  );
});
