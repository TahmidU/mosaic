import {
  Container,
  HoverAnimationCircle,
  LeftArrow,
  RightArrow,
} from "./styles";
import {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { ContainerAnimVariant } from "./animation-variants";

type Variant = "right" | "left";

interface SlideButtonProps {
  className?: string;
  variant?: Variant;
  strokeWidth?: number;
}

export default function SlideButton({
  variant = "right",
  strokeWidth = 1,
  className,
}: SlideButtonProps): ReactElement {
  const [showCircleAnim, setShowCircleAnim] = useState(false);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  function handleProgressiveCircleAnim(ref: HTMLDivElement) {
    ref &&
      setContainerSize({
        width: Number(window.getComputedStyle(ref).width.split("p")[0]),
        height: Number(window.getComputedStyle(ref).height.split("p")[0]),
      });
  }

  useEffect(() => {
    containerRef &&
      containerRef.current &&
      handleProgressiveCircleAnim(containerRef.current);

    window.addEventListener("resize", () => {
      containerRef &&
        containerRef.current &&
        handleProgressiveCircleAnim(containerRef.current);
    });

    return window.removeEventListener("resize", () => {
      containerRef &&
        containerRef.current &&
        handleProgressiveCircleAnim(containerRef.current);
    });
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
        strokeWidth={strokeWidth}
        show={showCircleAnim}
        fillColourFrom="#FFFFFF"
        fillColourTo="#FFFFFF"
      />
    </Container>
  );
}
