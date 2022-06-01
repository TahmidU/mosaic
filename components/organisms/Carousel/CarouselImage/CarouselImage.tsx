import { AnimatePresence, motion } from "framer-motion";
import { ReactElement, useState } from "react";

import Image from "next/image";
import { LinearGradient } from "./styles";
import { carouselImageAnimVariant } from "./animation-variants";

//! Some of the code here are kept for slide animation in near future.
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
        src={local ? imageURL : `https://image.tmdb.org/t/p/w1280${imageURL}`}
        custom={direction}
        variants={carouselImageAnimVariant}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 1.25 },
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
