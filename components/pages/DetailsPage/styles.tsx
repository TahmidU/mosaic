import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 28.25rem auto;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: red;
  padding: 0 3rem;

  > div:first-child {
    border: 1px solid magenta;
  }

  > div:last-child {
    border: 1px solid blue;
  }

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
`;
ExtraDetailSection.displayName = "ExtraDetailSection";
