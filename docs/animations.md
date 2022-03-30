---
sidebar_position: 4
id: animations
title: Animations
---

Animations are very important to create a great user experience. Objects in motion have momentum and rarely come to stop immediately. To convey physically believable motion, we need physics based animations. The library provides a way to implement any physically behaving animations.

In the previous article about `Animated Values`, we learned about `useAnimatedValue` hook. We also learned how to perform animated transitions by assigning values to a Animated Values. This, however, is not the only way how animations can be implemented. React UI Animate provides a number of ways how animations can be customized and implemented. In this article, we explore different ways to implement animated transitions and how customizations can be done in an animation.

## Animated Value Animated Transition

React UI Animate provides one of the easiest way to implement animated transitions with `useAnimatedValue` hook. We implemented a simple opacity toggle animation by simply assigning and reading opacity node. Let us recall the example from previous article, where we'd update an Animated Value when we cliked a button.

```jsx
import { AnimatedBlock, useAnimatedValue } from 'react-ui-animate';

export default function () {
  const opacity = useAnimatedValue(0); // It initializes opacity object with value 0.

  return (
    <div>
      {/* AnimatedBlock component can read useAnimatedValue() */}
      <AnimatedBlock
        style={{
          opacity: opacity.value, // using opacity with value property
          width: 100,
          padding: 20,
          background: '#39F',
        }}
      >
        ANIMATED
      </AnimatedBlock>

      {/* Assigning value to 1 auto animates from initialized value 0 to 1 smoothly */}
      <button onClick={() => (opacity.value = 1)}>Animate Me</button>
    </div>
  );
}
```

In the above example when we click button, opacity is animated from 0 to 1 smoothly. As you can notice `AnimatedBlock` is used instead of any other HTML Element because the Animated Values cannot be read by HTML Elements, we need special type of Component that can read it. Here, we have `AnimatedBlock` HOC which is a div element and also can read Animated Values.

In React UI Animate, such Animated Value can accept primitives like number, boolean, string or Animated Value itself. When we initialize a `useAnimatedValue`, with any primitives, it must be updated / assigned with same primitive type. You also can initiate the `useAnimatedValue` with conditional operation. For example:

```jsx
import { useState } from "react";
import { useAnimatedValue } from "react-ui-animate";

export default function () {
  const [open, setOpen] = useState(false);
  const opacity = useAnimatedValue(open ? 1 : 0); // You can also initialize with a conditional operator

  return (
    ...
  );
}
```

In above example, you could initialize a value with a conditional operator. You dont even need to assign value for update. Changing state `open` with `setOpen` can conditionally update the Animated Value with animated transitions.

Strings in Animated Value are also allowed which is benificial for string valued style properties and svg paths. When strings are updated with new string, the `useAnimatedValue` determines whether it can be interpolated or not. If it can be interpolated, it assigns the animated transitions and if not, it instantly updates to new one. Let us take an example:

```jsx
import { useAnimatedValue } from "react-ui-animate";

export default function () {
  const position = useAnimatedValue("relative"); // assigning strings

  return (
    ...
    <button onClick={() => (position.value = "fixed")}>Toggle</button>
  );
}
```

## Configuring Animations

Basically, React UI Animate provides two types of animation configurations: `Timing` and `Spring` based animations. `Timing` based animations depends upon duration while Spring based animations are naturally balanced and depends upon properties of an object. By default, Animated Values in React UI Animate implements `Spring` based animation. `useAnimatedValue` hook accepts a second optional argument which is an object different animation configurations. To simply modify the nature of spring animation we can define `animationType` property.

`animationType` property accepts a string of values like ease, elastic, wooble, etc. Default value is `ease`.

```jsx
const opacity = useAnimatedValue(0, { animationType: 'elastic' });
```

Aditionally, You can also define custom spring configurations by modifying properties: `mass`, `friction` and `tension`

```jsx
const opacity = useAnimatedValue(0, { mass: 1, friction: 10, tension: 200 });
```

In the above example, we defined `Spring` based animations which is naturally balanced. But, In some cases, `Timing` based animation is needed. The `Timing` based animations are fully dependent upon durations. We have to define the amount of duration when the animation is finished. The configuration object accepts a `duration` property where the value is the number of milliseconds the animation should be completed.

```jsx
const opacity = useAnimatedValue(0, { duration: 1000 });
```

In the above example, `duration` is set to 1000 milliseconds i.e. 1 second. When animation value is updated it will complete the animation to in exactly 1 second. These animations are not naturally balanced like Spring based animations because it is linearly interpolated. Linear animations are boring and is not possible in real life. We can define some easing functions to modify the nature of Time based animations. To do so, we should define `easing` property.

```jsx
const opacity = useAnimatedValue(0, {
  duration: 1000,
  easing: Easing.inOut(Easing.ease),
});
```

In the above example, `duration` is set to 1000 milliseconds and `easing` is set to `Easing.inOut(Easing.ease)` which defines an object moves slowly accelerating to speed and slowly coming to rest. You can find a visualization of some common easing functions at http://easings.net/. Bezier curves also can be implemented.

```jsx
const opacity = useAnimatedValue(0, {
  duration: 1000,
  easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
});
```

`Easing` module also has a `bezier` function which provides a cubic bezier curve, equivalent to CSS Transitions' `transition-timing-function`. A useful tool to visualize cubic bezier curves can be found at http://cubic-bezier.com/.

## Interpolations

Each property can be run through an interpolation first. An interpolation maps input ranges to output ranges, typically using a linear interpolation but also supports easing functions. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value. `interpolate` function allows the Animated Value to map from input ranges to output ranges.

A basic mapping to convert a `0-1` range to a `0-100` range would be:

```jsx
interpolate(value, [0, 1], [0, 100]);
```

For example, we want to move an element from left 0px to 500px when the opacity changes from `0 to 1`.

```jsx
import { useAnimatedValue, AnimatedBlock, interpolate } from 'react-ui-animate';

export default function () {
  const opacity = useAnimatedValue(0);

  return (
    <>
      <AnimatedBlock
        style={{
          width: 100,
          height: 100,
          opacity: opacity.value,
          backgroundColor: 'red',
          position: 'absolute',
          left: interpolate(opacity.value, [0, 1], [0, 500]),
        }}
      />

      <button onClick={() => (opacity.value = 1)}>Animate Me</button>
    </>
  );
}
```

`interpolate` accepts an animated value as its first argument, array of numbers as its second argument namely input range and array of numbers with same length as second argument namely output range. It also supports multiple range segments as well, which is very much useful for different scenarios like dead zones and other handly tricks.

```jsx
interpolate(value, [0, 1], ['red', 'black']);
```

The default behavior of `interpolate` is that it will extrapolate the curve beyond the ranges given. You can clamp the value output value by passing extrapolation configuration object as 4th argument of `interpolate` function. You can set the extrapolation by setting the `extrapolate`, `extrapolateLeft`, or `extrapolateRight` options. The default value is `extend` but you can use `clamp` to prevent the output value from exceeding outputRange.
