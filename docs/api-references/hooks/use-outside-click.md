---
sidebar_position: 3
id: use-outside-value
title: useOutsideClick
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

This hook provides a way to handle clicks outside of any element.

## Arguments

#### `elementRef` [ HTMLElement ]

First argument is an elementRef created using `useRef` hook.

#### `callback` [ function ]

Second argument is a callback function with Mouse Event as its first argument and it is called whenever we click outside of the referenced element.

#### `deps` [ array ]

Optional array of values which re-initiates the callback function when changed.

## Returns

Void

## Example

In the below example, we create a `<div />` element, create a reference to that element and used `useOutsideClick` hook to determine whether we clicked outside the referenced element.

```jsx
import React from 'react';
import { useOutsideClick } from 'react-ui-animate';

export default function () {
  const elemRef = React.useRef(null);

  useOutsideClick(elemRef, function () {
    console.log('Clicked outside the box');
  });

  return (
    <div
      ref={elemRef}
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#ff0000',
      }}
    />
  );
}
```
