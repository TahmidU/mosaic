import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-height: 720px;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1rem;

  > div:first-child {
    display: block;
    margin: 0 0 1rem 0;

    span {
      display: block;
    }

    > span:first-child {
      font-weight: bolder;
      ${({ theme }) => theme.fonts.main.massive};
    }
    > span:last-child {
      font-weight: 600;
      ${({ theme }) => theme.fonts.main.big};
    }
  }

  > div:last-child {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;

    > div {
      margin: 1rem 0;
    }
  }
`;
Container.displayName = "Container";
