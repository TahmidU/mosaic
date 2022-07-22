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

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
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
    margin: 0 0 3rem 0;
    > p:first-child {
      ${({ theme }) => theme.fonts.main.bigger};
      font-weight: bold;
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

const mediaNormalHeight = "470px",
  mediaSmallHeight = "275px";
const mediaPadding = "45px",
  mediaExtraPadding = "60px";
export const MediaHorizontalList = styled(HorizontalListStyle)`
  > div:last-child {
    height: ${mediaNormalHeight};

    > div:first-child {
      max-height: ${mediaNormalHeight};

      > div:nth-child(2) {
        max-height: ${mediaNormalHeight};
      }

      > div:first-child,
      > div:last-child {
        top: 35%;
      }
    }
  }

  @media only screen and (max-width: 426px) {
    > div:last-child {
      height: calc(${mediaSmallHeight} + ${mediaPadding});

      > div:first-child {
        max-height: calc(${mediaSmallHeight} + ${mediaPadding});

        > div:nth-child(2) {
          max-height: calc(${mediaSmallHeight} + ${mediaPadding});
        }
      }
    }
  }

  @media only screen and (max-width: 360px) {
    > div:last-child {
      height: calc(${mediaSmallHeight} + ${mediaExtraPadding});

      > div:first-child {
        max-height: calc(${mediaSmallHeight} + ${mediaExtraPadding});

        > div:nth-child(2) {
          max-height: calc(${mediaSmallHeight} + ${mediaExtraPadding});
        }
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
  padding: 0 1rem;
  width: 100%;

  @media only screen and (max-width: 426px) {
    height: ${mediaSmallHeight};

    p {
      ${({ theme }) => theme.fonts.main.big};
    }
  }
`;
MediaCardStyle.displayName = "MediaCardStyle";
