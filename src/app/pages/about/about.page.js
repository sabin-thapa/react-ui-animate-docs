import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Section,
  Box,
  NextPrevButton,
} from "../../commons";

export const About = () => {
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
        <SecondaryTitle>Motivation &amp; Library overview</SecondaryTitle>

        <Paragraph></Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Problems and Limitations</SecondaryTitle>

        <Paragraph></Paragraph>
      </Section>

      <Section>
        <SecondaryTitle>Examples</SecondaryTitle>

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

        <div style={{ margin: "10px 0px" }}>1. Animated Search Bar</div>
        <iframe
          src="https://codesandbox.io/embed/animated-search-bar-using-react-ui-animate-r28rf?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "500px",
            border: "0",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title="Animated Search Bar using react-ui-animate"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>

        <Box mt={20} />

        <div style={{ margin: "10px 0px" }}>2. Animated Balloon Slider</div>
        <iframe
          src="https://codesandbox.io/embed/balloon-slider-animation-12c2t?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "500px",
            border: "0",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title="Balloon Slider Animation"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>

        <NextPrevButton
          right={{ text: "Getting Started", to: "/docs/getting-started" }}
        />
      </Section>
    </>
  );
};
