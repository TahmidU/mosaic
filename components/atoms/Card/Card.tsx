import { Container, MovieImage, SubSection, Wrapper } from "./styles";
import { ReactElement, ReactNode } from "react";

type Variant = "default" | "vertical_image";
interface ICardProps {
  variant?: Variant;
  src?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Card({
  variant = "default",
  src,
  imageWidth = 150,
  imageHeight = 225,
  className,
  children,
  onClick,
}: ICardProps): ReactElement {
  if (variant === "vertical_image") {
    return (
      <Container className={className} onClick={onClick}>
        <Wrapper>
          <MovieImage
            src={src || ""}
            width={imageWidth}
            height={imageHeight}
            layout="responsive"
          />
        </Wrapper>
        <SubSection>{children}</SubSection>
      </Container>
    );
  }

  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
}
