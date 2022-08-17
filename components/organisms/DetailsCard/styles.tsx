import Card from "components/atoms/Card";
import StarRating from "components/molecules/StarRating";
import styled from "styled-components";

export const Container = styled(Card)`
  width: 436px;
  max-width: unset;
  max-height: unset;
  height: fit-content;
  cursor: unset;

  > div:nth-child(2) {
    width: 100%;
  }

  box-shadow: unset;
  border: unset;
  margin: 0 0 1rem 0;
`;
Container.displayName = "Container";

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
MainSection.displayName = "MainSection";

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  > span {
    margin: 0 auto 0 0;
    text-align: start;
  }

  > span:first-child {
    font-weight: 400;
    ${({ theme }) => theme.fonts.tertiary.bigger};
  }

  > span:last-child {
    font-weight: 300;
    ${({ theme }) => theme.fonts.tertiary.regular};
  }
`;
TitleBlock.displayName = "TitleBlock";

export const StarRatingStyle = styled(StarRating)`
  margin: 0 0 1rem 0;
`;
StarRatingStyle.displayName = "StarRatingStyle";

export const SubSection = styled.div`
  margin: 1rem 0;
  width: 100%;
  justify-content: start;
  > p {
    text-align: start;
    display: flex;
    flex-direction: column;
    > span:first-child {
      ${({ theme }) => theme.fonts.main.medium};
      font-weight: bold;
    }
    > span:last-child {
      ${({ theme }) => theme.fonts.main.regular};
      font-weight: 300;
    }
  }

  > p:first-child > span:last-child {
    text-transform: uppercase;
  }
`;
SubSection.displayName = "SubSection";
