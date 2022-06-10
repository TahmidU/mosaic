import styled, { keyframes } from "styled-components";

const indicatorExpand = keyframes`
  from{
    height: 4px;
  }

  to{
    height: 10px;
  }
`;

const indicatorContract = keyframes`
  from{
    height: 10px;
  }

  to{
    height: 4px;
  }
`;

export const Indicator = styled.div<{ enabled: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 16px;

  background: ${({ theme, enabled }) => (enabled ? theme.accent : theme.white)};
  box-shadow: ${({ theme, enabled }) =>
    !enabled
      ? `inset 0px 4px 10px ${theme.cBlack.alpha(0.15).toString()}`
      : `inset 0px 4px 10px ${theme.cBlack.alpha(0.05).toString()}`};

  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    width: 18px;
    height: 4px;
    border-radius: 2px;
    animation: ${indicatorContract} 0.1s linear forwards;

    &:hover {
      border-radius: 3px;
      animation: ${indicatorExpand} 0.1s linear forwards;
    }
  }
`;
Indicator.displayName = "Indicator";
