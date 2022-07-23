import { LinkBtn, MovieCardStyle, MovieCardWrapper } from "./styles";
import { ReactElement, useContext } from "react";

import GlobalContext from "context/GlobalContext";
import HorizontalList from "components/molecules/HorizontalList";
import { IShortMovieDetails } from "types/movie";
import { goToDetails } from "utils/RoutingUtils";

interface IMovieListProps<T> {
  title: string;
  subListTitles: T[];
  movies?: IShortMovieDetails[];
  onSubTitleClick: (title: T) => void;
  className?: string;
  loading?: boolean;
  type?: "tv" | "movie";
}

export default function MovieList<T>({
  title,
  subListTitles,
  onSubTitleClick,
  movies,
  className,
  loading = false,
  type = "movie",
}: IMovieListProps<T>): ReactElement {
  return (
    <HorizontalList
      title={title}
      subListTitles={subListTitles}
      onSubTitleClick={onSubTitleClick}
      className={className}
      loading={loading}
    >
      {movies &&
        movies.map((_movie, index) => {
          return (
            <LinkBtn key={index} href={goToDetails(_movie.id, type)}>
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
