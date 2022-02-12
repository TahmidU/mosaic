import { AnimatedCircle } from "./styles";
import { ReactElement } from "react";

export default function ProgressiveCircle(): ReactElement {
  return (
    <svg
      viewBox="0 0 100 100"
      width={100}
      height={100}
      style={{
        position: "absolute",
        transform: "rotate(-90deg)",
        overflow: "visible",
        marginLeft: -100,
        top: "100px",
        right: "50%",
      }}
    >
      <AnimatedCircle
        cx="50"
        cy="50"
        r={100}
        strokeWidth={1}
        stroke="black"
        fill="transparent"
        strokeDashoffset={Math.ceil(2 * Math.PI * 100)}
        strokeDasharray={Math.abs(
          (Math.ceil(2 * Math.PI * 100) / 100) * (80 - 100)
        )}
      />
    </svg>
  );
}
