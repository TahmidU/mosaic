export function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function shortenRuntime(runtimeMins?: number) {
  if (!runtimeMins) return runtimeMins;

  const hours = Math.floor(runtimeMins / 60);
  const minutes = runtimeMins - hours * 60;

  return `${hours}hrs ${minutes}mins`;
}

const MathUtils = {
  mod,
  shortenRuntime,
};

export default MathUtils;
