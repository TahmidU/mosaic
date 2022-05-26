import { Container, ImageContainer } from "./styles";
import { ReactElement, useState } from "react";

import Image from "next/image";

interface IClipProps {
  YTKey: string;
  title: string;
  type: string;
  onClick: () => void;
}

export default function Clip({
  YTKey,
  title,
  type,
  onClick,
}: IClipProps): ReactElement {
  return (
    <Container onClick={onClick}>
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
