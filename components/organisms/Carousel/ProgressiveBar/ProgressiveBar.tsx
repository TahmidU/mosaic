import { ReactElement, useEffect } from "react";

import { Bar } from "./styles";
import { progressiveBarAnimVariant } from "./animation-variants";
import { useAnimation } from "framer-motion";

interface ProgressiveBarProps {
  duration?: number;
  trigger?: () => void;
  pause?: boolean;
}

export default function ProgressiveBar({
  duration = 3,
  trigger = () => {},
  pause = false,
}: ProgressiveBarProps): ReactElement {
  const barControls = useAnimation();

  useEffect(() => {
    if (!pause) {
      barControls.start(() => ({
        width: "100%",
      }));
    } else {
      barControls.stop();
      barControls.set({
        width: "0%",
      });
    }
  }, [pause]);

  return (
    <Bar
      initial="none"
      animate={barControls}
      variants={progressiveBarAnimVariant}
      transition={{
        ease: [1, 1, 1, 1],
        repeat: Infinity,
        duration: duration,
        onRepeat: trigger,
      }}
    />
  );
}
