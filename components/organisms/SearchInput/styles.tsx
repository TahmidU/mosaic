import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const Container = styled.div<{ isInputActive: boolean }>`
  display: flex;
  width: 100%;
  max-width: 18.75rem;
  padding: 0.625rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid
    ${({ theme, isInputActive }) =>
      isInputActive
        ? theme.cBlack.alpha(0.5).toString()
        : theme.cBlack.alpha(0.1).toString()};
  backdrop-filter: blur(4px);
  justify-content: end;

  > div:first-child {
    width: 100%;
  }

  > svg:last-child {
    color: ${({ theme, isInputActive }) =>
      isInputActive
        ? theme.cBlack.alpha(1).toString()
        : theme.cBlack.alpha(0.5).toString()};
  }

  :hover {
    ${({ theme, isInputActive }) =>
      !isInputActive
        ? `border-color:${theme.cBlack.alpha(0.25).toString()};`
        : ""}
    cursor: pointer;
  }
`;
Container.displayName = "Container";

export const InputStyle = styled.input`
  all: unset;
  margin: 0 1rem;
  ${({ theme }) => theme.fonts.main.medium};

  :not(:focus) {
    color: ${({ theme }) => theme.cBlack.alpha(0.625).toString()};
  }
`;
InputStyle.displayName = "InputStyle";

export const SearchIcon = styled(BsSearch)`
  justify-self: center;
  min-width: 24px;
  width: 24px;
  height: auto;
  cursor: pointer;
`;
SearchIcon.displayName = "SearchIcon";
