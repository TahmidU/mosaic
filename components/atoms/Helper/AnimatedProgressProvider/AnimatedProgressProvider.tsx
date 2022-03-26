import { ReactElement, useEffect, useState } from "react";

import { Animate } from "react-move";

interface AnimatedProgressProviderProps {
  valueStart?: number;
  valueEnd: number;
  duration: number;
  repeat?: boolean;
  easingFunction: any;
  children: any;
}

export default function AnimatedProgressProvider({
  valueStart = 0,
  valueEnd,
  duration,
  repeat = false,
  easingFunction,
  children,
}: AnimatedProgressProviderProps): ReactElement {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let interval: any = undefined;
    if (repeat) {
      interval = setInterval(() => {
        setIsAnimated((prev) => !prev);
      }, duration * 1000);
    } else {
      setIsAnimated((prev) => !prev);
    }

    return () => {
      interval && clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
}
