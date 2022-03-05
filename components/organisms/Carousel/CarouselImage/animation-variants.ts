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
};
