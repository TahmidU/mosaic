import { Container, ImageContainer } from "./styles";
import { ReactElement, useState } from "react";

import Image from "next/image";

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
          alt="ClipThumbnail"
          placeholder="empty"
          width={160}
          height={90}
          loading="lazy"
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
