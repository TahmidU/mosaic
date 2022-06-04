import { ReactElement, useState } from "react";

import CarouselImage from "components/organisms/Carousel/CarouselImage";
import { Container } from "./styles";
import { IDiscoverMovie } from "types/api/discover";

interface IMobileCarouselProps {
  carouselData?: IDiscoverMovie[];
  localImages?: boolean;
  startPage?: number;
  onPageChange?: (step: number) => void;
}

export default function MobileCarousel({
  carouselData,
  localImages,
  startPage = 0,
  onPageChange,
}: IMobileCarouselProps): ReactElement {
  const [[page, direction], setPage] = useState([startPage, 0]);

  function handlePageChange() {}

  if (!carouselData || carouselData.length === 0) {
    return <></>;
  }

  return (
    <Container>
      <CarouselImage
        direction={direction}
        imageURL={carouselData[page]?.backdrop_path}
        currentPage={page}
        local={localImages}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}
