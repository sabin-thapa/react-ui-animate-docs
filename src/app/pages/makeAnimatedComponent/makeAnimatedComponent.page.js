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

export const MakeAnimatedComponent = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>makeAnimatedComponent</Title>
        <Paragraph>
          <Highlight>makeAnimatedComponent</Highlight> function takes any
          component and make it animatable which can read Animated Values.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <br />

        <SubTitle type="[Element]">Element</SubTitle>

        <Paragraph>
          It takes an any element argument and make it animatable.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="returns" isSubHeading>
          Returns
        </SecondaryTitle>

        <Paragraph>It returns an animatable component.</Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Code>{`const AnimatedH1 = makeAnimatedComponent("h1");`}</Code>
      </Section>
    </>
  );
});
