import { Container, ImageContainer } from "./styles";

import Image from "next/image";
import { ReactElement } from "react";

interface ClipProps {
  YTKey: string;
  title: string;
  type: string;
}

export default function Clip({ YTKey, title, type }: ClipProps): ReactElement {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={`https://img.youtube.com/vi/${YTKey}/mqdefault.jpg`}
          blurDataURL={`https://img.youtube.com/vi/${YTKey}/sddefault.jpg`}
          alt="ClipThumbnail"
          placeholder="blur"
          width={160}
          height={90}
          layout="responsive"
        />
      </ImageContainer>

      <div>
        <span>{title}</span>
        <span>{type}</span>
      </div>
    </Container>
  );
}
