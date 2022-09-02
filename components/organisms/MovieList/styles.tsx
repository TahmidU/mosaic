import MovieCard from "components/molecules/MovieCard";
import styled from "styled-components";

export const LinkBtn = styled.a`
  width: fit-content;
  height: fit-content;
`;
LinkBtn.displayName = "LinkBtn";

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

export const SkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 1rem;

  @media only screen and (max-width: 1755px) {
    > div:nth-child(9) {
      display: none;
    }
  }

  @media only screen and (max-width: 1648px) {
    > div:nth-child(8) {
      display: none;
    }
  }

  @media only screen and (max-width: 1442px) {
    > div:nth-child(7) {
      display: none;
    }
  }

  @media only screen and (max-width: 1264px) {
    > div:nth-child(6) {
      display: none;
    }
  }

  @media only screen and (max-width: 1086px) {
    > div:nth-child(5) {
      display: none;
    }
  }

  @media only screen and (max-width: 912px) {
    > div:nth-child(4) {
      display: none;
    }
  }

  @media only screen and (max-width: 748px) {
    > div:nth-child(3) {
      display: none;
    }
  }

  @media only screen and (max-width: 568px) {
    > div:nth-child(2) {
      display: none;
    }
  }
`;
SkeletonWrapper.displayName = "SkeletonWrapper";
