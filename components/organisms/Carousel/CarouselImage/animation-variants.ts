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

/*
export const carouselImageAnimVariant = {
  moveLeft: {
    right: "201%",
    opacity: "0%",
  },
  show: {
    right: "100%",
    opacity: "100%",
  },
  moveRight: {
    right: "-201%",
    opacity: "0%",
  },
};*/

export const carouselImageAnimVariant = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 2000 : -2000,
      opacity: "0%",
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: "100%",
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 2000 : -2000,
      opacity: "0%",
    };
  },
};
