---
sidebar_position: 7
id: use-mouse-move
title: useMouseMove
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

This hook provides a way to handle mouse move event on a `HTMLElement` or `window`.

## Arguments

#### `callback` [ function ]

First argument is a callback function with an `event` object as its first argument which is called on every mouse move.

Here are the properties of an `event` object argument of a callback function:

| Property   | Description                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------- |
| target     | `event.target` element the mouse move is hovered upon.                                                            |
| isMoving   | `Boolean` indicating the current status of mouse movement.                                                        |
| mouseX     | Horizontal mouse movement amount.                                                                                 |
| mouseY     | Vertical mouse movement amount.                                                                                   |
| velocityX  | Velocity along horizontal mouse movement direction.                                                               |
| velocityY  | Velocity along vertical mouse movement direction.                                                                 |
| directionX | Indicates the current horizontal mouse movement direction. For positive +1, for negative -1 and for not moving 0. |
| directionY | Indicates the current vertical mouse movement direction. For positive +1, for negative -1 and for not moving 0.   |

## Returns

It returns a function which can be spread on any `HTMLELement`. If not bound to any `HTMLElement`, event is attached to `window`.

Define a hook for window:

```js
useMouseMove((event) => doSomething(event));
```

Or you could bind it in any `HTMLElement`:

```js
const bind = useMouseMove((event) => doSomething(event));
```

Apply it on a `HTMLELement`:

```jsx
<div {...bind()}>...</div>
```

## Example

In the below example, `useMouseMove` hook is used to get `mouseX` and `mouseY`.

```jsx
import { useMouseMove } from "react-ui-animate";

export default function() {

  const bind = useMouseMove(
    function ({ mouseX, mouseY }) {
        console.log("XY", mouseX, mouseY);
    },
  );

  return (...);
}
```
