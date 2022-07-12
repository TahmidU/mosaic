import CastCard from "components/molecules/CastCard";
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
`;
ShortDetailSection.displayName = "ShortDetailSection";

export const ExtraDetailSection = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.fonts.main.big};

  > div {
    margin: 0 0 3rem 0;
    > p:first-child {
      ${({ theme }) => theme.fonts.main.bigger};
      font-weight: bold;
    }
  }

  > div:nth-child(2) {
    width: 100%;
  }
`;
ExtraDetailSection.displayName = "ExtraDetailSection";

export const CastListWrapper = styled.div`
  display: inline-block;
  width: calc((100%) / 3);

  > div {
    margin: 0 auto;
  }
`;
CastListWrapper.displayName = "CastListWrapper";

export const CastCardStyle = styled(CastCard)`
  display: inline-block;
`;
CastCardStyle.displayName = "CastCardStyle";
