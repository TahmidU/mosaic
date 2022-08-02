import { Container, ImageWrapper } from "./styles";

import Image from "next/image";
import { Links } from "utils";
import { ReactElement } from "react";

interface IMovieSearchCardProps {
  title: string;
  desc: string;
  src?: string;
}

export default function MovieSearchCard({
  title,
  desc,
  src,
}: IMovieSearchCardProps): ReactElement {
  console.log(`${Links.tmdbImageURL}${src?.split("/")[1]}`);

  return (
    <Container>
      <div>
        <ImageWrapper>
          {src ? (
            <Image
              alt="search_tv_movie_image"
              src={`${Links.tmdbImageURL}w220_and_h330_face${src}`}
              layout="responsive"
              width={95}
              height={142}
            />
          ) : (
            <span>No Image Available</span>
          )}
        </ImageWrapper>
      </div>
      <div>
        <span>{title}</span>
        <span>{desc}</span>
      </div>
    </Container>
  );
}
