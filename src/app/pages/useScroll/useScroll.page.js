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

export const UseScroll = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>useScroll</Title>
        <Paragraph>
          This hook provides a way to handle scroll event in any{" "}
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
          First argument is a callback function with{" "}
          <Highlight>event</Highlight> object with measurements as its first
          argument which is called initially and is called on every scroll.
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
            <td>isScrolling</td>
            <td>Boolean indicating the current status of scrolling.</td>
          </tr>
          <tr>
            <td>scrollX</td>
            <td>Horizontal scroll amount.</td>
          </tr>
          <tr>
            <td>scrollY</td>
            <td>Vertical scroll amount.</td>
          </tr>
          <tr>
            <td>velocityX</td>
            <td>Velocity along horizontal scrolling direction.</td>
          </tr>
          <tr>
            <td>velocityY</td>
            <td>Velocity along vertical scrolling direction.</td>
          </tr>
          <tr>
            <td>directionX</td>
            <td>
              Indicates the current horizontal scrolling direction. For positive
              +1, for negative -1 and for not scrolling 0.
            </td>
          </tr>
          <tr>
            <td>directionY</td>
            <td>
              Indicates the current vertical scrolling direction. For positive
              +1, for negative -1 and for not scrolling 0.
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

        <Code>{`useScroll(event => doSomething(event));}`}</Code>

        <Paragraph>Or you could bind it in any HTMLElement:</Paragraph>

        <Code>{`const bind = useScroll(event => doSomething(event));}`}</Code>

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
          In the below example, <Highlight>useScroll</Highlight> hook is used to
          get <Highlight>scrollY</Highlight>.
        </Paragraph>

        <Code>
          {`import { useScroll } from "react-ui-animate";

export default function() {

  const bind = useScroll(
    function ({ scrollY }) {
        console.log("Vertical scrolling amount", scrollY);
    },
  );

  return (...);
}`}
        </Code>
      </Section>
    </>
  );
});
