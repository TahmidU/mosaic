import { FatContainer, TitleText } from "./styles";

import { ReactElement } from "react";

type Variant = "Fat" | "Long";

interface IMediaCardProps {
  variant?: Variant;
  title: string;
  src: string;
  className?: string;
}

export default function MediaCard({
  variant = "Fat",
  title,
  src,
  className,
}: IMediaCardProps): ReactElement {
  return (
    <FatContainer
      className={className}
      variant="vertical_image"
      src={src}
      imageWidth={500}
      imageHeight={350}
    >
      <TitleText>{title}</TitleText>
    </FatContainer>
  );
}
