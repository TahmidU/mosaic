import { AnimatePresence, motion } from "framer-motion";

import { LinearGradient } from "./styles";
import Links from "utils/Links";
import { ReactElement } from "react";
import { carouselImageAnimVariant } from "./animation-variants";

interface ICarouselImageProps {
  imageURL: string;
  direction: number;
  disabled?: boolean;
  currentStep: number;
  handleSlideChange: (direction: 1 | -1, clicked: boolean) => void;
  local?: boolean;
}

export default function CarouselImage({
  imageURL,
  direction,
  currentStep = 0,
  handleSlideChange,
  local = false,
}: ICarouselImageProps): ReactElement {
  const swipeConfidenceThreshold = 10000;
  function swipePower(offset: number, velocity: number) {
    return Math.abs(offset) * velocity;
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={currentStep}
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
            handleSlideChange(1, true);
          } else if (swipe > swipeConfidenceThreshold) {
            handleSlideChange(-1, true);
          }
        }}
        style={{ position: "absolute" }}
      />
      <LinearGradient />
    </AnimatePresence>
  );
}
