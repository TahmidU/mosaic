import Scrollbar from "components/atoms/Scrollbar";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-height: 720px;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1rem;

  > div:first-child {
    display: block;
    margin: 0 0 0.425rem 0;

    span {
      display: block;
    }

    > span:first-child {
      font-weight: 600;
      ${({ theme }) => theme.fonts.main.massive};
    }
    > span:last-child {
      font-weight: 400;
      ${({ theme }) => theme.fonts.main.big};
    }
  }
`;
Container.displayName = "Container";

export const Content = styled.div`
  height: 31vw !important;
  max-height: 590px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 0.4em 0 0;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.cAlmostBlack.alpha(0.8).toString()};
    border-radius: 1rem;

    :hover {
      background-color: ${({ theme }) =>
        theme.cAlmostBlack.alpha(0.85).toString()};
    }
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.cAlmostWhite};
    border-radius: 1rem;
  }

  > div {
    margin: 0.8em 0.75em 0 0.1em;
    position: relative;
  }
`;
Content.displayName = "Content";
