type NonNegativeInteger = number;

function isNonNegativeInteger(n: number): boolean {
  return Number.isInteger(n) && n >= 0;
}

function assertNonNegativeInteger(n: number): void {
  if (!isNonNegativeInteger(n)) throw new Error('n must be a non-negative integer');
}

// This implementation is recursive and slow and will (sooner or
// later) create a stack overflow. Means we need to restrict the
// scope of the `n` variable.
const recursiveMaxN = 20;
function recursive(n: NonNegativeInteger): bigint {
  assertNonNegativeInteger(n);

  if (n === 0) return 0n;
  else if (n === 1) return 1n;
  else if (n >= 2 && n <= recursiveMaxN) return recursive(n - 1) + recursive(n - 2);
  else throw new Error(`n must be between 0 and ${recursiveMaxN}`);
}

function tailRecursive(n: NonNegativeInteger): bigint {
  assertNonNegativeInteger(n);

  function tailRecursive(n: NonNegativeInteger, a: bigint, b: bigint): bigint {
    if (n === 0) return a;
    else return tailRecursive(n - 1, b, a + b);
  }

  return tailRecursive(n, 0n, 1n);
}

function iterative(n: NonNegativeInteger): bigint {
  assertNonNegativeInteger(n);

  function iterate(n: NonNegativeInteger): bigint {
    let prev = 0n;
    let curr = 1n;

    for (let i = 2; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }

    return curr;
  }

  if (n === 0) return 0n;
  else return iterate(n);
}

export { recursive, tailRecursive, iterative };
