import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    ${({ theme }) => theme.fonts.main.massive};
    font-weight: bolder;
  }
`;
Container.displayName = "Container";

export const SubListTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 1.25rem 0;

  > span:not(:first-child):not(:last-child) {
    margin: 0 2.5%;
  }

  > span:last-child {
    margin: 0 0 0 2.5%;
  }

  > span:first-child {
    margin: 0 2.5% 0 0;
  }

  > span:only-child {
    margin: 0;
  }
`;
SubListTitle.displayName = "SubListTitle";

export const SubTitle = styled.span<{ highlight: boolean }>`
  cursor: pointer;
  ${({ theme }) => theme.fonts.main.big};
  font-weight: 600;
  color: ${({ theme, highlight }) =>
    highlight ? theme.cRed.alpha(0.65).toString() : theme.text};
`;
SubTitle.displayName = "SubTitle";

export const MovieCardList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 1436px;

  > div:not(:first-child):not(:last-child) {
    margin: 0 2rem;
  }

  > div:last-child {
    margin: 0 0 0 2rem;
  }

  > div:first-child {
    margin: 0 2rem 0 0;
  }

  > div:only-child {
    margin: 0;
  }

  > div {
    flex: 1 0 auto;
  }
`;
MovieCardList.displayName = "MovieCardList";
