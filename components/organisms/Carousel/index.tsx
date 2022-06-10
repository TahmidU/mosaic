import { ReactElement, useEffect, useState } from "react";

import { default as DesktopCarousel } from "./Carousel";
import { IDiscoverMovie } from "types/api/discover";
import { IVideo } from "types/api/videos";
import { MathUtils } from "utils";
import MobileCarousel from "./MobileCarousel";
import { textAnimVariant } from "./MovieInfo/animation-variants";
import { useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface ICarouselProps {
  carouselData?: IDiscoverMovie[];
  videos?: IVideo;
  localImages?: boolean;
  disableAutoSlide?: boolean;
  autoSlideDuration?: number;
  startPage?: number;
  autoSlideCallback?: () => void;
  onPageChange?: (step: number) => void;
}

export default function Carousel({
  carouselData = [],
  videos,
  localImages = false,
  disableAutoSlide = false,
  autoSlideDuration = 15,
  startPage = 0,
  autoSlideCallback = () => {},
  onPageChange,
}: ICarouselProps): ReactElement {
  const [[page, direction], setPage] = useState([startPage, 0]);

  // Text Animations
  const textAnimControls = useAnimation();

  useEffect(() => {
    textAnimControls.set(textAnimVariant.hide);
    textAnimControls.start(() => textAnimVariant.show);

    onPageChange && onPageChange(page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  function handlePageDirectionChange(direction: 1 | -1) {
    setPage(([_page, _direction]) => [
      MathUtils.mod(_page + direction, carouselData.length),
      direction,
    ]);
  }

  function handlePageChange(toPage: number) {
    toPage - page < 0 ? setPage([toPage, -1]) : setPage([toPage, 1]);
  }

  return (
    <>
      {isMobile ? (
        <MobileCarousel
          carouselData={carouselData}
          onPageChange={onPageChange}
          page={page}
          direction={direction}
          handlePageDirectionChange={handlePageDirectionChange}
          textAnimControls={textAnimControls}
        />
      ) : (
        <DesktopCarousel
          carouselData={carouselData}
          videos={videos}
          onPageChange={onPageChange}
          disableAutoSlide
          handlePageDirectionChange={handlePageDirectionChange}
          handlePageChange={handlePageChange}
          page={page}
          direction={direction}
          textAnimControls={textAnimControls}
        />
      )}
    </>
  );
}
