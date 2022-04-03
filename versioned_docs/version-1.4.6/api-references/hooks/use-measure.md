---
sidebar_position: 5
id: use-measure
title: useMeasure
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

This hook provides a way to measure any `HTMLElement`. It handles the resize of the window.

## Arguments

#### `callback` [ function ]

First argument is a callback function with `event` object with measurements as its first argument which is called initially and is called on every resize of a window.

Here are the properties of an `event` object argument of a callback function:

| Property | Description                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------- |
| left     | Left position of a `HTMLELement`. It accounts the horizontal page offset value.                         |
| top      | Top position of a `HTMLELement`. It accounts the vertical page offset value.                            |
| vLeft    | Left position of a `HTMLELement` relative to viewport. It doesn't account horizontal page offset value. |
| vTop     | Top position of a `HTMLELement` relative to viewport. It doesn't account vertical page offset value.    |
| width    | Width of a `HTMLELement`                                                                                |
| height   | Height of a `HTMLElement`                                                                               |

#### `deps` [ array ]

Optional array of values which re-initiates the callback function when changed.

## Returns

It returns a function which is spread on any `HTMLELement`.

Define a bind function:

```js
const bind = useMeasure(event => doSomething(event));}
```

Apply it on a HTMLELement:

```jsx
<div {...bind()} style={{ width: 100, height: 100, backgroundColor: 'red' }} />
```

## Example

In the below example, `useMeasure` hook is used to measure the widths of a multiple mapped elements.

Multiple `HTMLElements` can be measured by passing an argument in the returned function while spreading. All the measurements are in array with same index as mapped elements.

```jsx
import { useMeasure } from 'react-ui-animate';

export default function () {
  const bind = useMeasure(function ({ width }) {
    console.log('width', width); // Array of widths
  });

  return (
    <>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            {...bind(i)} // passed with index
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#3399ff',
            }}
          />
        ))}
    </>
  );
}
```
