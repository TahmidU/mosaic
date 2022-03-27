import styled from "styled-components";

export const Indicator = styled.div<{ enabled: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 16px;

  background: ${({ theme, enabled }) => (enabled ? theme.accent : theme.white)};
  box-shadow: ${({ theme, enabled }) =>
    !enabled
      ? `inset 0px 4px 10px ${theme.cBlack.alpha(0.15).toString()}`
      : `inset 0px 4px 10px ${theme.cBlack.alpha(0.05).toString()}`};
`;
Indicator.displayName = "Indicator";
