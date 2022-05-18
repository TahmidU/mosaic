import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
Container.displayName = "Container";

export const SubListTitle = styled.div``;
SubListTitle.displayName = "SubListTitle";

export const MovieCardList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 1436px;

  > div:not(:first-child):not(:last-child) {
    margin: 0 2rem;
  }

  > div:first-child {
    margin: 0 2rem 0 0;
  }

  > div:last-child {
    margin: 0 0 0 2rem;
  }

  > div {
    flex: 1 0 auto;
  }
`;
MovieCardList.displayName = "MovieCardList";
