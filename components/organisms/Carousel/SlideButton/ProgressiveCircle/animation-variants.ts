export function produceProgressiveCircleAnimVariant(radius: number) {
  return {
    show: {
      opacity: 1,
      strokeDashoffset: 0,
    },
    hide: {
      opacity: 0,
      strokeDashoffset: Math.ceil(2 * Math.PI * radius),
    },
  };
}
