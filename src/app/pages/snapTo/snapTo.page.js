import React, { useEffect } from "react";

import {
  Title,
  Paragraph,
  Highlight,
  Code,
  Section,
  withSubHeading,
} from "../../commons";

export const SnapTo = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>snapTo</Title>
        <Paragraph>
          <Highlight>snapTo</Highlight> function calculates a snapping point
          according to current value and current velocity among different snap
          points.
        </Paragraph>

        <Code>
          {`function snapTo(value: number, velocity: number, snapPoints: Array<number>);`}
        </Code>
      </Section>
    </>
  );
});
