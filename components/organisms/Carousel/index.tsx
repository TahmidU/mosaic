import { ReactElement, useEffect, useState } from "react";

import { default as DesktopCarousel } from "./Carousel";
import { IDiscoverMovie } from "types/api/discover";
import { IVideos } from "types/api/videos";
import { MathUtils } from "utils";
import MobileCarousel from "./MobileCarousel";
import { textAnimVariant } from "./MovieInfo/animationVariants";
import { useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface ICarouselProps {
  carouselData?: IDiscoverMovie[];
  videos?: IVideos;
  startPage?: number;
  onPageChange?: (videoId: number) => void;
}

export const carouselMediaQuery = {
  query: "(max-width: 1264px)",
};

export default function Carousel({
  carouselData = [],
  videos,
  startPage = 0,
  onPageChange,
}: ICarouselProps): ReactElement {
  const [[page, direction], setPage] = useState([startPage, 0]);

  // Text Animations
  const textAnimControls = useAnimation();

  useEffect(() => {
    textAnimControls.set(textAnimVariant.hide);
    textAnimControls.start(() => textAnimVariant.show);

    onPageChange && carouselData && onPageChange(carouselData[page].id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const isMobile = useMediaQuery(carouselMediaQuery);

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
          page={page}
          direction={direction}
          handlePageDirectionChange={handlePageDirectionChange}
          handlePageChange={handlePageChange}
          textAnimControls={textAnimControls}
        />
      ) : (
        <DesktopCarousel
          carouselData={carouselData}
          videos={videos}
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
