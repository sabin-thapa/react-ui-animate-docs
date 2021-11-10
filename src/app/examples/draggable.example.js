import {
  useDrag,
  useAnimatedValue,
  AnimatedBlock,
  interpolate,
  bin,
} from "react-ui-animate";

export const Draggable = () => {
  const left = useAnimatedValue(0, { animationType: "elastic" });
  const top = useAnimatedValue(0, { animationType: "elastic" });
  const isDown = useAnimatedValue(0, { animationType: "elastic" });

  const bind = useDrag(({ down, movementX, movementY }) => {
    isDown.value = bin(down);
    left.value = { toValue: down ? movementX : 0, immediate: down };
    top.value = { toValue: down ? movementY : 0, immediate: down };
  });

  return (
    <div
      style={{
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3399ff22",
        borderRadius: 4,
        marginBottom: 30,
      }}
    >
      <AnimatedBlock
        {...bind()}
        style={{
          width: 100,
          height: 80,
          backgroundColor: "#3399ff",
          x: left.value,
          y: top.value,
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          userSelect: "none",
          cursor: "grabbing",
          position: "absolute",
          zIndex: 1,
          scale: interpolate(isDown.value, [0, 1], [1, 1.5]),
          boxShadow: interpolate(
            isDown.value,
            [0, 1],
            [
              "0px 0px 10px rgba(0, 0, 0, 0.0)",
              "0px 5px 10px rgba(0, 0, 0, 0.2)",
            ]
          ),
        }}
      >
        DRAG ME
      </AnimatedBlock>
    </div>
  );
};
