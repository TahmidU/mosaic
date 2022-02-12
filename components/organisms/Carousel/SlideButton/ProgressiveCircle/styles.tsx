import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.svg`
  position: absolute;
  width: 100px;
  height: auto;
  transform: rotate(-90deg);
  overflow: visible;
  top: 100px;
  right: 50%;
`;
Container.displayName = "Container";

// stroke-dasharray: circumference 2 * pi * radius
export const AnimatedCircle = styled(motion.circle)`
  position: absolute;
  fill: transparent;
  stroke: ${({ theme }) => theme.almostBlack};
  stroke-width: 10;
  stroke-dasharray: 0;
  stroke-dashoffset: 0;
  stroke-linecap: round;
`;
AnimatedCircle.displayName = "AnimatedCircle";
