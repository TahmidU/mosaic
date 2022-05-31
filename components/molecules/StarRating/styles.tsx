import Star from "./Star";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-areas: "stars . rating";
  grid-template-columns: 65% 5% 30%;
  max-width: 8rem;
  height: auto;
  align-items: center;

  > span:last-child {
    grid-area: rating;
    ${({ theme }) => theme.fonts.main.regular};
  }
`;
Container.displayName = "Container";

export const StarWrapper = styled.div`
  grid-area: stars;
  display: flex;
  flex-direction: row;
`;
StarWrapper.displayName = "StarWrapper";

export const StarStyle = styled(Star)`
  width: 100%;
  height: 100%;
`;
StarStyle.displayName = "StarStyle";
