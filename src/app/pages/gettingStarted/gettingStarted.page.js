import React, { useEffect } from "react";

import {
  Title,
  SecondaryTitle,
  Paragraph,
  Highlight,
  Code,
  Section,
  withSubHeading,
  Tab,
} from "../../commons";

export const GettingStarted = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>Getting started</Title>

        <Paragraph>
          Here, In this official documentation of React UI Animate, you will be
          able to understand the basic concept of animation on react / next with
          React UI Animate. It should cover enough for you to build quality
          animations on your react / next projects. It gives you all the
          necessary background that you need to dive deeper into the more
          advanced parts of React UI Animate. It covers all the basic concept of
          all APIs and API References provided by React UI Animate.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="pre-requisites" isSubHeading>
          Pre-requisites
        </SecondaryTitle>

        <Paragraph>
          If you are familier with Javascript and React, then you'll be able to
          get through this documentation easily. If not, then you can go through
          some basic knowledge of Javascript and React, then you are ready to
          go.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="min-requirements" isSubHeading>
          Minimum requirements
        </SecondaryTitle>

        <Paragraph>
          <ul className="spaced">
            <li>
              <Highlight>react</Highlight>
              {" >= 16.13.1"}
            </li>
            <li>
              <Highlight>react-dom</Highlight>
              {" >= 16.13.1"}
            </li>
          </ul>
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="installation" isSubHeading>
          Installation
        </SecondaryTitle>

        <Paragraph>In you project directory, run:</Paragraph>

        <Paragraph>
          <Tab
            panes={[
              {
                title: "npm",
                render: () => (
                  <Code language="bash">
                    {`# npm
npm install react-ui-animate`}
                  </Code>
                ),
              },
              {
                title: "yarn",
                render: () => (
                  <Code language="bash">
                    {`# yarn
yarn add react-ui-animate`}
                  </Code>
                ),
              },
            ]}
          />
        </Paragraph>
        <Paragraph>
          After installation you are ready to implement your own gestures and
          animation on your project. Let's write a simple demo where an elements
          opacity is animated from 0 to 1 when we click a button:
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
          In next section we will cover{" "}
          <Highlight link="/docs/animated-values">Animated Values</Highlight>.
        </Paragraph>
      </Section>
    </>
  );
});
