import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 0.2fr 0.8fr;
  width: 100%;
  align-items: start;
  justify-content: space-around;
  background: ${({ theme }) => theme.reverseMain};
  color: ${({ theme }) => theme.main};
  padding: 2rem 0;

  div {
    display: flex;
    flex-direction: column;
  }

  // Logos
  > div:first-child {
    margin: 0.2rem 1rem;

    > div:first-child > span:last-child {
      ${({ theme }) => theme.fonts.main.small};
    }

    text {
      fill: ${({ theme }) => theme.main} !important;
    }

    div {
      margin: 0 0 1rem 0;
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
    grid-template-columns: auto auto auto auto auto;
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

      @media only screen and (max-width: 1024px) {
        ${({ theme }) => theme.fonts.main.regular};

        > span:first-child {
          ${({ theme }) => theme.fonts.main.mediumBig};
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;

    > div:first-child {
      display: flex;
      width: 100%;
      margin: 0;

      flex-direction: row;
      justify-content: space-between;
    }

    > div:nth-child(2) {
      display: grid;
      width: 100%;
      grid-template-columns: auto auto auto auto auto;
    }
  }

  @media only screen and (max-width: 500px) {
    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      width: 100%;

      > div {
        margin: 1rem 0;
      }
    }
  }
`;
FooterContainer.displayName = "FooterContainer";
