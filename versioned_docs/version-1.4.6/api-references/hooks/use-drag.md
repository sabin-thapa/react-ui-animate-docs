---
sidebar_position: 8
id: use-drag
title: useDrag
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

This hook provides a way to make any `HTMLElement` draggable.

## Arguments

#### `callback` [ function ]

First argument is a callback function with a drag `event` object as its first argument which is called on every drag event.

Here are the properties of an `event` object argument of a callback function:

| Property   | Description                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| args       | `Array` of argument passed in bind function.                                                                     |
| down       | `Boolean` indicating the mouse click state.                                                                      |
| movementX  | Amount of movement in x-axis. Always starts from 0 while dragging.                                               |
| movementY  | Amount of movement in y-axis. Always starts from 0 while dragging.                                               |
| offsetX    | Amount of movement with offset in x-axis. It saves the previous movement and drag starts from previous position. |
| offsetY    | Amount of movement with offset in y-axis. It saves the previous movement and drag starts from previous position. |
| velocityX  | Velocity along horizontal drag direction.                                                                        |
| velocityY  | Velocity along vertical drag direction.                                                                          |
| directionX | Indicates the current horizontal drag direction. For positive +1, for negative -1 and for not dragging 0.        |
| directionY | Indicates the current vertical drag direction. For positive +1, for negative -1 and for not dragging 0.          |
| distanceX  | Same as movementX but always positive.                                                                           |
| distanceY  | Same as movementY but always positive.                                                                           |
| cancel     | Function to cancel the current drag gesture.                                                                     |

#### `config` [ object ]

The second argument is an optional object which is called every time on mouse / pointer down event.

| Options | Default   | Description                                                                                                              |
| ------- | --------- | ------------------------------------------------------------------------------------------------------------------------ |
| initial | undefined | Function called initially on mouse / pointer down. It must return an object with `movementX` and `movementY` properties. |

## Returns

It returns a function which is spread on any `HTMLELement`.

Define a bind function:

```js
const bind = useDrag((event) => doSomething(event));
```

Apply it on a `HTMLELement`:

```jsx
<div {...bind()} style={{ width: 100, height: 100, backgroundColor: 'red' }} />
```

## Example

In the below example, `useDrag` hook is used to make a `HTMLElement` draggable.

```jsx
import { useAnimatedValue, useDrag, AnimatedBlock } from 'react-ui-animate';

export default function () {
  const left = useAnimatedValue(0);

  const bind = useDrag(function ({ offsetX }) {
    left.value = offsetX;
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
