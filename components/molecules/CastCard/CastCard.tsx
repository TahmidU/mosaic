import { CastImage, Container, ImageWrapper, TextSection } from "./styles";

import { ICast } from "types/tv_movies";
import { Links } from "utils";
import { ReactElement } from "react";

interface ICastCardProps {
  person: ICast;
  className?: string;
}

export default function CastCard({
  person,
  className,
}: ICastCardProps): ReactElement {
  return (
    <Container className={className}>
      <ImageWrapper>
        <CastImage
          alt={person.original_name}
          src={`${Links.tmdbImageURL}original${person.profile_path}` || ""}
          width={150}
          height={225}
          layout="responsive"
        />
      </ImageWrapper>
      <TextSection>
        <span>{person.name}</span>
        {person.character.split("/").map((_played, index) => {
          {
            return index < 3 ? (
              <span key={index}>{_played}</span>
            ) : (
              <span>...</span>
            );
          }
        })}
      </TextSection>
    </Container>
  );
}
