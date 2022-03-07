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

export const UseDrag = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>useDrag</Title>
        <Paragraph>
          This hook provides a way to make any{" "}
          <Highlight>HTMLElement</Highlight> draggable.
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
          called on every drag event.
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
            <td>args</td>
            <td>Array of argument passed in bind function.</td>
          </tr>
          <tr>
            <td>down</td>
            <td>Boolean indicating the mouse click state.</td>
          </tr>
          <tr>
            <td>movementX</td>
            <td>
              Amount of movement in x-axis. Always starts from 0 while dragging.
            </td>
          </tr>
          <tr>
            <td>movementY</td>
            <td>
              Amount of movement in y-axis. Always starts from 0 while dragging.
            </td>
          </tr>
          <tr>
            <td>offsetX</td>
            <td>
              Amount of movement with offset in x-axis. It saves the previous
              movement and drag starts from previous position.
            </td>
          </tr>
          <tr>
            <td>offsetY</td>
            <td>
              Amount of movement with offset in y-axis. It saves the previous
              movement and drag starts from previous position.
            </td>
          </tr>
          <tr>
            <td>velocityX</td>
            <td>Velocity along horizontal drag direction.</td>
          </tr>
          <tr>
            <td>velocityY</td>
            <td>Velocity along vertical drag direction.</td>
          </tr>
          <tr>
            <td>directionX</td>
            <td>
              Indicates the current horizontal drag direction. For positive +1,
              for negative -1 and for not dragging 0.
            </td>
          </tr>
          <tr>
            <td>directionY</td>
            <td>
              Indicates the current vertical drag direction. For positive +1,
              for negative -1 and for not dragging 0.
            </td>
          </tr>
          <tr>
            <td>distanceX</td>
            <td>Same as movementX but always positive.</td>
          </tr>
          <tr>
            <td>distanceY</td>
            <td>Same as movementY but always positive.</td>
          </tr>
          <tr>
            <td>cancel</td>
            <td>Function to cancel the current drag gesture.</td>
          </tr>
        </table>

        <SubTitle type="[object]">config?</SubTitle>

        <Paragraph>
          The second argument is an optional object which is called every time
          on mouse / pointer down event.
        </Paragraph>

        <table className="table" style={{ marginBottom: 20 }}>
          <tr>
            <th>Options</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>initial</td>
            <td>undefined</td>
            <td>
              Function called initially on mouse / pointer down. It must return
              an object with <Highlight>movementX</Highlight> and{" "}
              <Highlight>movementY</Highlight> properties.
            </td>
          </tr>
        </table>
      </Section>

      <Section>
        <SecondaryTitle id="returns" isSubHeading>
          Returns
        </SecondaryTitle>

        <Paragraph>
          It returns a function which is spread on any{" "}
          <Highlight>HTMLELement</Highlight>.
        </Paragraph>

        <Paragraph>Define a bind function:</Paragraph>

        <Code>{`const bind = useDrag(event => doSomething(event));}`}</Code>
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
          In the below example, <Highlight>useDrag</Highlight> hook is used to
          make a HTMLElement draggable.
        </Paragraph>

        <Code>
          {`import { useAnimatedValue, useDrag, AnimatedBlock } from "react-ui-animate";

export default function() {
  const left = useAnimatedValue(0);

  const bind = useDrag(
    function ({ offsetX }) {
        left.value = offsetX;
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
