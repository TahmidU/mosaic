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
  margin: 0 0 2.75rem 0;

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

export const MovieListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
MovieListWrapper.displayName = "MovieListWrapper";

export const MovieCardList = styled.div`
  display: block;
  overflow-x: hidden;
  white-space: nowrap;
  max-width: 1648px;
  width: 100%;
  max-height: 290px;
  height: auto;

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
`;
MovieCardList.displayName = "MovieCardList";

export const MovieCardWrapper = styled.div`
  display: inline-block;
  width: 9.67vw;
`;
MovieCardWrapper.displayName = "MovieCardWrapper";
