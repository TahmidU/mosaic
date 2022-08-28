import { Container, ImageWrapper, MediaImage, TitleText } from "./styles";

import { ReactElement } from "react";

type Variant = "Fat" | "Long";

interface IMediaCardProps {
  variant?: Variant;
  title: string;
  src: string;
  onClick?: () => void;
  className?: string;
}

export default function MediaCard({
  variant = "Fat",
  title,
  src,
  onClick,
  className,
}: IMediaCardProps): ReactElement {
  return (
    <Container className={className} onClick={onClick}>
      <ImageWrapper>
        <MediaImage
          alt={title}
          src={src}
          width={500}
          height={350}
          layout="responsive"
        />
      </ImageWrapper>
      <TitleText>{title}</TitleText>
    </Container>
  );
}
