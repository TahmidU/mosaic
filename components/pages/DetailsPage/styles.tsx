import CastCard from "components/molecules/CastCard";
import HorizontalList from "components/molecules/HorizontalList";
import MediaCard from "components/molecules/MediaCard";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 28.25rem auto;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 0 3rem;
  margin: 0 0 1rem 0;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
`;
Container.displayName = "Container";

export const ShortDetailSection = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;
ShortDetailSection.displayName = "ShortDetailSection";

export const ExtraDetailSection = styled.div`
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  ${({ theme }) => theme.fonts.main.big};

  > div {
    margin: 3rem 0;
  }

  > div:first-child {
    > p:first-child {
      ${({ theme }) => theme.fonts.main.bigger};
      font-weight: bold;
      margin: 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    > div:first-child > p:last-child {
      ${({ theme }) => theme.fonts.main.medium};
    }
  }

  @media only screen and (max-width: 500px) {
    > div:first-child > p:last-child {
      ${({ theme }) => theme.fonts.main.regular};
    }
  }
`;
ExtraDetailSection.displayName = "ExtraDetailSection";

export const HorizontalListStyle = styled(HorizontalList)`
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
    }
  }
`;
HorizontalListStyle.displayName = "HorizontalListStyle";

export const CastHorizontalList = styled(HorizontalListStyle)`
  > div:last-child {
    height: 390px;

    > div:first-child {
      max-height: 390px;

      > div:nth-child(2) {
        max-height: 390px;
      }
    }
  }
`;
CastHorizontalList.displayName = "CastHorizontalList";

export const MediaHorizontalList = styled(HorizontalListStyle)`
  > div:last-child {
    height: fit-content;

    > div:first-child {
      max-height: fit-content;

      > div:nth-child(2) {
        max-height: fit-content;
        padding: 1.5rem 0;
      }

      > div:first-child,
      > div:last-child {
        top: 35%;
      }
    }
  }
`;
MediaHorizontalList.displayName = "MediaHorizontalList";

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

export const MediaListWrapper = styled.div`
  display: inline-block;
  width: calc(100% / 2);

  > div {
    margin: 0 auto;
  }

  @media only screen and (max-width: 1372px) {
    width: calc(100% / 1);
  }

  @media only screen and (max-width: 1200px) {
    width: calc(100% / 2);
  }

  @media only screen and (max-width: 924px) {
    width: calc(100% / 1);
  }
`;
MediaListWrapper.displayName = "MediaListWrapper";

export const MediaCardStyle = styled(MediaCard)`
  width: 100%;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.cGrey.alpha(0.2).toString()};
  }

  @media only screen and (max-width: 426px) {
    p {
      ${({ theme }) => theme.fonts.main.big};
    }
  }
`;
MediaCardStyle.displayName = "MediaCardStyle";
