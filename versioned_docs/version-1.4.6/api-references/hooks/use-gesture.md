---
sidebar_position: 10
id: use-gesture
title: useGesture
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

This hook provides a way to handle multiple gestures on a single `HTMLElement`.

## Arguments

#### `config` [ object ]

The first arugment of `useGesture` hook is an object which has following properties:

| Property    | Description                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| onDrag      | Callback fuction equivalent to `useDrag` callback with equivalent event object.      |
| onWheel     | Callback fuction equivalent to `useWheel` callback with equivalent event object.     |
| onScroll    | Callback fuction equivalent to `useScroll` callback with equivalent event object.    |
| onMouseMove | Callback fuction equivalent to `useMouseMove` callback with equivalent event object. |

## Returns

It returns a function which is spread on any `HTMLELement`.

## Example

In the below example, `useGesture` hook for drag and wheel:

```jsx
import { useGesture, AnimatedBlock } from "react-ui-animate";

export default function() {
  const bind = useGesture({
    onDrag: function({ movementX }) { ... },
    onWheel: function({ deltaX }) { ... },
  });

  return (
    <AnimatedBlock
        {...bind()} // bind here
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#3399ff",
        }}
    />
  );
}
```
