import { useDrag, useAnimatedValue, AnimatedBlock } from "react-ui-animate";

export const Draggable = () => {
  const left = useAnimatedValue(0, { animationType: "elastic" });
  const top = useAnimatedValue(0, { animationType: "elastic" });

  const bind = useDrag(({ down, movementX, movementY }) => {
    left.value = down ? movementX : 0;
    top.value = down ? movementY : 0;

    left.immediate = down;
    top.immediate = down;
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
        }}
      >
        DRAG ME
      </AnimatedBlock>
    </div>
  );
};
