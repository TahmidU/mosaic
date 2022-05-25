import MovieList from "components/organisms/MovieList";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
Container.displayName = "Container";

const navbarSize = "80px";
export const FirstPageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${navbarSize});
`;
FirstPageWrapper.displayName = "FirstPageWrapper";

export const MovieListStyle = styled(MovieList)`
  padding: 0 2rem;
  margin: 0 0 5rem 0;
` as any;
MovieListStyle.displayName = "MovieListStyle";
