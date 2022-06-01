export function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

const MathUtils = {
  mod,
};

export default MathUtils;
