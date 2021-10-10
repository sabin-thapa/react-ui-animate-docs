import { useRef } from "react";
import {
  AnimatedBlock,
  useAnimatedValue,
  interpolate,
  useDrag,
  clamp,
} from "react-ui-animate";

export function BalloonSlider() {
  const offsetLeft = useRef(0);
  const left = useAnimatedValue(0, { immediate: true });
  const isDown = useAnimatedValue(0);
  const balloonLeft = useAnimatedValue(left.value);
  const velocity = useAnimatedValue(0);

  const bind = useDrag(({ movementX, down, velocityX }) => {
    isDown.value = down ? 1 : 0;
    velocity.value = velocityX;
    const ballX = clamp(movementX + offsetLeft.current, 0, 290);
    if (down) {
      left.value = ballX;
    } else {
      offsetLeft.current = ballX;
    }
  }, []);

  return (
    <div style={{ width: 300, position: "relative" }}>
      <AnimatedBlock
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "5px solid #b55ae6",
          position: "absolute",
          left: balloonLeft.value,
          translateX: -20,
          top: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          translateY: interpolate(isDown.value, [0, 1], [80, 0]),
          scale: isDown.value,
          opacity: isDown.value,
          rotate: interpolate(velocity.value, [-2, 2], [30, -30]),
        }}
      >
        {left.value}
      </AnimatedBlock>

      <div style={{ position: "relative", height: 20, marginTop: 100 }}>
        <AnimatedBlock
          {...bind()}
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "5px solid #3399ff",
            backgroundColor: "#fff",
            cursor: "grab",
            position: "absolute",
            top: 0,
            left: left.value,
            zIndex: 2,
            scale: interpolate(isDown.value, [0, 1], [1, 1.3]),
          }}
        />

        <div
          style={{
            width: 300,
            height: 4,
            backgroundColor: "#e1e1e1",
            position: "absolute",
            bottom: 8,
            left: 0,
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
}
