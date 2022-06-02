import { ReactElement, useState } from "react";

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
  startPage,
  onPageChange,
}: IMobileCarouselProps): ReactElement {
  const [[page, direction], setPage] = useState([startPage, 0]);

  return (
    <Container>
      <div></div>
    </Container>
  );
}
