import {
  Container,
  HoverAnimationCircle,
  LeftArrow,
  LeftMobileArrow,
  MobileContainer,
  RightArrow,
  RightMobileArrow,
  TransparentContainer,
} from "./styles";
import { ReactElement, useEffect, useRef, useState } from "react";

import { ContainerAnimVariant } from "./animation-variants";

type Variant =
  | "right"
  | "left"
  | "simpleLeft"
  | "simpleRight"
  | "transparentLeft"
  | "transparentRight";

interface ISlideButtonProps {
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
}: ISlideButtonProps): ReactElement {
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

  if (variant === "simpleLeft" || variant === "simpleRight") {
    return (
      <MobileContainer
        onClick={onClick}
        data-testid={dataTestId}
        className={className}
      >
        {variant === "simpleLeft" && <LeftMobileArrow />}
        {variant === "simpleRight" && <RightMobileArrow />}
      </MobileContainer>
    );
  }

  if (variant === "transparentLeft" || variant === "transparentRight") {
    return (
      <TransparentContainer
        className={className}
        onClick={onClick}
        data-testid={dataTestId}
      >
        {variant === "transparentLeft" && <LeftArrow />}
        {variant === "transparentRight" && <RightArrow />}
      </TransparentContainer>
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
