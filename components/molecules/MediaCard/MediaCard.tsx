import { Container, ImageWrapper, MediaImage, TitleText } from "./styles";

import { ReactElement } from "react";

interface IMediaCardProps {
  title: string;
  src: string;
  onClick?: () => void;
  className?: string;
}

export default function MediaCard({
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
