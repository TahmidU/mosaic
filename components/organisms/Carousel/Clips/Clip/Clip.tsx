import { Container, ImageContainer } from "./styles";
import { ReactElement, useState } from "react";

import Image from "next/image";

interface ClipProps {
  YTKey: string;
  title: string;
  type: string;
}

export default function Clip({ YTKey, title, type }: ClipProps): ReactElement {
  const [visible, setVisibility] = useState(false);

  return (
    <Container visible={visible}>
      <ImageContainer>
        <Image
          src={`https://img.youtube.com/vi/${YTKey}/mqdefault.jpg`}
          alt="ClipThumbnail"
          placeholder="empty"
          width={160}
          height={90}
          layout="responsive"
          loading="eager"
          onLoadingComplete={() => setVisibility(true)}
        />
      </ImageContainer>

      <div>
        <span>{title}</span>
        <span>{type}</span>
      </div>
    </Container>
  );
}
