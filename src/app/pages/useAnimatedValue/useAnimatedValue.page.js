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
          object containing properties like: <Highlight>.value</Highlight> and{" "}
          <Highlight>.currentValue</Highlight>. Animated Value objects serve as
          references to pieces of shared animation data that can be accessed and
          modified using their <Highlight>.value</Highlight> property. It is
          important to remember that
          <Highlight>.value</Highlight> property must be used to modify or to
          read data. <Highlight>useAnimatedValue</Highlight> is similar to{" "}
          <Highlight>useRef</Highlight>, it also stores the data until the
          component is unmounted, does not lose data on other state changes and
          data modification is done without re-render.
        </Paragraph>

        <Paragraph>
          It returns a mutable object whose <Highlight>.value</Highlight>{" "}
          property is initialized to the passed argument{" "}
          <Highlight>initialValue</Highlight>. This can be any primitive like
          number, boolean, string or Animation Values it self.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <br />

        <SubTitle type="[number|boolean|string|AnimatedValue]">
          initialValue
        </SubTitle>

        <Paragraph>
          The first argument takes the initial value, which could be any of
          these primitivs: number, boolean, string or AnimatedValue. The value
          then can be read and updated from the Animated Value reference using{" "}
          <Highlight>.value</Highlight> attribute.
        </Paragraph>

        <SubTitle type="[object]">config?</SubTitle>

        <Paragraph>
          Object containing the animation configuration. Allowed parameters are
          listed below:
        </Paragraph>

        <table className="table">
          <tr>
            <th>Options</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>animationType</td>
            <td>"ease"</td>
            <td>Default spring type animation</td>
          </tr>

          <tr>
            <td>mass</td>
            <td>1</td>
            <td>Spring mass</td>
          </tr>
          <tr>
            <td>friction</td>
            <td>26</td>
            <td>Spring friction</td>
          </tr>
          <tr>
            <td>tension</td>
            <td>170</td>
            <td>Spring energy</td>
          </tr>
          <tr>
            <td>immediate</td>
            <td>false</td>
            <td>
              If <Highlight>true</Highlight>, the animation is not applied
              rather updates are immediate.
            </td>
          </tr>
          <tr>
            <td>duration</td>
            <td>undefined</td>
            <td>
              How long the animation should last, if {`> than`} 0 switch to a
              duration-based animation instead of spring physics
            </td>
          </tr>
          <tr>
            <td>easing</td>
            <td>{`t => t`}</td>
            <td>Linear by default, you can use Easing module.</td>
          </tr>
          <tr>
            <td>decay</td>
            <td>false</td>
            <td>Should apply decay animation.</td>
          </tr>
          <tr>
            <td>onAnimationEnd</td>
            <td>undefined</td>
            <td>Function called after animation is completed.</td>
          </tr>
          <tr>
            <td>listener</td>
            <td>undefined</td>
            <td>Function called every time the value is updated.</td>
          </tr>
        </table>
      </Section>

      <Section>
        <SecondaryTitle id="returns" isSubHeading>
          Returns
        </SecondaryTitle>

        <Paragraph>
          Returns a reference to the Animated Value with the provided data. The
          value can be updated and read by HOCs using{" "}
          <Highlight>.value</Highlight> attribute. To read current value for
          conditional operations, we use <Highlight>.currentValue</Highlight>.
          We can do immediate update by passing object to{" "}
          <Highlight>.value</Highlight> property.
        </Paragraph>

        <Code>{`opacity.value = { toValue: 100, immediate: true }`}</Code>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          In the below example, we render a <Highlight>AnimatedBlock</Highlight>{" "}
          and a button. We initialize an Animated Value{" "}
          <Highlight>opacity</Highlight> and applied in AnimatedBlock and
          triggering the update with a button.
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
      </Section>
    </>
  );
});
