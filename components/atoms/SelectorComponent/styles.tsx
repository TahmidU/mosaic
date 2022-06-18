import Button from "../Button";
import { GrDown } from "react-icons/gr";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1.25rem;
  padding: 0.625rem;
  ${({ theme }) => theme.fonts.main.big};
  width: 168px;
  cursor: pointer;
`;
Container.displayName = "Container";

export const DropdownButton = styled(Button)``;
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
`;
ChildrenOverflow.displayName = "ChildrenOverflow";

export const Option = styled(Button)``;
Option.displayName = "Option";
