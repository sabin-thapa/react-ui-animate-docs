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

export const Gestures = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>Gestures</Title>

        <Paragraph>
          Gestures in React UI Animate is a set of gestures that let you bind
          mouse and touch events to any node. With the data you receive, it
          becomes easy to set up complex gestures like dragging and scrolling
          with a few lines of code.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="available-gestures" isSubHeading>
          Available gesture hooks
        </SecondaryTitle>

        <Paragraph>
          Currently, the library provides the following list of gesture hooks.
          All these hooks share similar API pattern:
        </Paragraph>

        <Paragraph>
          <ul className="spaced">
            <li>
              <Highlight link="/docs/use-scroll">useScroll</Highlight> for
              scroll gesture
            </li>
            <li>
              <Highlight link="/docs/use-mouse-move">useMouseMove</Highlight>{" "}
              for mouse move gesture
            </li>
            <li>
              <Highlight link="/docs/use-drag">useDrag</Highlight> for drag
              gesture
            </li>
          </ul>
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="binding-gesture" isSubHeading>
          Binding a gesture to a Node
        </SecondaryTitle>

        <Paragraph>
          Due to similar pattern of gesture hooks, it becomes quite easy to
          implement any gesture effortlessly. To bind a gesture to a node, the
          gesture hooks returns a function, which when called returns an object
          with event handlers. Let say we want a{" "}
          <Highlight>{"<div />"}</Highlight> to be draggable.
        </Paragraph>

        <Code>{`import { useDrag } from "react-ui-animate";

export default function() {

  const bind = useDrag((event) => doSomething(event));

  return (
    <div
      {...bind()}
      style={{
        width: 60,
        height: 60,
        backgroundColor: "#3399ff",
      }}
    />
  );
}`}</Code>

        <Paragraph>
          In the above example, a <Highlight>{"<div />"}</Highlight> receives an
          object with event handlers when you spread{" "}
          <Highlight>{`...bind()`}</Highlight>, you're actually adding
          onPointerDown, onMouseDown, and other event handlers.
        </Paragraph>
      </Section>

      <NextPrevButton
        left={{ text: "Animated Values", to: "/docs/animated-values" }}
        right={{ text: "Animated HOCs", to: "/docs/animated-hocs" }}
      />
    </>
  );
});
