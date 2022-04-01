---
sidebar_position: 4
id: use-window-dimension
title: useWindowDimension
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

This hook provides a way to measure the `window/document`. It handles the resize of the window.

## Arguments

#### `callback` [ function ]

First argument is a callback function with `event` object as its first argument which is called initially and is called on every resize of a window.

Here are the properties of an `event` object argument of a callback function:

| Property    | Description                                    |
| ----------- | ---------------------------------------------- |
| width       | Width of a `documentElement`                   |
| height      | Height of a `documentElement`                  |
| innerWidth  | Width of a window. Gives `window.innerWidth `  |
| innerHeight | Height of a window. Gives `window.innerHeight` |

#### `deps` [ array ]

Optional array of values which re-initiates the callback function when changed.

## Returns

Void

## Example

In the below example, `useWindowDimension` hook is used to measure the innerWidth of a window.

```jsx
import { useWindowDimension } from "react-ui-animate";

export default function() {

  useWindowDimension(
    function ({ innerWidth }) {
        console.log("window inner width", innerWidth);
    },
  );

  return (...);
}
```
