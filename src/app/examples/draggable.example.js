import { useDrag, useAnimatedValue, AnimatedBlock } from "react-ui-animate";

export const Draggable = () => {
  const left = useAnimatedValue(0);

  const bind = useDrag(({ down, movementX }) => {
    left.value = down ? movementX : 0;
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
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          userSelect: "none",
          cursor: "grabbing",
        }}
      >
        DRAG ME
      </AnimatedBlock>
    </div>
  );
};
