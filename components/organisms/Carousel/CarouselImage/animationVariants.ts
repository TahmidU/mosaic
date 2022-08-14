export const carouselImageAnimVariant = {
  enter: (direction: number) => {
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
    return {
      zIndex: 0,
      x: direction < 0 ? 1280 : -1280,
      opacity: "0%",
    };
  },
};
