import {
  Container,
  LeftSlideBtn,
  LoadingContainer,
  MovieCardList,
  MovieCardListAnim,
  MovieCardWrapper,
  MovieListWrapper,
  RightSlideBtn,
  SubListStyle,
} from "./styles";
import { ReactElement, useRef, useState } from "react";

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
  const movieListRef = useRef<HTMLDivElement>(null);

  function slideRight() {
    if (movieListRef.current) {
      const movieList = movieListRef.current;

      const scrollAmount =
        movieList.scrollWidth !== movieList.scrollLeft + movieList.offsetWidth
          ? movieList.scrollLeft + movieList.offsetWidth
          : 0;
      movieList.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }

  function slideLeft() {
    if (movieListRef.current) {
      const movieList = movieListRef.current;

      const scrollAmount =
        movieList.scrollLeft !== 0
          ? movieList.scrollLeft - movieList.offsetWidth
          : movieList.scrollWidth;

      console.log(scrollAmount);
      movieList.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }

  return (
    <Container className={className}>
      <h1>{title}</h1>
      <SubListStyle
        options={subListTitles}
        onChange={(_selected: any) => onSubTitleClick(_selected as T)}
      />
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
              <LeftSlideBtn variant="circleSimpleLeft" onClick={slideLeft} />
              <MovieCardList ref={movieListRef}>
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
              <RightSlideBtn variant="circleSimpleRight" onClick={slideRight} />
            </MovieCardListAnim>
          </AnimatePresence>
        )}
      </MovieListWrapper>
    </Container>
  );
}
