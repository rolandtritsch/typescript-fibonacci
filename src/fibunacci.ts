
// This implementation is recursive and slow and will (sooner or
// later) create a stack overflow. Means we need to restrict the
// scope of the `n` variable.
const recursiveMaxN = 40;
function recursive(n: number): bigint {
  if (n === 0) return 0n;
  else if (n === 1) return 1n;
  else if (n >= 2 && n <= recursiveMaxN) return recursive(n - 1) + recursive(n - 2);
  else if (n > recursiveMaxN) throw new Error(`n must be between 0 and ${recursiveMaxN}`);
  else throw new Error('n must be a non-negative integer');
}

export { recursive };
