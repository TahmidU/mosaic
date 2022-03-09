import ProgressiveCircle from "components/atoms/ProgressiveCircle";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.reverseMain};
  border-radius: 100%;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Container.displayName = "Container";

export const ProgCircle = styled(ProgressiveCircle)`
  circle {
    stroke: green;
    width: 80%;
    height: auto;
  }
`;
ProgCircle.displayName = "ProgCircle";

export const TextStyle = styled.div`
  color: ${({ theme }) => theme.main};
  ${({ theme }) => theme.fonts.main.massive};
`;
TextStyle.displayName = "TextStyle";
