import { Container, MovieCardList, SubListTitle } from "./styles";
import { ReactElement, useState } from "react";

import { IMovieCardProps } from "components/molecules/MovieCard/MovieCard";
import MovieCard from "components/molecules/MovieCard";

interface IMovieListProps {
  title: string;
  subMovieList: { title: string; movies: IMovieCardProps[] }[];
}

export default function MovieList({
  title,
  subMovieList,
}: IMovieListProps): ReactElement {
  const [list, setList] = useState<IMovieCardProps[]>(subMovieList[0].movies);

  return (
    <Container>
      <h1>{title}</h1>
      <SubListTitle>
        {subMovieList.map((_subList, index) => {
          return <span key={index}>{_subList.title}</span>;
        })}
      </SubListTitle>
      <MovieCardList>
        {list.map((_movie, index) => {
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
