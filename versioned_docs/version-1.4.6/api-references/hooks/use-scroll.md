---
sidebar_position: 6
id: use-scroll
title: useScroll
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

This hook provides a way to handle scroll event in any `HTMLElement` or `window`.

## Arguments

#### `callback` [ function ]

First argument is a callback function with `event` object as its first argument which is called initially and is called on every scroll.

Here are the properties of an `event` object argument of a callback function:

| Property    | Description                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| isScrolling | `Boolean` indicating the current status of scrolling.                                                           |
| scrollX     | Horizontal scroll amount.                                                                                       |
| scrollY     | Vertical scroll amount.                                                                                         |
| velocityX   | Velocity along horizontal scrolling direction.                                                                  |
| velocityY   | Velocity along vertical scrolling direction.                                                                    |
| directionX  | Indicates the current horizontal scrolling direction. For positive +1, for negative -1 and for not scrolling 0. |
| directionY  | Indicates the current vertical scrolling direction. For positive +1, for negative -1 and for not scrolling 0.   |

## Returns

It returns a function which can be spread on any `HTMLELement`. If not bound to any `HTMLElement`, event is attached to `window`.

Define a hook for window:

```js
useScroll((event) => doSomething(event));
```

Or you could bind it in any `HTMLElement`:

```js
const bind = useScroll((event) => doSomething(event));
```

Apply it on a `HTMLELement`:

```jsx
<div {...bind()}>...</div>
```

## Example

In the below example, `useScroll` hook is used to get `scrollY`.

```jsx
import { useScroll } from "react-ui-animate";

export default function() {

  const bind = useScroll(
    function ({ scrollY }) {
        console.log("Vertical scrolling amount", scrollY);
    },
  );

  return (...);
}
```
