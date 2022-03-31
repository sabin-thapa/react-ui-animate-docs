---
sidebar_position: 5
id: gestures
title: Gestures
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

Gestures in React UI Animate is a set of gestures that let you bind mouse and touch events to any node. With the data you receive, it becomes easy to set up complex gestures like dragging and scrolling with a few lines of code.

## Available gesture hooks

Currently, the library provides the following list of gesture hooks. All these hooks share similar API pattern:

- `useScroll` for scroll gesture.
- `useMouseMove` for mouse move gesture.
- `useDrag` for drag gesture.
- `useWheel` for mouse wheel gesture.
- `useGesture` for multiple gestures.

## Binding a gesture to a Node

Due to similar pattern of gesture hooks, it becomes quite easy to implement any gesture effortlessly. To bind a gesture to a node, the gesture hooks returns a function, which when called returns an object with event handlers. Let say we want a `<div />` to be draggable.

```jsx
import { useDrag } from 'react-ui-animate';

export default function () {
  const bind = useDrag((state) => doSomething(state));

  return (
    <div
      {...bind()}
      style={{
        width: 60,
        height: 60,
        backgroundColor: '#3399ff',
      }}
    />
  );
}
```

In the above example, a `<div />` receives an object with event handlers when you spread `...bind()`, you're actually adding onPointerDown, onMouseDown, and other event handlers. The `useDrag` hook accepts a callback function with state as a parameter. state is an object containing all attributes of the gesture. The `state` is passed to your handler every time the gesture updates.

To actually implement dragging of an element, we should be using it with Animated Value.

```jsx
import { useDrag, useAnimatedValue, AnimatedBlock } from 'react-ui-animate';

export default function () {
  const left = useAnimatedValue(0);

  const bind = useDrag(({ down, movementX }) => {
    left.value = down ? movementX : 0;
  });

  return (
    <AnimatedBlock
      {...bind()}
      style={{
        width: 60,
        height: 60,
        backgroundColor: '#3399ff',
        position: 'absolute',
        left: left.value,
      }}
    />
  );
}
```

In the above example, `left` is an animated value. The `state` object has `down` which represents the current state of a mouse click and `movementX` which represents the movement in x-axis always starting from 0.
