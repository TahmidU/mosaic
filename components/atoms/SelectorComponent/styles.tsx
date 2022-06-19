import styled, { css, keyframes } from "styled-components";

import Button from "../Button";
import { GrDown } from "react-icons/gr";

const arrowEndAnim = `-180deg`;
const arrowStartAnim = `0deg`;
const toUpArrow = keyframes`
  from{
    transform: rotate(${arrowStartAnim});
  }

  to{
    transform: rotate(${arrowEndAnim});
  }
`;

const toDownArrow = keyframes`
    from{
    transform: rotate(${arrowEndAnim});
  }

  to{
    transform: rotate(${arrowStartAnim});
  }
`;

export const Container = styled.div<{ isOpen: boolean }>`
  ${({ theme }) => theme.fonts.main.big};
  width: 168px;
  height: 48px;
  cursor: pointer;
  border-radius: 1.8rem;
  border: 1px solid ${({ theme }) => theme.cAlmostBlack.alpha(0.2).toString()};
  padding: 0 0.25em;
  position: relative;
  box-shadow: ${({ theme }) =>
    `0px 2px 8px ${theme.cAlmostBlack.alpha(0.15).toString()}`};
  :hover {
    ${({ isOpen, theme }) =>
      isOpen
        ? `border: 1px solid ${theme.cAlmostBlack.alpha(0.6).toString()};`
        : `border: 1px solid ${theme.cAlmostBlack.alpha(0.4).toString()};`};
  }

  ${({ isOpen, theme }) =>
    isOpen && `border: 1px solid ${theme.cAlmostBlack.alpha(0.6).toString()};`};
`;
Container.displayName = "Container";

export const DropdownButton = styled(Button)<{ isOpen: boolean }>`
  ${({ theme }) => theme.fonts.main.big};
  width: 100%;
  height: 100%;
  justify-content: space-between;

  > p:first-child {
    padding-left: 0.625rem;
  }

  > svg:last-child {
    ${({ isOpen }) =>
      isOpen
        ? css`
            animation: ${toUpArrow} 0.05s linear forwards;
          `
        : css`
            animation: ${toDownArrow} 0.05s linear forwards;
          `}
  }
`;
DropdownButton.displayName = "DropdownButton";

export const DownIcon = styled(GrDown)`
  width: 20px;
  width: 14px;
  height: auto;
  > polyline:first-child {
    stroke: ${({ theme }) => theme.almostBlack};
  }
  margin-right: 0.25em;
`;
DownIcon.displayName = "DownIcon";

export const ChildrenOverflow = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => (isOpen ? "" : "display:none")};
  width: 158px;
  position: absolute;
  box-shadow: ${({ theme }) =>
    `0px 2px 8px ${theme.cAlmostBlack.alpha(0.15).toString()}`};
  border-radius: 0.5rem;
  padding: 0.25rem;
  top: 60px;
`;
ChildrenOverflow.displayName = "ChildrenOverflow";

export const Option = styled(Button)`
  ${({ theme }) => theme.fonts.main.big};
  padding: 0.35rem 0.5rem;
  width: fill-available;
  justify-content: start;
  border-radius: 0.25rem;

  :hover {
    color: ${({ theme }) => theme.cRed.alpha(0.8).toString()};
    background-color: ${({ theme }) => theme.cRed.alpha(0.05).toString()};
  }
`;
Option.displayName = "Option";
