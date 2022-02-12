import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  cursor: pointer;
  width: 100%;
  height: auto;
  position: relative;

  svg {
    position: absolute;
  }
`;
Container.displayName = "Container";

export const RightArrow = styled(BsArrowRight)`
  width: 26px;
  max-width: 117px;
  height: auto;
`;
RightArrow.displayName = "RightArrow";

export const LeftArrow = styled(BsArrowLeft)``;
LeftArrow.displayName = "LeftArrow";

export const AnimatedCircle = styled(motion.circle)`
  position: absolute;
`;
AnimatedCircle.displayName = "AnimatedCircle";
