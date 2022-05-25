import { BsArrowDown } from "react-icons/bs";
import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  cursor: pointer;
  height: 100%;
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
