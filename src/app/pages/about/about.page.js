import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Section,
  withSubHeading,
} from "../../commons";

import { AnimatedSearch, BalloonSlider, HamburderMenu } from "../../examples";

export const About = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>About React UI Animate</Title>

        <Paragraph>
          React UI Animate is a react library that allows for creating smooth
          animations and gesture interactions.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="motivation" isSubHeading>
          Motivation and Library overview
        </SecondaryTitle>

        <Paragraph>
          In todays world, interactive and smooth web applications are preferred
          by everyone. Animations on web without any performance drops is very
          important and also we want controlled animations.
        </Paragraph>

        <Paragraph>
          This library represents a modern approach to animation. It is very
          much inspired by{" "}
          <Highlight link="https://react-spring.io/" external>
            react-spring
          </Highlight>{" "}
          and{" "}
          <Highlight link="https://github.com/animatedjs/animated" external>
            animated
          </Highlight>
          . It provides very ease of use APIs to implement physics based spring
          and duration based timing animations with performance. It also
          provides different hooks to implement gestures on web.
        </Paragraph>

        <Paragraph>
          <Highlight
            external
            link="https://www.npmjs.com/package/react-ui-animate"
          >
            react-ui-animate
          </Highlight>{" "}
          is a great tool for creating smooth animations as well as gesture
          interaction on web. It provides very simple and easy APIs to create
          very powerful and smooth animation without any performance issues. And
          it also provides different easy to use hooks for gesture interactions.
          This library represents a modern way of animating and creating gesture
          based interaction on web. The UI can be animated without any
          perfomance issues and it also supports powerful interpolation. It does
          not cast any re-renders and affects any of your views. It simply
          animates the way you want your view to animate.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="examples" isSubHeading>
          Examples
        </SecondaryTitle>

        <Paragraph>
          Here are some examples created using{" "}
          <Highlight
            external
            link="https://www.npmjs.com/package/react-ui-animate"
          >
            react-ui-animate
          </Highlight>
          .
        </Paragraph>

        <div className="example-grid">
          <div
            style={{
              backgroundColor: "#f1f1f1",
              height: 500,
              borderRadius: 10,
            }}
          >
            <div
              style={{
                color: "#a1a1a1",
                margin: 20,
                position: "absolute",
              }}
            >
              Animated Search Bar
            </div>
            <AnimatedSearch />
          </div>

          <div
            style={{
              backgroundColor: "#f1f1f1",
              height: 500,
              borderRadius: 10,
            }}
          >
            <div
              style={{
                color: "#a1a1a1",
                margin: 20,
                position: "absolute",
              }}
            >
              Custom Animated Balloon Slider
            </div>
            <BalloonSlider />
          </div>

          <div
            style={{
              backgroundColor: "#f1f1f1",
              height: 500,
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "#a1a1a1",
                position: "absolute",
                left: 20,
                top: 20,
              }}
            >
              Hamburger Menu
            </div>
            <HamburderMenu />
          </div>
        </div>
      </Section>
    </>
  );
});
