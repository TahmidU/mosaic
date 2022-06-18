import Button from "../Button";
import { GrDown } from "react-icons/gr";
import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  ${({ theme }) => theme.fonts.main.big};
  width: 168px;
  height: 48px;
  cursor: pointer;
  border-radius: 1.8rem;
  border: 1px solid ${({ theme }) => theme.cAlmostBlack.alpha(0.2).toString()};
  padding: 0 0.25em;
  box-shadow: ${({ theme }) =>
    `0px 2px 6px ${theme.cAlmostBlack.alpha(0.2).toString()}`};
  position: relative;

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

export const DropdownButton = styled(Button)`
  ${({ theme }) => theme.fonts.main.big};
  width: 100%;
  height: 100%;
  justify-content: space-between;
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
  width: 100%;
  position: absolute;
  box-shadow: ${({ theme }) =>
    `0px 2px 6px ${theme.cAlmostBlack.alpha(0.2).toString()}`};
`;
ChildrenOverflow.displayName = "ChildrenOverflow";

export const Option = styled(Button)``;
Option.displayName = "Option";
