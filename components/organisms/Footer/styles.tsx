import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 0.2fr 0.8fr;
  width: 100%;
  align-items: start;
  justify-content: center;
  background: ${({ theme }) => theme.reverseMain};
  color: ${({ theme }) => theme.main};
  padding: 2rem 0;

  div {
    display: flex;
    flex-direction: column;
  }

  // Logos
  > div:first-child {
    margin: 0.2rem 0;

    text {
      fill: ${({ theme }) => theme.main} !important;
    }

    div {
      margin: 0rem 0 1rem 2rem;
    }

    svg {
      width: 168px;
      height: auto;
    }
  }

  // Links
  > div:nth-child(2) {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 0.18fr 0.18fr 0.18fr 0.18fr auto;
    grid-template-areas: "product community support company .";

    > div:first-child {
      grid-area: product;
    }

    > div:nth-child(2) {
      grid-area: community;
    }

    > div:nth-child(3) {
      grid-area: support;
    }

    > div:nth-child(4) {
      grid-area: company;
    }

    div {
      ${({ theme }) => theme.fonts.main.mediumBig};

      > span:first-child {
        ${({ theme }) => theme.fonts.main.massive};
        font-weight: bold;
        margin: 0 0 0.5rem 0;
      }

      span:not(:first-child) {
        margin: 0.2rem 0;
        cursor: pointer;
        width: fit-content;

        &:hover {
          text-decoration: underline;
          font-weight: bold;
        }
      }
    }
  }
`;
FooterContainer.displayName = "FooterContainer";
