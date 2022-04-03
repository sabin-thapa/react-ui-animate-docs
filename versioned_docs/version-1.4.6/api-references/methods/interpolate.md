---
sidebar_position: 1
id: interpolate
title: interpolate
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

An interpolation maps input ranges to output ranges, typically using a linear interpolation but also supports easing functions. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value. `interpolate` function allows the Animated Value to map from input ranges to output ranges.

## Arguments

#### `value` [ number | AnimatedValue ]

Value from within input range that should be map into value from output range.

#### `inputRange` [ number[] ]

An array of `number` that contains points that indicate the range of the input value. Values in the input range should be increasing.

#### `outputRange` [ number[] | string[] ]

An array of `number` that contains points that indicate the range of the output value. It should have at least the same number of points as the input range.

#### `extrapolateConfig` [ object ]

Optional config object where you can define the extrapolation using these three options by setting the values to either `extend` | `identity` | `clamp`.

| Option           | Description                                                               |
| ---------------- | ------------------------------------------------------------------------- |
| extrapolate      | Option to set the extrapolation beyond the output range on left or right. |
| extrapolateLeft  | Option to set the extrapolation beyond left of output range.              |
| extrapolateRight | Option to set the extrapolation beyond left of output range.              |

## Returns

`interpolate` returns the value after interpolation from within the output range.

## Example

A basic mapping to convert a `0-1` range to a `0-100` range would be:

```js
interpolate(value, [0, 1], [0, 100]);
```
