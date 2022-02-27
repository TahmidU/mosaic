import { Container, ImageStyle, LinearGradient } from "./styles";
import { ReactElement, useState } from "react";

import Image from "next/image";
import { carouselImageAnimVariant } from "./animation-variant";

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

  console.log(currentStep);

  return (
    <>
      <Container
        index={index}
        currentStep={currentStep}
        variants={carouselImageAnimVariant}
        initial={false}
        animate={
          index - currentStep >= 1
            ? "moveRight"
            : index - currentStep === 0
            ? "show"
            : index - currentStep <= -1
            ? "moveLeft"
            : ""
        }
        transition={{ duration: 0.85 }}
      >
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
    </>
  );
}
