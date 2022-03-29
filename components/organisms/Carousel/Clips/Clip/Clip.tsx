import { Container } from "./styles";
import Image from "next/image";
import { ReactElement } from "react";

interface ClipProps {
  YTKey: string;
  local?: boolean;
}

export default function Clip({
  YTKey,
  local = false,
}: ClipProps): ReactElement {
  return (
    <Container>
      <Image
        src={
          local ? YTKey : `https://img.youtube.com/vi/${YTKey}/hqdefault.jpg`
        }
        blurDataURL={
          local ? YTKey : `https://img.youtube.com/vi/${YTKey}/sddefault.jpg`
        }
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
