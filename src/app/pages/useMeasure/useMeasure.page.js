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

export const UseMeasure = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>useMeasure</Title>
        <Paragraph>
          This hook provides a way to measure any{" "}
          <Highlight>HTMLElement</Highlight>. It handles the resize of the
          window.
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
          argument which is called initially and is called on every resize of a
          window.
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
            <td>left</td>
            <td>
              Left position of a <Highlight>HTMLELement</Highlight>. It accounts
              the horizontal page offset value.
            </td>
          </tr>
          <tr>
            <td>top</td>
            <td>
              Top position of a <Highlight>HTMLELement</Highlight>. It accounts
              the vertical page offset value.
            </td>
          </tr>
          <tr>
            <td>vLeft</td>
            <td>
              Left position of a <Highlight>HTMLELement</Highlight> relative to
              viewport. It doesn't account horizontal page offset value.
            </td>
          </tr>
          <tr>
            <td>vTop</td>
            <td>
              Top position of a <Highlight>HTMLELement</Highlight> relative to
              viewport. It doesn't account vertical page offset value.
            </td>
          </tr>
          <tr>
            <td>width</td>
            <td>
              Width of a <Highlight>HTMLELement</Highlight>
            </td>
          </tr>
          <tr>
            <td>height</td>
            <td>
              Height of a <Highlight>HTMLElement</Highlight>
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

        <Code>{`const bind = useMeasure(event => doSomething(event));}`}</Code>
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
          In the below example, <Highlight>useMeasure</Highlight> hook is used
          to measure the widths of a multiple mapped elements.
        </Paragraph>

        <Paragraph>
          Multiple <Highlight>HTMLElements</Highlight> can be measured by
          passing an argument in the returned function while spreading. All the
          measurements are in array with same index as mapped elements.
        </Paragraph>

        <Code>
          {`
import { useMeasure } from "react-ui-animate";

export default function() {

  const bind = useMeasure(
    function ({ width }) {
        console.log("width", width); // Array of widths
    },
  );

  return (
    <>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              {...bind(i)} // passed with index
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#3399ff",
              }}
            />
          ))}
      </>
  );
}`}
        </Code>
      </Section>
    </>
  );
});
