import styled, { keyframes } from "styled-components";

import { BsMouse } from "react-icons/bs";
import { Link } from "react-scroll";
import { VscFoldDown } from "react-icons/vsc";

const showArrows = keyframes`
  from{
    top:-5px;
    opacity: 0;
  }

  to{
    top:0px;
    opacity:1;
  }
`;

const hideArrows = keyframes`
from{
  top:0px;
    opacity: 1;
  }

  to{
    top:-5px;
    opacity:0;
  }
`;

const moveMouseDown = keyframes`
  from{
    opacity: 0.5;
    top:0px;
  }

  to{
    opacity: 0.8;
    top: 20px;
  }
`;

const moveMouseUp = keyframes`
  from{
    opacity: 0.8;
    top:20px;
  }

  to{
    opacity: 0.5;
    top:0px;
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

  :hover {
    > div:first-child > svg:first-child {
      animation: ${showArrows} 0.25s linear forwards;
    }

    > div:first-child > svg:last-child {
      animation: ${moveMouseDown} 0.4s linear forwards;
    }
  }
`;
Container.displayName = "Container";

export const DownArrows = styled(VscFoldDown)`
  width: 21px;
  height: 21px;
  position: absolute;
  z-index: 1;
  opacity: 1;
  left: 36%;
  animation: ${hideArrows} 0.25s linear forwards;
`;
DownArrows.displayName = "DownArrows";

export const MouseIcon = styled(BsMouse)`
  position: absolute;
  width: 32px;
  height: 32px;
  z-index: 10;
  left: 26%;
  animation: ${moveMouseUp} 0.4s linear forwards;
`;
MouseIcon.displayName = "MouseIcon";

export const IconsWrapper = styled.div`
  position: relative;
  width: 68px;
  height: 64px;
`;
IconsWrapper.displayName = "IconsWrapper";
