import { AnimatePresence, motion } from "framer-motion";
import { ImageStyle, ImageWrapper, LinearGradient } from "./styles";
import { ReactElement, Ref } from "react";

import { Links } from "utils";
import { carouselImageAnimVariant } from "./animation-variants";

interface ICarouselImageProps {
  imageURL: string;
  direction: number;
  currentPage: number;
  handlePageChange: (direction: 1 | -1, clicked: boolean) => void;
  local?: boolean;
  ref?: Ref<HTMLDivElement>;
}

export default function CarouselImage({
  imageURL,
  direction,
  currentPage = 0,
  handlePageChange,
  local = false,
  ref,
}: ICarouselImageProps): ReactElement {
  const swipeConfidenceThreshold = 10000;
  function swipePower(offset: number, velocity: number) {
    return Math.abs(offset) * velocity;
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      <ImageWrapper
        ref={ref}
        key={currentPage}
        custom={direction}
        variants={carouselImageAnimVariant}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: {
            type: "spring",
            stiffness: 500,
            damping: 60,
          },
          opacity: { duration: 1.5 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            handlePageChange(1, true);
          } else if (swipe > swipeConfidenceThreshold) {
            handlePageChange(-1, true);
          }
        }}
      >
        <ImageStyle
          data-testid="CarouselImageImage"
          src={
            local
              ? require("" + imageURL)
              : `${Links.tmdbImageURL}w1280${imageURL}`
          }
          blurDataURL={
            local
              ? require("" + imageURL)
              : `${Links.tmdbImageURL}w300${imageURL}`
          }
          placeholder="blur"
          width={1280}
          height={720}
          layout="responsive"
        />
      </ImageWrapper>
      <LinearGradient />
    </AnimatePresence>
  );
}
