export function produceProgressiveCircleAnimVariant(
  radius: number,
  fillColourFrom: string,
  fillColourTo: string
) {
  return {
    show: {
      strokeOpacity: 1,
      strokeDashoffset: 0,
      fill: fillColourTo,
    },
    hide: {
      strokeOpacity: 0,
      strokeDashoffset: Math.ceil(2 * Math.PI * radius),
      fill: fillColourFrom,
    },
  };
}
