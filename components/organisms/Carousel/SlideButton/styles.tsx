import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import ProgressiveCircle from "./ProgressiveCircle";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  cursor: pointer;
  position: relative;
  width: 26px;
  height: 26px;

  svg {
    position: absolute;
  }
`;
Container.displayName = "Container";

export const RightArrow = styled(BsArrowRight)`
  width: 100%;
  //width: 26px;
  //max-width: 117px;
  height: auto;
`;
RightArrow.displayName = "RightArrow";

export const LeftArrow = styled(BsArrowLeft)``;
LeftArrow.displayName = "LeftArrow";

export const HoverAnimationCircle = styled(ProgressiveCircle)`
  position: absolute;
  margin: auto;
  z-index: -1;
`;
HoverAnimationCircle.displayName = "HoverAnimationCircle";
