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

export const AnimatedValues = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>Animated Values</Title>

        <Paragraph>
          Animated Values are the fundamental concepts behind{" "}
          <Highlight>react-ui-animate</Highlight>. They carry animated data,
          providing easy way to drive animations.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>
          Animated transitions with Animated Value
        </SecondaryTitle>

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

        <Paragraph>
          In order to create an Animated Value, you should use{" "}
          <Highlight>useAnimatedValue</Highlight> hook:
        </Paragraph>

        <Code>
          {`const animationNode = useAnimatedValue(initialValue);
`}
        </Code>

        <Paragraph>
          It returns a mutable object whose <Highlight>.value</Highlight>{" "}
          property is initialized to the passed argument{" "}
          <Highlight>initialValue</Highlight>. This can be any primitive like
          number, boolean, string or Animation Values it self.
        </Paragraph>

        <Paragraph>
          In order to update Animated Value, you should set a new value of same
          primitive type onto the <Highlight>.value</Highlight> property. The
          modification is sponteneous which shows the instant reactiveness.
        </Paragraph>

        <Code>
          {`import { useAnimatedValue } from "react-ui-animate";

function SomeComponent() {
  const animationNode = useAnimatedValue(0);

  return (
    <button 
      onClick={() => (animationNode.value = Math.random())}
    >
      Randomize
    </button>
  )
}
`}
        </Code>

        <Paragraph>
          In the above example we update value from intial value 0 to random
          values. Updates are automatically animated smoothly. Lets see an
          example:
        </Paragraph>

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
}
`}
        </Code>

        <Paragraph>
          In the above example when we click button, opacity is animated from 0
          to 1 smoothly.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Mounting and Unmounting Components</SecondaryTitle>

        <Paragraph>
          Second most important aspect of Animated Value is that they provide a
          way to handle mounting and unmounting of any component. Generally, we
          use state to handle mounting and unmounting, but we don't have a
          proper way to make transitions between mounting as well as unmounting.
          React UI Animate provides <Highlight>useMountedValue</Highlight> hook
          to handle these scenarios.
        </Paragraph>

        <Paragraph>
          <Highlight>useMountedValue</Highlight> returns a function when a state
          and phases are passed as first and second arguments. The first
          argument must be a boolean state and second argument is an array of
          numbers with three phases <Highlight>from, enter and exit</Highlight>.
          To create Mounted Value, we use <Highlight>useMountedValue</Highlight>{" "}
          hook:
        </Paragraph>

        <Code>
          {`const mountedFunction = useMountedValue(boolean, [from, enter, exit]);
`}
        </Code>
      </Section>

      <NextPrevButton
        left={{ text: "Getting Started", to: "/docs/getting-started" }}
        right={{ text: "Interpolation", to: "/docs/interpolation" }}
      />
    </>
  );
};
