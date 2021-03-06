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

export const TransparentContainer = styled.div`
  background-color: ${({ theme }) => theme.cAlmostBlack.alpha(0.7).toString()};
  border-radius: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 200px;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.cAlmostWhite.alpha(0.7).toString()};
    width: 50%;
  }

  :hover {
    background-color: ${({ theme }) =>
      theme.cAlmostBlack.alpha(0.85).toString()};
    svg {
      color: ${({ theme }) => theme.cAlmostWhite.alpha(0.85).toString()};
    }
  }
`;
TransparentContainer.displayName = "TransparentContainer";

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

export const CircleSimpleContainer = styled.div`
  width: 65px;
  height: 65px;
  background-color: ${({ theme }) => theme.cAlmostBlack.alpha(0.2).toString()};
  border-radius: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg:first-child {
    color: ${({ theme }) => theme.white};
    width: 45%;
    height: 45%;
  }

  :hover {
    background-color: ${({ theme }) =>
      theme.cAlmostBlack.alpha(0.3).toString()};
  }
`;
CircleSimpleContainer.displayName = "CircleSimpleContainer";

export const HoverAnimationCircle = styled(ProgressiveCircle)`
  position: absolute;
  margin: auto;
  z-index: -1;
`;
HoverAnimationCircle.displayName = "HoverAnimationCircle";
