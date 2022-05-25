import {
  Container,
  LoadingContainer,
  MovieCardList,
  MovieCardListAnim,
  MovieCardWrapper,
  MovieListWrapper,
  SubListTitle,
  SubTitle,
} from "./styles";
import { ReactElement, useState } from "react";

import { AnimatePresence } from "framer-motion";
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
        {!movies || movies.length === 0 || loading ? (
          <AnimatePresence>
            <LoadingContainer
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.25 }}
            >
              <Loader size={120} color="red" variant="dots" />
              <span>Loading</span>
            </LoadingContainer>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <MovieCardListAnim
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.25 }}
            >
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
            </MovieCardListAnim>
          </AnimatePresence>
        )}
      </MovieListWrapper>
    </Container>
  );
}
