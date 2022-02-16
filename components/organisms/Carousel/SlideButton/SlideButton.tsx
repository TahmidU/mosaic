import {
  Container,
  HoverAnimationCircle,
  LeftArrow,
  RightArrow,
} from "./styles";
import { ReactElement, useLayoutEffect, useRef, useState } from "react";

import { ContainerAnimVariant } from "./animation-variants";

type Variant = "right" | "left";

interface SlideButtonProps {
  className?: string;
  variant?: Variant;
}

export default function SlideButton({
  variant = "right",
  className,
}: SlideButtonProps): ReactElement {
  const [showCircleAnim, setShowCircleAnim] = useState(false);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef && containerRef.current) {
      setContainerSize({
        width: Number(
          window.getComputedStyle(containerRef.current)?.width.split("p")[0]
        ),
        height: Number(
          window.getComputedStyle(containerRef.current)?.height.split("p")[0]
        ),
      });
    }
  }, [containerRef]);

  return (
    <Container
      variants={ContainerAnimVariant}
      initial="shrink"
      animate={showCircleAnim ? "expand" : "shrink"}
      ref={containerRef}
      className={className}
      onMouseEnter={() => setShowCircleAnim(true)}
      onMouseLeave={() => setShowCircleAnim(false)}
    >
      {variant === "left" && <LeftArrow />}
      {variant === "right" && <RightArrow />}
      <HoverAnimationCircle
        radius={containerSize.width}
        width={containerSize.width}
        height={containerSize.height}
        strokeWidth={1}
        show={showCircleAnim}
      />
    </Container>
  );
}
