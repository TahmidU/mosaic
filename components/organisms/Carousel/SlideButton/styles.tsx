import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import ProgressiveCircle from "components/atoms/ProgressiveCircle";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  cursor: pointer;
  position: relative;
  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
  }
`;
Container.displayName = "Container";

export const MobileContainer = styled.div`
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.main};
  background-color: ${({ theme }) => theme.cAlmostWhite.alpha(0.3).toString()};
  width: 75px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${({ theme }) =>
      theme.cAlmostWhite.alpha(0.6).toString()};
  }
`;
MobileContainer.displayName = "MobileContainer";

export const RightArrow = styled(BsArrowRight)`
  width: 100%;
  height: auto;
`;
RightArrow.displayName = "RightArrow";

export const RightMobileArrow = styled(GoChevronRight)`
  color: ${({ theme }) => theme.white};
  width: 85%;
  height: auto;
`;
RightMobileArrow.displayName = "LeftMobileArrow";

export const LeftArrow = styled(BsArrowLeft)`
  width: 100%;
  height: auto;
`;
LeftArrow.displayName = "LeftArrow";

export const LeftMobileArrow = styled(GoChevronLeft)`
  color: ${({ theme }) => theme.white};
  width: 85%;
  height: auto;
`;
LeftMobileArrow.displayName = "LeftMobileArrow";

export const HoverAnimationCircle = styled(ProgressiveCircle)`
  position: absolute;
  margin: auto;
  z-index: -1;
`;
HoverAnimationCircle.displayName = "HoverAnimationCircle";
