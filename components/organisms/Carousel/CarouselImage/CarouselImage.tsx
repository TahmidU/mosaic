import { AnimatePresence, motion } from "framer-motion";
import { ImageStyle, LinearGradient } from "./styles";
import { ReactElement, Ref } from "react";

import Links from "utils/Links";
import { carouselImageAnimVariant } from "./animation-variants";

interface ICarouselImageProps {
  imageURL: string;
  direction: number;
  disabled?: boolean;
  currentPage: number;
  handlePageChange: (direction: 1 | -1, clicked: boolean) => void;
  local?: boolean;
  ref?: Ref<HTMLImageElement>;
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
      <ImageStyle
        ref={ref}
        key={currentPage}
        src={local ? imageURL : `${Links.tmdbImage}w1280${imageURL}`}
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
      />
      <LinearGradient />
    </AnimatePresence>
  );
}
