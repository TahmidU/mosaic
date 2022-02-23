import { ReactElement, useState } from "react";
import { ImageStyle, LinearGradient } from "./styles";
import Image from "next/image";

interface CarouselImageProps {
  imageURL: string;
  disabled?: boolean;
}

export default function CarouselImage({
  imageURL,
  disabled = false,
}: CarouselImageProps): ReactElement {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {!loading && !disabled && <LinearGradient />}
      {!disabled && (
        <ImageStyle>
          <Image
            alt="Carousel"
            src={`https://image.tmdb.org/t/p/original${imageURL}`}
            blurDataURL={`https://image.tmdb.org/t/p/w300${imageURL}`}
            placeholder="blur"
            width={1280}
            height={720}
            layout="responsive"
            onLoadingComplete={() => {
              setLoading(false);
            }}
          />
        </ImageStyle>
      )}
    </>
  );
}
