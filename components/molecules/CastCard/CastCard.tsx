import { Container, TextSection } from "./styles";

import { Links } from "utils";
import { ReactElement } from "react";

interface ICastCardProps {}

export default function CastCard({}: ICastCardProps): ReactElement {
  return (
    <Container
      variant="vertical_image"
      src={`${Links.tmdbImageURL}original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg`}
    >
      <TextSection>
        <span>Name</span>
        <span>Played</span>
        <span>Played</span>
      </TextSection>
    </Container>
  );
}
