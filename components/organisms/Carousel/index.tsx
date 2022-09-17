import { DesktopCarouselStyle, MobileCarouselStyle } from "./styles";
import { ReactElement, useEffect, useState } from "react";

import { IDiscoverMovie } from "types/api/discover";
import { MathUtils } from "utils";
import { textAnimVariant } from "./MovieInfo/animationVariants";
import { useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import useVideoInfoCache from "./useCarouselVideoCache";

interface ICarouselProps {
  carouselData?: IDiscoverMovie[];
  desktopAutoSlideDuration?: number;
  desktopDisableAutoSlide?: boolean;
  startPage?: number;
}

export const carouselMediaQuery = {
  query: "(max-width: 1264px)",
};

export default function Carousel({
  carouselData = [],
  desktopAutoSlideDuration = undefined,
  desktopDisableAutoSlide = false,
  startPage = 0,
}: ICarouselProps): ReactElement {
  const [[page, direction], setPage] = useState([startPage, 0]);
  const { currentVideos, onPageChange } = useVideoInfoCache();

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

  console.log(isMobile);

  return (
    <>
      {isMobile ? (
        <MobileCarouselStyle
          carouselData={carouselData}
          page={page}
          direction={direction}
          handlePageDirectionChange={handlePageDirectionChange}
          handlePageChange={handlePageChange}
          textAnimControls={textAnimControls}
        />
      ) : (
        <DesktopCarouselStyle
          carouselData={carouselData}
          videos={currentVideos}
          handlePageDirectionChange={handlePageDirectionChange}
          handlePageChange={handlePageChange}
          page={page}
          direction={direction}
          textAnimControls={textAnimControls}
          autoSlideDuration={desktopAutoSlideDuration}
          disableAutoSlide={desktopDisableAutoSlide}
        />
      )}
    </>
  );
}
