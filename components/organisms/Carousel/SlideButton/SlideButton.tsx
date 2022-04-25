import {
  Container,
  HoverAnimationCircle,
  LeftArrow,
  LeftMobileArrow,
  MobileContainer,
  RightArrow,
  RightMobileArrow,
} from "./styles";
import {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { ContainerAnimVariant } from "./animation-variants";

type Variant = "right" | "left" | "mobileLeft" | "mobileRight";

interface SlideButtonProps {
  className?: string;
  variant?: Variant;
  strokeWidth?: number;
  onClick?: any;
  dataTestId?: string;
}

export default function SlideButton({
  variant = "right",
  strokeWidth = 1,
  className,
  onClick = () => {},
  dataTestId = "",
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

  if (variant !== "left" && variant !== "right") {
    return (
      <MobileContainer
        onClick={onClick}
        data-testid={dataTestId}
        className={className}
      >
        {variant === "mobileLeft" && <LeftMobileArrow />}
        {variant === "mobileRight" && <RightMobileArrow />}
      </MobileContainer>
    );
  }

  return (
    <Container
      variants={ContainerAnimVariant}
      initial="shrink"
      animate={showCircleAnim ? "expand" : "shrink"}
      ref={containerRef}
      className={className}
      onMouseEnter={() => setShowCircleAnim(true)}
      onMouseLeave={() => setShowCircleAnim(false)}
      onClick={onClick}
      data-testid={dataTestId}
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
