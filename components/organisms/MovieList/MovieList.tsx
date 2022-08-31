import {
  LinkBtn,
  MovieCardStyle,
  MovieCardWrapper,
  SkeletonWrapper,
} from "./styles";

import HorizontalList from "components/molecules/HorizontalList";
import { IShortMovieDetails } from "types/movie";
import { default as MovieCardSkeleton } from "components/molecules/MovieCard/SkeletonLoading";
import { ReactElement } from "react";
import useRoutes from "hooks/useRoutes";

interface IMovieListProps<T> {
  title: string;
  subListTitles: T[];
  movies?: IShortMovieDetails[];
  onSubTitleClick: (title: T) => void;
  className?: string;
  loading?: boolean;
  type?: "tv" | "movie";
}

const LoadingList = (props: any) => (
  <SkeletonWrapper>
    {[...Array(10)].map((_, index) => (
      <MovieCardWrapper key={index}>
        <MovieCardSkeleton />
      </MovieCardWrapper>
    ))}
  </SkeletonWrapper>
);

export default function MovieList<T>({
  title,
  subListTitles,
  onSubTitleClick,
  movies,
  className,
  loading = false,
  type = "movie",
}: IMovieListProps<T>): ReactElement {
  const { generateDetailsURL } = useRoutes();

  return (
    <HorizontalList
      title={title}
      subListTitles={subListTitles}
      onSubTitleClick={onSubTitleClick}
      className={className}
      loading={loading}
      loadingElements={<LoadingList />}
    >
      {movies &&
        movies.map((_movie, index) => {
          return (
            <LinkBtn key={index} href={generateDetailsURL(_movie.id, type)}>
              <MovieCardWrapper>
                <MovieCardStyle
                  src={_movie.src}
                  review={_movie.review}
                  movieTitle={_movie.movieTitle}
                  movieReleaseDate={_movie.movieReleaseDate}
                />
              </MovieCardWrapper>
            </LinkBtn>
          );
        })}
    </HorizontalList>
  );
}
