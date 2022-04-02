---
sidebar_position: 9
id: use-wheel
title: useWheel
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

This hook provides a way to implement wheel event in any `HTMLElement`.

## Arguments

#### `callback` [ function ]

First argument is a callback function with wheel `event` object as its first argument which is called on every wheel event.

Here are the properties of an `event` object argument of a callback function:

| Property   | Description                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------- |
| target     | Current target element to which the wheel event bound to.                                                         |
| deltaX     | Wheel delta amount along horizontal axis.                                                                         |
| deltaY     | Wheel delta amount along vertical axis.                                                                           |
| movementX  | Amount of movement in x-axis. Always starts from 0 while wheeling.                                                |
| movementY  | Amount of movement in y-axis. Always starts from 0 while wheeling.                                                |
| offsetX    | Amount of movement with offset in x-axis. It saves the previous movement and wheel starts from previous position. |
| offsetY    | Amount of movement with offset in y-axis. It saves the previous movement and wheel starts from previous position. |
| velocityX  | Velocity along horizontal wheel direction.                                                                        |
| velocityY  | Velocity along vertical wheel direction.                                                                          |
| directionX | Indicates the current horizontal wheel direction. For positive +1, for negative -1 and for not wheeling 0.        |
| directionY | Indicates the current vertical wheel direction. For positive +1, for negative -1 and for not wheeling 0.          |

## Returns

It returns a function which is spread on any `HTMLELement`.

Define a bind function:

```js
const bind = useWheel((event) => doSomething(event));
```

Apply it on a `HTMLELement`:

```jsx
<div {...bind()} style={{ width: 100, height: 100, backgroundColor: 'red' }} />
```

## Example

In the below example, `useWheel` hook is used to capture wheel event on `HTMLElement`.

```jsx
import { useAnimatedValue, useWheel, AnimatedBlock } from 'react-ui-animate';

export default function () {
  const left = useAnimatedValue(0);

  const bind = useWheel(function ({ movementX, isWheeling }) {
    left.value = isWheeling ? movementX : 0;
  });

  return (
    <AnimatedBlock
      {...bind()} // bind here
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#3399ff',
        position: 'absolute',
        left: left.value,
        top: 0,
      }}
    />
  );
}
```
