---
sidebar_position: 2
id: b-interpolate
title: bInterpolate
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

`bInterpolate` maps an animated value from input range `[0, 1]` to output range.

## Arguments

#### `value` [ number | AnimatedValue ]

Value from within input range [0, 1] that should be map into value from output range.

#### `outputMin` [ number | string ]

Minimum output value.

#### `outputMax` [ number | string ]

Maximun output value.

#### `extrapolateConfig` [ object ]

Extrapolation config same as `interpolate`.

## Returns

`bInterpolate` returns the value after interpolation from within the output range.

## Example

A basic mapping to convert a `0-1` range to a `0-100` range would be:

```js
bInterpolate(value, 0, 100);
```
