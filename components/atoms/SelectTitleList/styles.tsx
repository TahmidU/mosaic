import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 2.75rem 0;

  > span:not(:first-child):not(:last-child) {
    margin: 0 1.5%;
  }

  > span:last-child {
    margin: 0 0 0 1.5%;
  }

  > span:first-child {
    margin: 0 1.5% 0 0;
  }

  > span:only-child {
    margin: 0;
  }
`;
Container.displayName = "Container";

export const Option = styled.span<{ highlight: boolean }>`
  cursor: pointer;
  ${({ theme }) => theme.fonts.main.big};
  font-weight: 700;
  color: ${({ theme, highlight }) =>
    highlight ? theme.cRed.alpha(0.65).toString() : theme.text};
`;
Option.displayName = "Option";
