import { Container, ImageStyle, LinearGradient } from "./styles";
import { ReactElement, useState } from "react";

import Image from "next/image";

//! Some of the code here are kept for slide animation in near future.
interface CarouselImageProps {
  imageURL: string;
  disabled?: boolean;
  index?: number;
  currentStep?: number;
}

export default function CarouselImage({
  imageURL,
  index = 0,
  currentStep = 0,
}: CarouselImageProps): ReactElement {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {!(Math.abs(index - currentStep) > 1) && (
        <Container index={index} currentStep={currentStep}>
          <ImageStyle>
            {!loading && <LinearGradient />}
            <Image
              alt="Carousel"
              src={`https://image.tmdb.org/t/p/w1280${imageURL}`}
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
        </Container>
      )}
    </>
  );
}
