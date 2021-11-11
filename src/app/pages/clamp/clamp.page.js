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

export const Clamp = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>clamp</Title>
        <Paragraph>
          This hook provides a way to implement wheel event in any{" "}
          <Highlight>HTMLElement</Highlight>.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <br />

        <SubTitle type="[function]">callback</SubTitle>

        <Paragraph>
          First argument is a callback function with drag
          <Highlight>event</Highlight> object as its first argument which is
          called on every wheel event.
        </Paragraph>

        <Paragraph>
          Here are the properties of an <Highlight>event</Highlight> object
          argument of a callback function:
        </Paragraph>

        <table className="table" style={{ marginBottom: 20 }}>
          <tr>
            <th>Property</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>target</td>
            <td>Current target element to which the wheel event bound to.</td>
          </tr>

          <tr>
            <td>deltaX</td>
            <td>Wheel delta amount along horizontal axis.</td>
          </tr>
          <tr>
            <td>deltaY</td>
            <td>Wheel delta amount along vertical axis.</td>
          </tr>
          <tr>
            <td>movementX</td>
            <td>
              Amount of movement in x-axis. Always starts from 0 while wheeling.
            </td>
          </tr>
          <tr>
            <td>movementY</td>
            <td>
              Amount of movement in y-axis. Always starts from 0 while wheeling.
            </td>
          </tr>
          <tr>
            <td>offsetX</td>
            <td>
              Amount of movement with offset in x-axis. It saves the previous
              movement and wheel starts from previous position.
            </td>
          </tr>
          <tr>
            <td>offsetY</td>
            <td>
              Amount of movement with offset in y-axis. It saves the previous
              movement and wheel starts from previous position.
            </td>
          </tr>
          <tr>
            <td>velocityX</td>
            <td>Velocity along horizontal wheel direction.</td>
          </tr>
          <tr>
            <td>velocityY</td>
            <td>Velocity along vertical wheel direction.</td>
          </tr>
          <tr>
            <td>directionX</td>
            <td>
              Indicates the current horizontal wheel direction. For positive +1,
              for negative -1 and for not wheeling 0.
            </td>
          </tr>
          <tr>
            <td>directionY</td>
            <td>
              Indicates the current vertical wheel direction. For positive +1,
              for negative -1 and for not wheeling 0.
            </td>
          </tr>
        </table>

        <SubTitle type="[array]">deps?</SubTitle>

        <Paragraph>
          Optional array of values which re-initiates the callback function when
          changed.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Returns
        </SecondaryTitle>

        <Paragraph>
          It returns a function which is spread on any{" "}
          <Highlight>HTMLELement</Highlight>.
        </Paragraph>

        <Paragraph>Define a bind function:</Paragraph>

        <Code>{`const bind = useWheel(event => doSomething(event));}`}</Code>
        <Paragraph>
          Apply it on a <Highlight>HTMLELement</Highlight>:
        </Paragraph>

        <Code>
          {`<div {...bind()} style={{ width: 100, height: 100, backgroundColor: "red" }} />`}
        </Code>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          In the below example, <Highlight>useWheel</Highlight> hook is used to
          capture wheel event on <Highlight>HTMLElement</Highlight>.
        </Paragraph>

        <Code>
          {`import { useAnimatedValue, useWheel, AnimatedBlock } from "react-ui-animate";

export default function() {
  const left = useAnimatedValue(0);

  const bind = useWheel(
    function ({ movementX, isWheeling }) {
        left.value = isWheeling ? movementX : 0;
    },
  );

  return (
    <AnimatedBlock
        {...bind()} // bind here
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#3399ff",
          position: "absolute",
          left: left.value,
          top: 0,
        }}
    />
  );
}`}
        </Code>
      </Section>
    </>
  );
});
