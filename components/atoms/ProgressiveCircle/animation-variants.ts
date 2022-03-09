export function produceProgressiveCircleAnimVariant(
  radius: number,
  fillColourFrom: string,
  fillColourTo: string
) {
  return {
    show: {
      strokeDashoffset: 0,
      fill: fillColourTo,
    },
    hide: {
      strokeDashoffset: Math.ceil(2 * Math.PI * radius),
      fill: fillColourFrom,
    },
  };
}
