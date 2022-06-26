import { BsArrowDown, BsMouse } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

import { Link } from "react-scroll";
import { VscFoldDown } from "react-icons/vsc";

const arrowMaxExpand = 1.4;
const arrowNormalSize = 1.0;
const expandArrow = keyframes`
  from{
    transform: scale(${arrowNormalSize});
  }

  to{
    transform: scale(${arrowMaxExpand});
  }
`;

const normalArrow = keyframes`
  from{
    transform: scale(${arrowMaxExpand});
  }

  to{
    transform: scale(${arrowNormalSize});
    }
`;

export const Container = styled(Link)`
  all: unset;
  cursor: pointer;
  height: fit-content;
  width: 100%;
  max-width: 384px;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  > span:nth-child(2) {
    ${({ theme }) => theme.fonts.main.regular};
  }

  /*
  > svg:first-child,
  > svg:last-child {
    animation: ${normalArrow} 0.1s linear forwards;
  }

  :hover {
    > svg:first-child,
    > svg:last-child {
      animation: ${expandArrow} 0.1s linear forwards;
    }
  }*/
`;
Container.displayName = "Container";

export const DownArrows = styled(VscFoldDown)`
  width: 21px;
  height: 21px;
  position: absolute;
  z-index: 1;
  opacity: 1;
  left: 36%;
`;
DownArrows.displayName = "DownArrows";

export const MouseIcon = styled(BsMouse)`
  position: absolute;
  width: 32px;
  height: 32px;
  z-index: 10;
  left: 26%;
`;
MouseIcon.displayName = "MouseIcon";

export const IconsWrapper = styled.div`
  position: relative;
  width: 68px;
  height: 64px;
`;
IconsWrapper.displayName = "IconsWrapper";

const DownIcon = styled(BsArrowDown)`
  width: 32px;
  height: 32px;
  position: absolute;
`;
DownIcon.displayName = "DownIcon";

export const LeftDownIcon = styled(DownIcon)`
  left: 0;
`;
LeftDownIcon.displayName = "LeftDownIcon";

export const RightDownIcon = styled(DownIcon)`
  right: 0;
`;
RightDownIcon.displayName = "RightDownIcon";
