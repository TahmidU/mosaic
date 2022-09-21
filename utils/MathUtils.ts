export function modCycle(currentNumber: number, limit: number) {
  return ((currentNumber % limit) + limit) % limit;
}

export function shortenRuntime(runtimeMins?: number) {
  if (!runtimeMins) return runtimeMins;

  const hours = Math.floor(runtimeMins / 60);
  const minutes = runtimeMins - hours * 60;

  return `${hours}hrs ${minutes}mins`;
}

const MathUtils = {
  modCycle,
  shortenRuntime,
};

export default MathUtils;
