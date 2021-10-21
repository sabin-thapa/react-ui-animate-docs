import React, { useEffect } from "react";
import { AnimatedBlock, interpolate, useAnimatedValue } from "react-ui-animate";

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

export const Animations = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <SecondaryTitle id="transition" isSubHeading>
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
}`}
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
          number, boolean, string or Animated Value itself. When we initialize a{" "}
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
}`}
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
}`}
        </Code>
      </Section>

      <Section>
        <SecondaryTitle id="configure" isSubHeading>
          Configuring Animations
        </SecondaryTitle>

        <Paragraph>
          Basically, React UI Animate provides two types of animation
          configurations: <Highlight>Timing</Highlight> and{" "}
          <Highlight>Spring</Highlight> based animations. Timing based
          animations depends upon duration while Spring based animations are
          naturally balanced and depends upon properties of an object. By
          default, Animated Values in React UI Animate implements{" "}
          <Highlight>Spring</Highlight> based animation.{" "}
          <Highlight>useAnimatedValue</Highlight> hook accepts a second optional
          argument which is an object different animation configurations. To
          simply modify the nature of spring animation we can define{" "}
          <Highlight>animationType</Highlight> property.
        </Paragraph>

        <Paragraph>
          <Highlight>animationType</Highlight> property accepts a string of
          values like ease, elastic, wooble, etc. Default value is "ease".
        </Paragraph>

        <Code>
          {`const opacity = useAnimatedValue(0, { animationType: "elastic" });`}
        </Code>

        <Paragraph>
          Aditionally, You can also define custom spring configurations by
          modifying properties: <Highlight>mass</Highlight>,
          <Highlight>friction</Highlight> and <Highlight>tension</Highlight>
        </Paragraph>

        <Code>
          {`const opacity = useAnimatedValue(0, { mass: 1, friction: 10, tension: 200 });`}
        </Code>

        <Paragraph>
          In the above example, we defined <Highlight>Spring</Highlight> based
          animations which is naturally balanced. But, In some cases,{" "}
          <Highlight>Timing</Highlight> based animation is needed. The Timing
          based animations are fully dependent upon durations. We have to define
          the amount of duration when the animation is finished. The
          configuration object accepts a <Highlight>duration</Highlight>{" "}
          property where the value is the number of milliseconds the animation
          should be completed.
        </Paragraph>

        <Code>
          {`const opacity = useAnimatedValue(0, { duration: 1000 });`}
        </Code>

        <Paragraph>
          In the above example, <Highlight>duration</Highlight> is set to 1000
          milliseconds i.e. 1 second. When animation value is updated it will
          complete the animation to in exactly 1 second. These animations are
          not naturally balanced like Spring based animations because it is
          linearly interpolated. Linear animations are boring and is not
          possible in real life. We can define some easing functions to modify
          the nature of Time based animations. To do so, we should define{" "}
          <Highlight>easing</Highlight> property.
        </Paragraph>

        <Code>
          {`const opacity = useAnimatedValue(0, { duration: 1000, easing: Easing.inOut(Easing.ease) });`}
        </Code>

        <Paragraph>
          In the above example, <Highlight>duration</Highlight> is set to 1000
          milliseconds and <Highlight>easing</Highlight> is set to
          Easing.inOut(Easing.ease) which defines an object moves slowly
          accelerating to speed and slowly coming to rest. You can find a
          visualization of some common easing functions at{" "}
          <Highlight link="http://easings.net/" external>
            http://easings.net/
          </Highlight>
          . Bezier curves also can be implemented.
        </Paragraph>

        <Code>
          {`const opacity = useAnimatedValue(0, { duration: 1000, easing: Easing.bezier(.17,.67,.83,.67) });`}
        </Code>

        <Paragraph>
          <Highlight>Easing</Highlight> module also has a{" "}
          <Highlight>bezier</Highlight> function which provides a cubic bezier
          curve, equivalent to CSS Transitions'{" "}
          <Highlight>transition-timing-function</Highlight>. A useful tool to
          visualize cubic bezier curves can be found at{" "}
          <Highlight link="http://cubic-bezier.com/" external>
            http://cubic-bezier.com/
          </Highlight>
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="interpolation" isSubHeading>
          Interpolations
        </SecondaryTitle>

        <Paragraph>
          Each property can be run through an interpolation first. An
          interpolation maps input ranges to output ranges, typically using a
          linear interpolation but also supports easing functions. By default,
          it will extrapolate the curve beyond the ranges given, but you can
          also have it clamp the output value.{" "}
          <Highlight>interpolate</Highlight> function allows the Animated Value
          to map from input ranges to output ranges.
        </Paragraph>

        <Paragraph>
          A basic mapping to convert a 0-1 range to a 0-100 range would be:
        </Paragraph>

        <Code>{`interpolate(value, [0, 1], [0, 100]);`}</Code>

        <Paragraph>
          For example, we want to move an element from left 0px to 500px when
          the opacity changes from 0 to 1.
        </Paragraph>

        <Code>{`import { useAnimatedValue, AnimatedBlock, interpolate } from "react-ui-animate";

export default function() {
  const opacity = useAnimatedValue(0);

  return (
    <>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          opacity: opacity.value,
          backgroundColor: "red",
          position: "absolute",
          left: interpolate(opacity.value, [0, 1], [0, 500]),
        }}
      />

      <button onClick={() => (opacity.value = 1)}>Animate Me</button>
    </>
  );
}`}</Code>

        <Paragraph>
          <Highlight>interpolate</Highlight> accepts an animated value as its
          first argument, array of numbers as its second argument namely input
          range and array of numbers with same length as second argument namely
          output range. It also supports multiple range segments as well, which
          is very much useful for different scenarios like dead zones and other
          handly tricks.
        </Paragraph>

        <Code>{`interpolate(value, [-300, -100, 0, 100, 101], [300, 0, 1, 0, 0]);`}</Code>

        <Paragraph>
          <Highlight>interpolate</Highlight> also supports mapping to strings,
          allowing you to animate colors as well as values with units. For
          example, if you wanted to change backgroundColor from red to black
          when value changes from 0 to 1, you could do:
        </Paragraph>

        <Code>{`interpolate(value, [0, 1], ["red", "black"]);`}</Code>

        <Paragraph>
          The default behavior of <Highlight>interpolate</Highlight> is that it
          will extrapolate the curve beyond the ranges given. You can clamp the
          value output value by passing extrapolation configuration object as
          4th argument of <Highlight>interpolate</Highlight> function. You can
          set the extrapolation by setting the{" "}
          <Highlight>extrapolate</Highlight>,{" "}
          <Highlight>extrapolateLeft</Highlight>, or
          <Highlight>extrapolateRight</Highlight> options. The default value is
          "extend" but you can use "clamp" to prevent the output value from
          exceeding outputRange.
        </Paragraph>

        <Code>{`interpolate(value, [-300, -100, 0, 100, 101], [300, 0, 1, 0, 0], {
  extrapolate: "clamp"
});`}</Code>
      </Section>

      <NextPrevButton
        left={{ text: "Animated Values", to: "/docs/animated-values" }}
        right={{ text: "Gestures", to: "/docs/gestures" }}
      />
    </>
  );
});
