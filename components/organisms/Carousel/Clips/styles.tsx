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

  /*
  > div:last-child {
    overflow-y: auto;
    overflow-x: hidden;
    height: 28vw;

    > div {
      margin: 1rem 0;
    }
  }*/
`;
Container.displayName = "Container";

export const Content = styled(Scrollbar)`
  height: 28vw !important;

  > div:first-child > div {
    margin: 1rem 0;
  }
`;
Content.displayName = "Content";
