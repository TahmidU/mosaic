import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.almostBlack};
  border-radius: 100%;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.almostBlack};
`;
Container.displayName = "Container";

export const ProgCircle = styled(CircularProgressbar)`
  width: 100%;
  height: 100%;

  path {
    stroke-width: 5;
  }

  > text:last-child {
    fill: ${({ theme }) => theme.white};
    ${({ theme }) => theme.fonts.main.bigger};
    font-weight: bolder;
    dominant-baseline: middle;
    text-anchor: middle;
  }
`;
ProgCircle.displayName = "ProgCircle";
