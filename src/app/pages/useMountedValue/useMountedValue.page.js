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

export const UseMountedValue = withSubHeading(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section>
        <Title>useMountedValue</Title>

        <Paragraph>
          <Highlight>useMountedValue</Highlight> is used for mounting and
          unmounting of a component with transition.{" "}
          <Highlight>useMountedValue</Highlight> returns a function when a state
          and phases are passed as first and second arguments. The first
          argument must be a <Highlight>boolean</Highlight> state and second
          argument is an object with three phases property,{" "}
          <Highlight>from, enter and exit</Highlight>. The phases{" "}
          <Highlight>from, enter and exit</Highlight> are three numeric values
          which defines the transition lifecycle of a component when it mounts
          and unmounts.
        </Paragraph>
      </Section>

      <Section>
        <SecondaryTitle id="arguments" isSubHeading>
          Arguments
        </SecondaryTitle>

        <br />

        <SubTitle type="[boolean]">initialState</SubTitle>

        <Paragraph>
          The first argument is <Highlight>initialState</Highlight> which
          determines the current mounting state of a component. Changes to it
          triggers the animation and mounting/unmounting of component occurs.
        </Paragraph>

        <SubTitle type="[object]">config?</SubTitle>

        <Paragraph>
          Object containing the animation configuration. Allowed parameters are
          listed below:
        </Paragraph>

        <table className="table">
          <tr>
            <th>Options</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>from</td>
            <td>undefined</td>
            <td>Initial state of animation value when component mounts</td>
          </tr>
          <tr>
            <td>enter</td>
            <td>undefined</td>
            <td>
              Animation value animates from `from` phase to `enter` phase when
              component mounts
            </td>
          </tr>
          <tr>
            <td>exit</td>
            <td>undefined</td>
            <td>
              Animation value animates from `enter` phase to `exit` phase when
              state is false and component unmounts
            </td>
          </tr>
          <tr>
            <td>config?</td>
            <td>undefined</td>
            <td>Animation configuration object</td>
          </tr>
        </table>

        <Paragraph>
          Config object is animation configuration object with following
          properties:
        </Paragraph>

        <table className="table">
          <tr>
            <th>Options</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>animationType</td>
            <td>"ease"</td>
            <td>Default spring type animation</td>
          </tr>
          <tr>
            <td>mass</td>
            <td>1</td>
            <td>Spring mass</td>
          </tr>
          <tr>
            <td>friction</td>
            <td>26</td>
            <td>Spring friction</td>
          </tr>
          <tr>
            <td>tension</td>
            <td>170</td>
            <td>Spring energy</td>
          </tr>
          <tr>
            <td>immediate</td>
            <td>false</td>
            <td>
              If <Highlight>true</Highlight>, the animation is not applied
              rather updates are immediate.
            </td>
          </tr>
          <tr>
            <td>duration</td>
            <td>undefined</td>
            <td>
              How long the animation should last, if {`> than`} 0 switch to a
              duration-based animation instead of spring physics
            </td>
          </tr>
          <tr>
            <td>enterDuration</td>
            <td>undefined</td>
            <td>
              How long the animation should last for enter phase. ( Mounting )
            </td>
          </tr>
          <tr>
            <td>exitDuration</td>
            <td>undefined</td>
            <td>
              How long the animation should last for exit phase. ( Unmounting )
            </td>
          </tr>
          <tr>
            <td>easing</td>
            <td>{`t => t`}</td>
            <td>Linear by default, you can use Easing module.</td>
          </tr>
          <tr>
            <td>delay</td>
            <td>0</td>
            <td>Number of milliseconds after which the animation is started</td>
          </tr>
          <tr>
            <td>onAnimationEnd</td>
            <td>undefined</td>
            <td>Function called after animation is completed.</td>
          </tr>
          <tr>
            <td>listener</td>
            <td>undefined</td>
            <td>Function called every time the value is updated.</td>
          </tr>
        </table>
      </Section>

      <Section>
        <SecondaryTitle id="returns" isSubHeading>
          Returns
        </SecondaryTitle>

        <Paragraph>
          It returns a function which takes a callback function with arguments:
          Animated Value as first argument and boolean defining current state as
          second argument.
        </Paragraph>

        <Code>
          {`const mountedFunction = useMountedValue(boolean, { from: 0, enter: 1, exit: 0 });`}
        </Code>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          In the below example, <Highlight>open</Highlight> function receives a
          callback that receives two arguments: the Animated Value and a boolean
          respectively. The first argument, Animated Value animates from from =
          0 to enter = 1 when the visible is true and enter = 1 to exit = 0 when
          visible is false. And the second argument, boolean dinamically
          determines whether the component is mounted or not after animation.{" "}
          <Highlight>AnimatedBlock</Highlight> HOC is used to read animated
          values.
        </Paragraph>

        <Code>
          {`import { useState } from "react";
import { useMountedValue } from "react-ui-animate";

function SomeComponent() {
  const [visible, setVisible] = useState(false);

  const open = useMountedValue(visible, { from: 0, enter: 1, exit: 0 });

  return (
    <div>
      {open(
        (animation, mounted) =>
          mounted && (
            <AnimatedBlock
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#3399ff",
                opacity: animation.value
              }}
            />
          )
      )}

      <button 
        onClick={() => setVisible((prev) => !prev)}
      >
        CLICK ME
      </button>
    </div>
  );
}`}
        </Code>
      </Section>
    </>
  );
});
