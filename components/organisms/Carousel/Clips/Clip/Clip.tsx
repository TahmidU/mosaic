import { Container, ImageContainer } from "./styles";

import Image from "next/image";
import { Links } from "utils";
import { ReactElement } from "react";

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
    <Container testId="Clip" onClick={onClick}>
      <ImageContainer>
        <Image
          src={`${Links.youtubeThumbnailURL}${YTKey}/mqdefault.jpg`}
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
