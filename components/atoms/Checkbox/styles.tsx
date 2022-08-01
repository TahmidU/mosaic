import styled from "styled-components";

export const Container = styled.div<{ isSelected: boolean }>`
  user-select: none;
  height: 32px;
  width: fit-content;
  padding: 0.1rem 1rem;
  border: 1px solid ${({ theme }) => theme.cBlack.alpha(0.5).toString()};
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ theme, isSelected }) =>
    isSelected
      ? `border-color: ${theme.cRed
          .alpha(0.1)
          .toString()}; background-color: ${theme.cRed
          .alpha(0.25)
          .toString()}; color: ${theme.cRed
          .alpha(0.5)
          .toString()}; font-weight: bold;`
      : ""}

  > span:first-child {
    ${({ theme }) => theme.fonts.main.regular};
    text-align: center;
  }
`;
Container.displayName = "Container";
