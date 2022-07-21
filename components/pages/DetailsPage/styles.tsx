import CastCard from "components/molecules/CastCard";
import HorizontalList from "components/molecules/HorizontalList";
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
      max-height: 390px;

      > div:nth-child(2) {
        max-height: 390px;
      }

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
`;
CastCardStyle.displayName = "CastCardStyle";

export const LinkBtn = styled.a`
  width: fit-content;
  height: fit-content;
`;
LinkBtn.displayName = "LinkBtn";
