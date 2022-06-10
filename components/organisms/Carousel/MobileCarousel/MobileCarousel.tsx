import {
  Container,
  ImageContainer,
  MovieInfoStyle,
  StepStatusStyle,
  StepsContainer,
} from "./styles";
import { ReactElement, useState } from "react";

import { AnimationControls } from "framer-motion";
import CarouselImage from "components/organisms/Carousel/CarouselImage";
import { IDiscoverMovie } from "types/api/discover";
import MovieInfo from "../MovieInfo";

interface IMobileCarouselProps {
  carouselData?: IDiscoverMovie[];
  localImages?: boolean;
  startPage?: number;
  onPageChange?: (step: number) => void;
  page: number;
  direction: number;
  handlePageDirectionChange: (direction: 1 | -1) => void;
  textAnimControls?: AnimationControls;
}

export default function MobileCarousel({
  carouselData,
  localImages,
  startPage = 0,
  onPageChange,
  page,
  direction,
  handlePageDirectionChange,
  textAnimControls,
}: IMobileCarouselProps): ReactElement {
  function handlePageChange() {}

  if (!carouselData || carouselData.length === 0) {
    return <></>;
  }

  return (
    <Container>
      <ImageContainer>
        <CarouselImage
          direction={direction}
          imageURL={carouselData[page]?.backdrop_path}
          currentPage={page}
          local={localImages}
          handlePageChange={handlePageDirectionChange}
        />
      </ImageContainer>
      <MovieInfoStyle
        title={carouselData[page]?.title}
        desc={carouselData[page]?.overview}
        releaseDate={carouselData[page]?.release_date}
        animationControls={textAnimControls}
      />
      <StepsContainer>
        <StepStatusStyle />
      </StepsContainer>
    </Container>
  );
}
