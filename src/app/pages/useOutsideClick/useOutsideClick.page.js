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
        <Title>UseOutsideClick</Title>

        <Paragraph>
          <Highlight>useMountedValue</Highlight> is used for mounting and
          unmounting of a component with transition.{" "}
          <Highlight>useMountedValue</Highlight> returns a function when a state
          and phases are passed as first and second arguments. The first
          argument must be a <Highlight>boolean</Highlight> state and second
          argument is an array with three phases{" "}
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

        <SubTitle type="[array]">phases</SubTitle>

        <Paragraph>
          Array of three numbers <Highlight>[from, enter, exit]</Highlight>{" "}
          which the animation value is assigned for three phases.
        </Paragraph>

        <SubTitle type="[object]">config?</SubTitle>

        <Paragraph>
          Object containing the animation configuration. Allowed parameters are
          listed below:
        </Paragraph>

        {/* duration?: number;
  velocity?: number;
  mass?: number;
  friction?: number;
  tension?: number;
  easing?: (t: number) => number;
  delay?: number;
  decay?: number | boolean; 
  animationType?: InitialConfigType;
  onAnimationEnd?: (value: any) => void;
  listener?: (value: number) => void;
  immediate?: boolean;
  */}

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
            <td>velocity</td>
            <td>0</td>
            <td>Initial velocity</td>
          </tr>
          <tr>
            <td>decay</td>
            <td>false</td>
            <td>Should apply decay animation.</td>
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
          {`const mountedFunction = useMountedValue(boolean, [from, enter, exit]);`}
        </Code>
      </Section>

      <Section>
        <SecondaryTitle id="example" isSubHeading>
          Example
        </SecondaryTitle>

        <Paragraph>
          In the below example, <Highlight>open</Highlight> function receives a
          callback that receives two arguments: the Animated Value and a boolean
          respectively. The first argument, Animated Value animates from
          phases[0] = 0 to phases[1] = 1 when the visible is true and phases[1]
          = 1 to phases[2] = 0 when visible is false. And the second argument,
          boolean dinamically determines whether the component is mounted or not
          after animation. <Highlight>AnimatedBlock</Highlight> HOC is used to
          read animated values.
        </Paragraph>

        <Code>
          {`import { useState } from "react";
import { useMountedValue } from "react-ui-animate";

function SomeComponent() {
  const [visible, setVisible] = useState(false);

  const open = useMountedValue(visible, [0, 1, 0]);

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

        <NextPrevButton
          left={{ text: "useAnimatedValue", to: "/docs/use-animated-value" }}
          right={{ text: "useOutsideClick", to: "/docs/use-outside-click" }}
        />
      </Section>
    </>
  );
});
