import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.svg<{
  width: number;
  height: number;
}>`
  position: absolute;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  transform: rotate(-90deg);
  overflow: visible;
  top: 100px;
  right: 50%;
`;
Container.displayName = "Container";

// stroke-dasharray: circumference 2 * pi * radius
export const AnimatedCircle = styled(motion.circle)<{
  strokeWidth: number;
  r: number;
}>`
  position: absolute;
  fill: transparent;
  stroke: ${({ theme }) => theme.almostBlack};
  stroke-width: ${({ strokeWidth }) => strokeWidth};
  stroke-dasharray: ${({ r }) => Math.ceil(2 * Math.PI * r)};
  stroke-linecap: round;
`;
AnimatedCircle.displayName = "AnimatedCircle";
