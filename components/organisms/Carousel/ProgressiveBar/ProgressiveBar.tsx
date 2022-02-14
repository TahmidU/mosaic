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
  trigger = () => {
    console.log("Done!");
  },
  pause = false,
}: ProgressiveBarProps): ReactElement {
  const barControls = useAnimation();

  useEffect(() => {
    if (!pause) {
      barControls.set({
        width: "0%",
      });
      barControls.start(() => ({
        width: "100%",
      }));
    } else {
      barControls.stop();
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
