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
} from "../../commons";

export const AnimatedValues = withSubHeading(() => {
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
        <SecondaryTitle id="defining-aimated-value" isSubHeading>
          Defining Animated Value
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

        <Code>{`const animationNode = useAnimatedValue(initialValue);`}</Code>

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
}`}
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
}`}
        </Code>

        <Paragraph>
          In the above example when we click button, opacity is animated from 0
          to 1 smoothly. As you can notice <Highlight>AnimatedBlock</Highlight>{" "}
          is used instead of any other HTML Element because the Animated Values
          cannot be read by HTML Elements, we need special type of Component
          that can read it. Here, we have <Highlight>AnimatedBlock</Highlight>{" "}
          HOC which is a <Highlight>div</Highlight> element and also can read
          Animated Values.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="mounting-and-unmounting" isSubHeading>
          Mounting and Unmounting Components
        </SecondaryTitle>
        <Paragraph>
          Second most important aspect of Animated Value is that they provide a
          way to handle mounting and unmounting of any component. Generally, we
          use state to handle mounting and unmounting, but we don't have a
          proper way to make transitions between mounting as well as unmounting.
          React UI Animate provides <Highlight>useMountedValue</Highlight> hook
          to handle these scenarios.
        </Paragraph>
        <Paragraph>
          To create Mounted Value, we use <Highlight>useMountedValue</Highlight>{" "}
          hook:
        </Paragraph>
        <Code>
          {`const mountedFunction = useMountedValue(boolean, [from, enter, exit]);`}
        </Code>
        <Paragraph>
          <Highlight>useMountedValue</Highlight> returns a function when a state
          and phases are passed as first and second arguments. The first
          argument must be a <Highlight>boolean</Highlight> state and second
          argument is an array with three phases{" "}
          <Highlight>from, enter and exit</Highlight>. The phases{" "}
          <Highlight>from, enter and exit</Highlight> are three numeric values
          which defines the transition lifecycle of a component when it mounts
          and unmounts.
        </Paragraph>
        <Code>
          {`import { useState } from "react";
import { useMountedValue } from "react-ui-animate";

function SomeComponent() {
  const [visible, setVisible] = useState(false);

  const open = useMountedValue(visible, [0, 1, 0]);

  return (
    <div>
      <button 
        onClick={() => setVisible((prev) => !prev)}
      >
        CLICK ME
      </button>
    </div>
  );
}`}
        </Code>
        <Paragraph>
          In the above example, by default the state is{" "}
          <Highlight>visible = false</Highlight> and the phases are{" "}
          <Highlight>phases = [ 0, 1, 0 ]</Highlight>. Now, lets use the mounted
          function <Highlight>open</Highlight> with a component.
        </Paragraph>
        <Code>
          {`import { useState } from "react";
import { useMountedValue } from "react-ui-animate";

function SomeComponent() {
  const [visible, setVisible] = useState(false);

  const open = useMountedValue(visible, [0, 1, 0]);

  return (
    <div>
      {open(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#3399ff",
                opacity: animation.value
              }}
            />
          )
      )}

      <button 
        onClick={() => setVisible((prev) => !prev)}
      >
        CLICK ME
      </button>
    </div>
  );
}`}
        </Code>
        <Paragraph>
          In the above example, <Highlight>open</Highlight> function receives a
          callback that receives two arguments: the Animated Value and a boolean
          respectively. The first argument, Animated Value animates from
          phases[0] = 0 to phases[1] = 1 when the visible is true and phases[1]
          = 1 to phases[2] = 0 when visible is false. And the second argument,
          boolean dinamically determines whether the component is mounted or not
          after animation. <Highlight>AnimatedBlock</Highlight> HOC is used to
          read animated values.
        </Paragraph>
      </Section>

      <NextPrevButton
        left={{ text: "Getting Started", to: "/docs/getting-started" }}
        right={{ text: "Animations", to: "/docs/animations" }}
      />
    </>
  );
});
