export function produceProgressiveCircleAnimVariant(radius: number) {
  return {
    show: {
      strokeDashoffset: 0,
    },
    hide: {
      strokeDashoffset: Math.ceil(2 * Math.PI * radius),
    },
  };
}
