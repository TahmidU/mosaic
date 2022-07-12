import { Container, TextSection } from "./styles";

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
    <Container
      className={className}
      variant="vertical_image"
      src={`${Links.tmdbImageURL}original${person.profile_path}`}
    >
      <TextSection>
        <span>{person.name}</span>
        {person.character.split("/").map((_played, index) => (
          <span key={index}>{_played}</span>
        ))}
      </TextSection>
    </Container>
  );
}
