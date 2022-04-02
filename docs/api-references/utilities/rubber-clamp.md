---
sidebar_position: 2
id: rubber-clamp
title: rubberClamp
---

:::info

Due to time constraint, we couldn't complete this page. We will complete as soon as possible.

:::

`rubberClamp` calculates the rubberbanding effect from a given position value, two bounds min, max and an elasticity constant.

```js
function rubberClamp(value: number, lowerbound: number, upperbound: number, constant: number = 0.15)
```

## Example

The returned value is clamped between lowerbound 10 and upperbound 100 and rubberbanding effect is calculated below 10 and above 100.

```js
const x = rubberClamp(value, 10, 100);
```
