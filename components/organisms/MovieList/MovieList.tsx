import { Container, MovieCardList, SubListTitle, SubTitle } from "./styles";
import { ReactElement, useState } from "react";

import { IMovieCardProps } from "components/molecules/MovieCard/MovieCard";
import MovieCard from "components/molecules/MovieCard";

interface IMovieListProps<T> {
  title: string;
  subListTitles: T[];
  movies?: IMovieCardProps[];
  onSubTitleClick: (title: T) => void;
}

export default function MovieList<T>({
  title,
  subListTitles,
  onSubTitleClick,
  movies,
}: IMovieListProps<T>): ReactElement {
  const [currIndex, setCurrIndex] = useState(0);

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
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
      <MovieCardList>
        {movies.map((_movie, index) => {
          return (
            <MovieCard
              key={index}
              src={_movie.src}
              review={_movie.review}
              movieTitle={_movie.movieTitle}
              movieReleaseDate={_movie.movieReleaseDate}
            />
          );
        })}
      </MovieCardList>
    </Container>
  );
}
