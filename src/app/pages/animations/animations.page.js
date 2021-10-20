import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Code,
  Section,
  NextPrevButton,
} from "../../commons";

export const Animations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const subHeadings = document.getElementsByClassName("subheading");

    console.log("subHeadings", subHeadings);
  }, []);

  return (
    <>
      <Section>
        <Title>Animations</Title>

        <Paragraph>
          Animations are very important to create a great user experience.
          Objects in motion have momentum and rarely come to stop immediately.
          To convey physically believable motion, we need physics based
          animations. The library provides a way to implement any physically
          behaving animations.
        </Paragraph>

        <Paragraph>
          In the previous article about{" "}
          <Highlight link="/docs/animated-values">Animated Values</Highlight>,
          we learned about <Highlight>useAnimatedValue</Highlight> hook. We also
          learned how to perform animated transitions by assigning values to a
          Animated Values. This, however, is not the only way how animations can
          be implemented. React UI Animate provides a number of ways how
          animations can be customized and implemented. In this article, we
          explore different ways to implement animated transitions and how
          customizations can be done in an animation.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="transition" className="subheading">
          Animated Value Animated Transition
        </SecondaryTitle>

        <Paragraph>
          React UI Animate provides one of the easiest way to implement animated
          transitions with <Highlight>useAnimatedValue</Highlight> hook. We
          implemented a simple opacity toggle animation by simply assigning and
          reading opacity node. Let us recall the example from previous article,
          where we'd update an Animated Value when we cliked a button.
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
}
`}
        </Code>

        <Paragraph>
          In the above example when we click button, opacity is animated from 0
          to 1 smoothly. As you can notice <Highlight>AnimatedBlock</Highlight>{" "}
          is used instead of any other HTML Element because the Animated Values
          cannot be read by HTML Elements, we need special type of Component
          that can read it. Here, we have <Highlight>AnimatedBlock</Highlight>{" "}
          HOC which is a div element and also can read Animated Values.
        </Paragraph>

        <Paragraph>
          In React UI Animate, such Animated Value can accept primitives like
          number, boolean, string or Animated Value ifself. When we initialize a{" "}
          <Highlight>useAnimatedValue</Highlight>, with any primitives, it must
          be updated / assigned with same primitive type. You also can initiate
          the useAnimatedValue with conditional operation. For example:
        </Paragraph>

        <Code>
          {`import { useState } from "react";
import { useAnimatedValue } from "react-ui-animate";

export default function () {
  const [open, setOpen] = useState(false);
  const opacity = useAnimatedValue(open ? 1 : 0); // You can also initialize with a conditional operator

  return (
    ...
  );
}
`}
        </Code>

        <Paragraph>
          In above example, you could initialize a value with a conditional
          operator. You dont even need to assign value for update. Changing
          state <Highlight>open</Highlight> with <Highlight>setOpen</Highlight>{" "}
          can conditionally update the Animated Value with animated transitions.
        </Paragraph>

        <Paragraph>
          Strings in Animated Value are also allowed which is benificial for
          string valued style properties and svg paths. When strings are updated
          with new string, the <Highlight>useAnimatedValue</Highlight>{" "}
          determines whether it can be interpolated or not. If it can be
          interpolated, it assigns the animated transitions and if not, it
          instantly updates to new one. Let us take an example:
        </Paragraph>

        <Code>
          {`import { useAnimatedValue } from "react-ui-animate";

export default function () {
  const position = useAnimatedValue("relative"); // assigning strings

  return (
    ...
    <button onClick={() => (position.value = "fixed")}>Toggle</button>
  );
}
`}
        </Code>
      </Section>

      <Section>
        <SecondaryTitle id="configure" className="subheading">
          Configuring Animations
        </SecondaryTitle>

        <Paragraph>Spring, Timing, Bezier curve, etc</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="interpolation" className="subheading">
          Interpolations
        </SecondaryTitle>

        <Paragraph>interpolate</Paragraph>
      </Section>

      <NextPrevButton
        left={{ text: "Animated Values", to: "/docs/animated-values" }}
        right={{ text: "Gestures", to: "/docs/gestures" }}
      />
    </>
  );
};
