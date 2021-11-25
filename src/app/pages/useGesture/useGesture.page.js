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

export const UseGesture = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>useGesture</Title>
        <Paragraph>
          This hook provides a way to handle multiple gestures on a single{" "}
          <Highlight>HTMLElement</Highlight>.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <br />

        <SubTitle type="[object]">config</SubTitle>

        <Paragraph>
          The first arugment of <Highlight>useGesture</Highlight> hook is an
          object which has following properties:
        </Paragraph>

        <table className="table" style={{ marginBottom: 20 }}>
          <tr>
            <th>Property</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>onDrag</td>
            <td>
              Callback fuction equivalent to{" "}
              <Highlight link="/docs/use-drag">useDrag</Highlight> callback with
              equivalent event object.
            </td>
          </tr>
          <tr>
            <td>onWheel</td>
            <td>
              Callback fuction equivalent to{" "}
              <Highlight link="/docs/use-wheel">useWheel</Highlight> callback
              with equivalent event object.
            </td>
          </tr>
          <tr>
            <td>onScroll</td>
            <td>
              Callback fuction equivalent to{" "}
              <Highlight link="/docs/use-scroll">useScroll</Highlight> callback
              with equivalent event object.
            </td>
          </tr>
          <tr>
            <td>onMouseMove</td>
            <td>
              Callback fuction equivalent to{" "}
              <Highlight link="/docs/use-mouse-move">useMouseMove</Highlight>{" "}
              callback with equivalent event object.
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
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          In the below example, <Highlight>useGesture</Highlight> hook for drag
          and wheel:
        </Paragraph>

        <Code>
          {`import { useGesture, AnimatedBlock } from "react-ui-animate";

export default function() {
  const bind = useDrag({
    onDrag: function({ movementX }) { ... },
    onWheel: function({ deltaX }) { ... },
  });

  return (
    <AnimatedBlock
        {...bind()} // bind here
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#3399ff",
        }}
    />
  );
}`}
        </Code>
      </Section>
    </>
  );
});
