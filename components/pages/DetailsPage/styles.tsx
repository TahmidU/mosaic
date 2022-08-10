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
