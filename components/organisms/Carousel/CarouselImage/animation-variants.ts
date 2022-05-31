export function getCarouselImageAnimVariant(
  left: number,
  show: number,
  right: number
) {
  return {
    moveLeft: {
      right: `${left}%`,
      opacity: "0%",
    },
    show: {
      right: `${show}%`,
      opacity: "100%",
    },
    moveRight: {
      right: `${right}%`,
      opacity: "0%",
    },
  };
}

export const carouselImageAnimVariant = {
  enter: (direction: number) => {
    console.log(direction);
    return {
      zIndex: 1,
      x: direction > 0 ? 1280 : -1280,
      opacity: "0%",
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: "100%",
  },
  exit: (direction: number) => {
    //console.log(direction);
    return {
      zIndex: 0,
      x: direction < 0 ? 1280 : -1280,
      opacity: "0%",
    };
  },
};
