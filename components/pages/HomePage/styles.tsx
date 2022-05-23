import MovieList from "components/organisms/MovieList";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
Container.displayName = "Container";

export const FirstPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
FirstPageWrapper.displayName = "FirstPageWrapper";

export const MovieListStyle = styled(MovieList)`
  padding: 0 2rem;
  //margin: 100% 0 0 0;
` as any;
MovieListStyle.displayName = "MovieListStyle";
