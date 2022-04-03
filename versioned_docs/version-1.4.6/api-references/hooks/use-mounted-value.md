---
sidebar_position: 2
id: use-mounted-value
title: useMountedValue
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

`useMountedValue` is used for mounting and unmounting of a component with transition. `useMountedValue` returns a function when a state and phases are passed as first and second arguments. The first argument must be a `boolean` state and second argument is an `object` with three phases property, `from`, `enter` and `exit`. The phases `from`, `enter` and `exit` are three numeric values which defines the transition lifecycle of a component when it mounts and unmounts.

## Arguments

#### `initialState` [ boolean ]

The first argument is `initialState` which determines the current mounting state of a component. Changes to it triggers the animation and mounting/unmounting of component occurs.

#### `config` [ object ]

Optional `object` containing the animation configuration. Allowed parameters are listed below:

| Options | Default   | Description                                                                                            |
| ------- | --------- | ------------------------------------------------------------------------------------------------------ |
| from    | undefined | Initial state of animation value when component mounts                                                 |
| enter   | undefined | Animation value animates from `from` phase to `enter` phase when component mounts                      |
| exit    | undefined | Animation value animates from `enter` phase to `exit` phase when state is false and component unmounts |
| config? | undefined | Animation configuration object                                                                         |

`config` object is animation configuration object with following properties:

| Options        | Default   | Description                                                                                                    |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| animationType  | "ease"    | Default spring type animation                                                                                  |
| mass           | 1         | Spring mass                                                                                                    |
| friction       | 26        | Spring friction                                                                                                |
| tension        | 170       | Spring energy                                                                                                  |
| immediate      | false     | If true, the animation is not applied rather updates are immediate.                                            |
| duration       | undefined | How long the animation should last, if > than 0 switch to a duration-based animation instead of spring physics |
| easing         | t => t    | Linear by default, you can use Easing module.                                                                  |
| onAnimationEnd | undefined | Function called after animation is completed.                                                                  |
| listener       | undefined | Function called every time the value is updated.                                                               |

## Returns

It returns a function which takes a callback function with arguments: Animated Value as first argument and boolean defining current state as second argument.

```jsx
const mountedFunction = useMountedValue(boolean, {
  from: 0,
  enter: 1,
  exit: 0,
});
```

## Example

In the below example, `open` function receives a callback that receives two arguments: the Animated Value and a boolean respectively. The first argument, Animated Value animates from `from = 0` to `enter = 1` when the visible is true and `enter = 1` to `exit = 0` when visible is false. And the second argument, boolean dinamically determines whether the component is mounted or not after animation. `AnimatedBlock` HOC is used to read animated values.

```jsx
import { useState } from 'react';
import { useMountedValue } from 'react-ui-animate';

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
                backgroundColor: '#3399ff',
                opacity: animation.value,
              }}
            />
          )
      )}

      <button onClick={() => setVisible((prev) => !prev)}>CLICK ME</button>
    </div>
  );
}
```
