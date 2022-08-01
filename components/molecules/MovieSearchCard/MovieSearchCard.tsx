import { Container, ImageWrapper } from "./styles";

import Image from "next/image";
import { ReactElement } from "react";

interface IMovieSearchCardProps {
  title: string;
  desc: string;
  src: string;
}

export default function MovieSearchCard({
  title,
  desc,
  src,
}: IMovieSearchCardProps): ReactElement {
  return (
    <Container>
      <div>
        <ImageWrapper>
          <Image
            alt="search_tv_movie_image"
            src={src}
            layout="responsive"
            width={95}
            height={142}
          />
        </ImageWrapper>
      </div>
      <div>
        <span>{title}</span>
        <span>{desc}</span>
      </div>
    </Container>
  );
}
