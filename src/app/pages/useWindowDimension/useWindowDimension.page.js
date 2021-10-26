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

export const UseWindowDimension = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>useWindowDimension</Title>
        <Paragraph>
          This hook provides a way to measure the window/document. It handles
          the resize of the window.
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
          <Highlight>event</Highlight> object as its first argument which is
          called initially and is called on every resize of a window.
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
            <td>width</td>
            <td>
              Width of a <Highlight>documentElement</Highlight>
            </td>
          </tr>
          <tr>
            <td>height</td>
            <td>
              Height of a <Highlight>documentElement</Highlight>
            </td>
          </tr>
          <tr>
            <td>innerWidth</td>
            <td>
              Width of a window. Gives <Highlight>window.innerWidth</Highlight>
            </td>
          </tr>
          <tr>
            <td>innerHeight</td>
            <td>
              Height of a window. Gives{" "}
              <Highlight>window.innerHeight</Highlight>
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

        <Paragraph>Void</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          In the below example, <Highlight>useWindowDimension</Highlight> hook
          is used to measure the innerWidth of a window.
        </Paragraph>

        <Code>
          {`import React from "react";
import { useWindowDimension } from "react-ui-animate";

export default function UseOutsideClick() {

  useWindowDimension(
    function ({ innerWidth }) {
        console.log("window inner width", innerWidth);
    },
  );

  return (...);
}`}
        </Code>
      </Section>
    </>
  );
});
