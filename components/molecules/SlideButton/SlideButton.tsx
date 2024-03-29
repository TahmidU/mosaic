import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  CircleSimpleContainer,
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

import { ContainerAnimVariant } from "./animationVariants";

type Variant =
  | "right"
  | "left"
  | "simpleLeft"
  | "simpleRight"
  | "transparentLeft"
  | "transparentRight"
  | "circleSimpleLeft"
  | "circleSimpleRight";

interface ISlideButtonProps {
  className?: string;
  variant?: Variant;
  strokeWidth?: number;
  onClick?: any;
  testId?: string;
}

export default function SlideButton({
  variant = "right",
  strokeWidth = 1,
  className,
  onClick = () => {},
  testId = "SlideButton",
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
        data-testid={testId}
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
        data-testid={testId}
      >
        {variant === "transparentLeft" && <LeftArrow />}
        {variant === "transparentRight" && <RightArrow />}
      </TransparentContainer>
    );
  }

  if (variant === "circleSimpleLeft" || variant === "circleSimpleRight") {
    return (
      <CircleSimpleContainer
        className={className}
        onClick={onClick}
        data-testid={testId}
      >
        {variant === "circleSimpleLeft" && <AiOutlineLeft />}
        {variant === "circleSimpleRight" && <AiOutlineRight />}
      </CircleSimpleContainer>
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
      data-testid={testId}
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
