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
  padding: 2rem 0;

  div {
    display: flex;
    flex-direction: column;
  }

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

  > div:not(:first-child) {
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
`;
FooterContainer.displayName = "FooterContainer";
