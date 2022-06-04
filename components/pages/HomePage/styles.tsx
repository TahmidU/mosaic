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
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - ${navbarSize});
  height: calc(100vh - ${navbarSize});
`;
FirstPageWrapper.displayName = "FirstPageWrapper";

export const ScrollDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 3em;

  > a:first-child {
    opacity: 40%;

    :hover {
      opacity: 100%;
    }
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }

  @media only screen and (max-height: 876px) {
    display: none;
  }
`;
ScrollDownContainer.displayName = "ScrollDownContainer";

export const MovieListStyle = styled(MovieList)`
  padding: 0 2rem;
  margin: 0 0 5rem 0;
` as any;
MovieListStyle.displayName = "MovieListStyle";
