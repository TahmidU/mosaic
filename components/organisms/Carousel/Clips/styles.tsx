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

export const Content = styled(Scrollbar)`
  height: 30vw !important;
  max-height: 590px;

  > div:first-child {
    padding: 0 0.2em 0 0;

    > div {
      margin: 0.8em 0.75em 0 0.2em;
      position: relative;
    }
  }
`;
Content.displayName = "Content";
