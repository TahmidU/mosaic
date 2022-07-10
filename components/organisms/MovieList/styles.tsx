import MovieCard from "components/molecules/MovieCard";
import styled from "styled-components";

export const MovieCardStyle = styled(MovieCard)`
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.cGrey.alpha(0.2).toString()};
  }
`;
MovieCardStyle.displayName = "MovieCardStyle";

export const MovieCardWrapper = styled.div`
  display: inline-block;
  width: calc((100%) / 10);

  > div {
    margin: 0 auto;
  }

  @media only screen and (max-width: 1755px) {
    width: calc((100%) / 9);
  }

  @media only screen and (max-width: 1648px) {
    width: calc((100%) / 8);
  }

  @media only screen and (max-width: 1442px) {
    width: calc((100%) / 7);
  }

  @media only screen and (max-width: 1264px) {
    width: calc((100%) / 6);
  }

  @media only screen and (max-width: 1086px) {
    width: calc((100%) / 5);
  }

  @media only screen and (max-width: 912px) {
    width: calc((100%) / 4);
  }

  @media only screen and (max-width: 748px) {
    width: calc((100%) / 3);
  }

  @media only screen and (max-width: 568px) {
    width: calc((100%) / 2);
  }
`;
MovieCardWrapper.displayName = "MovieCardWrapper";
