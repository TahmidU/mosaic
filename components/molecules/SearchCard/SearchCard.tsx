import { Container, ImageWrapper } from "./styles";
import { Links, TextUtils } from "utils";

import Image from "next/image";
import { ReactElement } from "react";
import StarRating from "../StarRating";

interface ISearchCardProps {
  title: string;
  desc: string;
  releaseDate: string;
  rating: number;
  src?: string;
  className?: string;
}

export default function SearchCard({
  title,
  desc,
  releaseDate,
  rating,
  src,
  className,
}: ISearchCardProps): ReactElement {
  return (
    <Container className={className}>
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
        <div>
          <span>{TextUtils.dateFormatter(releaseDate)}</span>
          <StarRating rating={rating} />
        </div>
        <span>{desc}</span>
      </div>
    </Container>
  );
}
