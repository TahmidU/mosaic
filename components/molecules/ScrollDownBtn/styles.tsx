import styled, { keyframes } from "styled-components";

import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-scroll";

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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  > span:nth-child(2) {
    ${({ theme }) => theme.fonts.main.bigger};
  }

  > svg:first-child,
  > svg:last-child {
    animation: ${normalArrow} 0.1s linear forwards;
  }

  :hover {
    > svg:first-child,
    > svg:last-child {
      animation: ${expandArrow} 0.1s linear forwards;
    }
  }
`;
Container.displayName = "Container";

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
