import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-areas: "stars . rating";
  grid-template-columns: 65% 5% 30%;
  max-width: 8rem;
  width: 100%;
  height: auto;
  align-items: baseline;

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

const starStrokeURL = "url('/star_rating.png');";
export const StarStroke = styled.div`
  background-image: ${starStrokeURL};
  background-size: cover;
  width: 100%;
  height: 16px;
`;
StarStroke.displayName = "StarStroke";

const maskURL = "url('/star_rating_mask.png');";
export const StarGradient = styled.div<{ rating: number }>`
  background: ${({ rating }) =>
    `linear-gradient(to right, #FD1C1C ${rating}%, transparent ${rating}%);`};
  mask-image: ${maskURL};
  -webkit-mask-image: ${maskURL};
  mask-size: cover;
  width: 100%;
  height: 100%;
`;
StarGradient.displayName = "StarGradient";
