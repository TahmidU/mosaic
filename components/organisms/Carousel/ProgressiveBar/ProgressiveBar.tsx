import { ReactElement, useEffect } from "react";

import { Bar } from "./styles";
import { progressiveBarAnimVariant } from "./animation-variants";
import { useAnimation } from "framer-motion";

interface ProgressiveBarProps {
  duration?: number;
  trigger?: () => void;
  pause?: boolean;
  reset?: boolean;
  setResetToFalse?: () => void;
  className?: string;
}

export default function ProgressiveBar({
  duration = 3,
  trigger = () => {},
  pause = false,
  reset = false,
  setResetToFalse = () => {},
  className,
}: ProgressiveBarProps): ReactElement {
  const barControls = useAnimation();

  useEffect(() => {
    if (!pause) {
      barControls.start(() => progressiveBarAnimVariant.full);
    } else {
      barControls.stop();
      barControls.set(progressiveBarAnimVariant.none);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pause]);

  useEffect(() => {
    if (reset) {
      barControls.stop();
      barControls.set(progressiveBarAnimVariant.none);
      barControls.start(() => progressiveBarAnimVariant.full);
      setResetToFalse();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  return (
    <Bar
      className={className}
      initial="none"
      animate={barControls}
      variants={progressiveBarAnimVariant}
      transition={{
        ease: [1, 1, 1, 1],
        repeat: Infinity,
        duration: duration,
        onRepeat: () => {
          trigger();
        },
      }}
    />
  );
}
