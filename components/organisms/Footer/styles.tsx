import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  align-items: start;
  justify-content: center;
  background: ${({ theme }) => theme.reverseMain};
  color: ${({ theme }) => theme.main};

  > div {
    display: flex;
    flex-direction: column;
  }

  > div:not(:first-child) {
    ${({ theme }) => theme.fonts.main.big};
    > span:first-child {
    }
  }
`;
FooterContainer.displayName = "FooterContainer";

export const MosaicContainer = styled.div``;
MosaicContainer.displayName = "MosaicContainer";

export const MovieDBContainer = styled.div``;
MovieDBContainer.displayName = "MovieDBContainer";
