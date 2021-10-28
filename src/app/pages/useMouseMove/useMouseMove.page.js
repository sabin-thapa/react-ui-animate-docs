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

export const UseMouseMove = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>useMouseMove</Title>
        <Paragraph>
          This hook provides a way to handle mouse move event on a{" "}
          <Highlight>HTMLElement</Highlight> or <Highlight>window</Highlight>.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <br />

        <SubTitle type="[function]">callback</SubTitle>

        <Paragraph>
          First argument is a callback function with
          <Highlight>event</Highlight> object as its first argument which is
          called on every mouse move.
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
            <td>
              <Highlight>event.target</Highlight> element the mouse move is
              hovered upon.
            </td>
          </tr>
          <tr>
            <td>isMoving</td>
            <td>Boolean indicating the current status of mouse movement.</td>
          </tr>
          <tr>
            <td>mouseX</td>
            <td>Horizontal mouse movement amount.</td>
          </tr>
          <tr>
            <td>mouseY</td>
            <td>Vertical mouse movement amount.</td>
          </tr>
          <tr>
            <td>velocityX</td>
            <td>Velocity along horizontal mouse movement direction.</td>
          </tr>
          <tr>
            <td>velocityY</td>
            <td>Velocity along vertical mouse movement direction.</td>
          </tr>
          <tr>
            <td>directionX</td>
            <td>
              Indicates the current horizontal mouse movement direction. For
              positive +1, for negative -1 and for not moving 0.
            </td>
          </tr>
          <tr>
            <td>directionY</td>
            <td>
              Indicates the current vertical mouse movement direction. For
              positive +1, for negative -1 and for not moving 0.
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
          It returns a function which can be spread on any{" "}
          <Highlight>HTMLELement</Highlight>. If not bound to any{" "}
          <Highlight>HTMLElement</Highlight>, event is attached to{" "}
          <Highlight>window</Highlight>.
        </Paragraph>

        <Paragraph>Define a hook for window:</Paragraph>

        <Code>{`useMouseMove(event => doSomething(event));}`}</Code>

        <Paragraph>Or you could bind it in any HTMLElement:</Paragraph>

        <Code>{`const bind = useMouseMove(event => doSomething(event));}`}</Code>

        <Paragraph>
          Apply it on a <Highlight>HTMLELement</Highlight>:
        </Paragraph>

        <Code>
          {`<div {...bind()}>
...
</div>`}
        </Code>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          In the below example, <Highlight>useMouseMove</Highlight> hook is used
          to get <Highlight>mouseX</Highlight> and <Highlight>mouseY</Highlight>
          .
        </Paragraph>

        <Code>
          {`import { useMouseMove } from "react-ui-animate";

export default function() {

  const bind = useMouseMove(
    function ({ mouseX, mouseY }) {
        console.log("XY", mouseX, mouseY);
    },
  );

  return (...);
}`}
        </Code>
      </Section>
    </>
  );
});
