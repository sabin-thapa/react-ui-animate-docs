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
  SubTitle,
} from "../../commons";

export const UseOutsideClick = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>useOutsideClick</Title>

        <Paragraph>Description</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <br />

        <SubTitle type="[HTMLElement]">elementRef</SubTitle>

        <Paragraph>
          First argument is an elementRef created using{" "}
          <Highlight>useRef</Highlight> hook.
        </Paragraph>

        <SubTitle type="[function]">callback</SubTitle>

        <Paragraph>
          Second argument is a callback function with Mouse Event as its first
          argument and it is called whenever we click outside of the referenced
          element.
        </Paragraph>

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
          In the below example, we create a <Highlight>{`<div />`}</Highlight>{" "}
          element, create a reference to that element and used{" "}
          <Highlight>useOutsideClick</Highlight> hook to determine whether we
          clicked outside the referenced element.
        </Paragraph>

        <Code>
          {`import React from "react";
import { useOutsideClick } from "react-ui-animate";

export default function UseOutsideClick() {
  const elemRef = React.useRef(null);

  useOutsideClick(
    elemRef,
    function () {
        console.log("Clicked outside the box");
    },
  );

  return (
      <div
        ref={elemRef}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#ff0000",
        }}
      />
  );
}`}
        </Code>

        <NextPrevButton
          left={{ text: "useMountedValue", to: "/docs/use-mounted-value" }}
          right={{
            text: "useWindowDimension",
            to: "/docs/use-window-dimension",
          }}
        />
      </Section>
    </>
  );
});
