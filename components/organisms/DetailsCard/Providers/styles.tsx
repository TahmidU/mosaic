import styled from "styled-components";

export const Container = styled.div`
  > p {
    display: flex;
    flex-direction: column;
    text-align: start;

    > span:first-child {
      ${({ theme }) => theme.fonts.main.medium};
      font-weight: bold;
    }
    > div {
      display: flex;
      flex-direction: row;
      ${({ theme }) => theme.fonts.main.regular};
      font-weight: 300;
      margin: 0.5rem 0;

      > div:first-child {
        width: 24px;
        height: 24px;
        border-radius: 12px;
        overflow: hidden;
        margin: 0 0.5em;
      }
    }
  }
`;
Container.displayName = "Container";

export const WatchOn = styled.p`
  display: flex;
  flex-direction: column;
  text-align: start;

  > span:first-child {
    ${({ theme }) => theme.fonts.main.medium};
    font-weight: bold;
  }
  > div {
    display: flex;
    flex-direction: row;
    ${({ theme }) => theme.fonts.main.regular};
    font-weight: 300;
    margin: 0.5rem 0;

    > div:first-child {
      width: 24px;
      height: 24px;
      border-radius: 12px;
      overflow: hidden;
      margin: 0 0.5em;
    }
  }
`;
WatchOn.displayName = "WatchOn";
