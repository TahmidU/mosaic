import { Container } from "./styles";
import Image from "next/image";
import { ReactElement } from "react";

interface ClipProps {
  YTKey: string;
}

export default function Clip({ YTKey }: ClipProps): ReactElement {
  return (
    <Container>
      <Image
        src={`https://img.youtube.com/vi/${YTKey}/hqdefault.jpg`}
        blurDataURL={`https://img.youtube.com/vi/${YTKey}/sddefault.jpg`}
        alt="ClipThumbnail"
        placeholder="blur"
        width={300}
        height={300}
        layout="responsive"
      />
      <div></div>
    </Container>
  );
}
