import { FatContainer, TitleText } from "./styles";

import { ReactElement } from "react";

type Variant = "Fat" | "Long";

interface IMediaCardProps {
  variant: Variant;
  title: string;
  src: string;
}

export default function MediaCard({
  title,
  src,
}: IMediaCardProps): ReactElement {
  return (
    <FatContainer variant="vertical_image" src={src} imageWidth={500}>
      <TitleText>{title}</TitleText>
    </FatContainer>
  );
}
