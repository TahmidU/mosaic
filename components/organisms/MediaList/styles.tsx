import HorizontalList from "components/molecules/HorizontalList";
import MediaCard from "components/molecules/MediaCard";
import styled from "styled-components";

export const MediaHorizontalList = styled(HorizontalList)`
  display: block;

  > h1:first-child {
    ${({ theme }) => theme.fonts.main.bigger};
  }

  > div:last-child {
    height: fit-content;

    > div:first-child {
      max-height: fit-content;

      > div:first-child {
        left: 0;
      }

      > div:last-child {
        right: 0;
      }

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
