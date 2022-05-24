import {
  Container,
  LoadingContainer,
  MovieCardList,
  MovieCardWrapper,
  MovieListWrapper,
  SubListTitle,
  SubTitle,
} from "./styles";
import { ReactElement, useState } from "react";

import { IMovieCardProps } from "components/molecules/MovieCard/MovieCard";
import { Loader } from "@mantine/core";
import MovieCard from "components/molecules/MovieCard";

interface IMovieListProps<T> {
  title: string;
  subListTitles: T[];
  movies?: IMovieCardProps[];
  onSubTitleClick: (title: T) => void;
  className?: string;
  loading?: boolean;
}

export default function MovieList<T>({
  title,
  subListTitles,
  onSubTitleClick,
  movies,
  className,
  loading = false,
}: IMovieListProps<T>): ReactElement {
  const [currIndex, setCurrIndex] = useState(0);

  if (!movies || movies.length === 0 || loading) {
    return (
      <Container className={className}>
        <h1>{title}</h1>
        <SubListTitle>
          {subListTitles.map((_subTitle, _index) => {
            return (
              <SubTitle
                key={_index}
                highlight={_index === currIndex}
                onClick={() => {
                  onSubTitleClick(_subTitle);
                  setCurrIndex(_index);
                }}
              >
                {_subTitle}
              </SubTitle>
            );
          })}
        </SubListTitle>
        <MovieListWrapper>
          <LoadingContainer>
            <Loader size={120} color="red" variant="dots" />
            <span>Loading</span>
          </LoadingContainer>
        </MovieListWrapper>
      </Container>
    );
  }

  return (
    <Container className={className}>
      <h1>{title}</h1>
      <SubListTitle>
        {subListTitles.map((_subTitle, _index) => {
          return (
            <SubTitle
              key={_index}
              highlight={_index === currIndex}
              onClick={() => {
                onSubTitleClick(_subTitle);
                setCurrIndex(_index);
              }}
            >
              {_subTitle}
            </SubTitle>
          );
        })}
      </SubListTitle>
      <MovieListWrapper>
        <MovieCardList universal variant="horizontal" autoHide={false}>
          {movies.map((_movie, index) => {
            return (
              <MovieCardWrapper key={index}>
                <MovieCard
                  src={_movie.src}
                  review={_movie.review}
                  movieTitle={_movie.movieTitle}
                  movieReleaseDate={_movie.movieReleaseDate}
                />
              </MovieCardWrapper>
            );
          })}
        </MovieCardList>
      </MovieListWrapper>
    </Container>
  );
}
