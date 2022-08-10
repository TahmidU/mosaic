import CastCard from "components/molecules/CastCard";
import HorizontalList from "components/molecules/HorizontalList";
import styled from "styled-components";

export const CastHorizontalList = styled(HorizontalList)`
  display: block;

  > h1:first-child {
    ${({ theme }) => theme.fonts.main.bigger};
  }

  > div:last-child {
    height: 390px;

    > div:first-child {
      > div:first-child {
        left: 0;
      }

      > div:last-child {
        right: 0;
      }

      max-height: 390px;

      > div:nth-child(2) {
        max-height: 390px;
      }
    }
  }
`;
CastHorizontalList.displayName = "CastHorizontalList";

export const CastListWrapper = styled.div`
  display: inline-block;
  width: calc(100% / 7);

  > div {
    margin: 0 auto;
  }

  @media only screen and (max-width: 1729px) {
    width: calc(100% / 5);
  }

  @media only screen and (max-width: 1400px) {
    width: calc(100% / 3);
  }

  @media only screen and (max-width: 600px) {
    width: calc(100% / 2);
  }
`;
CastListWrapper.displayName = "CastListWrapper";

export const CastCardStyle = styled(CastCard)`
  cursor: unset;

  span {
    white-space: normal;
  }
`;
CastCardStyle.displayName = "CastCardStyle";
